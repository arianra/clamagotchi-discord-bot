import { Pet } from "@/lib/types/Pet";
import { FoodKey, getRandomFood } from "./food-keys";
import { FOOD_ITEMS, FoodTier } from "./food";
import { getFoodReaction } from "./food-reactions";
import { getFoodPreferenceAffection } from "./food-preferences";
import { PersonalityType } from "@/lib/constants/db-enums";

const MAX_TIREDNESS = 0.8; // 80% tiredness cap for feeding
const MAX_RETRIES = 5;

interface FeedResult {
  success: boolean;
  message: string;
  foodKey?: FoodKey;
  newAffection?: number;
  newHunger?: number;
  cost?: number;
}

export const handleFeed = (pet: Pet, pearls: number): FeedResult => {
  if (pet.tiredness >= MAX_TIREDNESS) {
    return {
      success: false,
      message: "*yawns* I'm too tired to eat right now... 😴",
    };
  }

  if (pet.hunger <= 0) {
    return {
      success: false,
      message:
        "*rubs belly* I'm completely full, I couldn't eat another bite! 🫄✨",
    };
  }

  // Try to find affordable food, starting from highest tier
  let currentTier: FoodTier = FoodTier.HIGH;
  let attempts = 0;
  let selectedFood: FoodKey | null = null;
  let foodCost = Infinity;

  while (attempts < MAX_RETRIES && foodCost > pearls) {
    selectedFood = getRandomFood(currentTier);
    foodCost = FOOD_ITEMS[selectedFood].cost;

    // If too expensive, try a lower tier
    if (foodCost > pearls) {
      if (currentTier === FoodTier.HIGH) {
        currentTier = FoodTier.MEDIUM;
      } else if (currentTier === FoodTier.MEDIUM) {
        currentTier = FoodTier.LOW;
      }
      attempts++;
    }
  }

  // If we couldn't find affordable food
  if (!selectedFood || foodCost > pearls) {
    return {
      success: false,
      message:
        "*looks disappointed* You searched the market for affordable food, but found nothing... 💔",
    };
  }

  const food = FOOD_ITEMS[selectedFood];
  const affectionChange = getFoodPreferenceAffection(
    pet.personality as PersonalityType,
    selectedFood
  );
  const isLiked = affectionChange > 0;
  const isDisliked = affectionChange < 0;
  const reaction = getFoodReaction(
    selectedFood,
    isLiked ? true : isDisliked ? false : null
  );

  // Calculate new affection, clamped between 0 and 1
  const newAffection = Math.min(
    1,
    Math.max(0, pet.affection + affectionChange)
  );

  // Calculate new hunger, ensuring it doesn't go below 0
  const hungerReduction = food.fillingness * 0.1; // 10% of fillingness
  const newHunger = Math.max(0, pet.hunger - hungerReduction);

  return {
    success: true,
    message: `You feed **${pet.name}** some **${food.name}**.\n${reaction}`,
    foodKey: selectedFood,
    newAffection,
    newHunger,
    cost: food.cost,
  };
};
