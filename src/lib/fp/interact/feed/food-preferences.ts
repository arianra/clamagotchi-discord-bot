import { FoodKey } from "./food-keys";
import { DB_ENUM_PERSONALITY, PersonalityType } from "@/lib/constants/db-enums";

interface FoodPreference {
  likes: FoodKey[];
  dislikes: FoodKey[];
}

const AFFECTION_BOOST_LIKED = 0.03; // +3% affection for liked food
const AFFECTION_LOSS_DISLIKED = -0.02; // -2% affection for disliked food

export const PERSONALITY_FOOD_PREFERENCES: Record<
  PersonalityType,
  FoodPreference
> = {
  BRAT: {
    likes: [FoodKey.TIDE_TAFFIES, FoodKey.SEAFOAM_CANDY, FoodKey.OCEAN_POPS],
    dislikes: [FoodKey.KELP_SALAD, FoodKey.SEABED_STEW, FoodKey.CORAL_CURRY],
  },
  KAWAI: {
    likes: [
      FoodKey.SAND_DOLLAR_COOKIES,
      FoodKey.CORAL_NIBBLES,
      FoodKey.MERMAIDS_BLESSING,
    ],
    dislikes: [
      FoodKey.KRAKEN_BITES,
      FoodKey.DEEP_ABYSS_DELICACY,
      FoodKey.LEVIATHANS_LUNCH,
    ],
  },
  "VALLEY GIRL": {
    likes: [
      FoodKey.GOLDEN_CAVIAR,
      FoodKey.PEARL_DELICACY,
      FoodKey.LUMINOUS_JELLIES,
    ],
    dislikes: [
      FoodKey.PLANKTON_CRACKERS,
      FoodKey.ALGAE_CHIPS,
      FoodKey.DEEP_SEA_PELLETS,
    ],
  },
  BRO: {
    likes: [
      FoodKey.KRAKEN_BITES,
      FoodKey.PRESSURE_COOKED_PLATTER,
      FoodKey.LEVIATHANS_LUNCH,
    ],
    dislikes: [
      FoodKey.SEAFOAM_CANDY,
      FoodKey.CORAL_NIBBLES,
      FoodKey.BUBBLE_BISCUITS,
    ],
  },
  GEEKY: {
    likes: [
      FoodKey.HYDROTHERMAL_HASH,
      FoodKey.PHOSPHORUS_POPS,
      FoodKey.DEEP_ABYSS_DELICACY,
    ],
    dislikes: [FoodKey.TIDE_TAFFIES, FoodKey.SEAFOAM_CANDY, FoodKey.OCEAN_POPS],
  },
  LAZY: {
    likes: [
      FoodKey.SEAWEED_SNACK,
      FoodKey.ALGAE_CHIPS,
      FoodKey.DEEP_SEA_PELLETS,
    ],
    dislikes: [
      FoodKey.ROYAL_FEAST,
      FoodKey.ANCIENT_OCEAN_FEAST,
      FoodKey.MYTHICAL_MARITIME_MEAL,
    ],
  },
  BUBBLY: {
    likes: [
      FoodKey.BUBBLE_BISCUITS,
      FoodKey.OCEAN_POPS,
      FoodKey.NEPTUNES_NECTAR,
    ],
    dislikes: [
      FoodKey.ABYSSAL_TRUFFLES,
      FoodKey.DEEP_ABYSS_DELICACY,
      FoodKey.PRESSURE_COOKED_PLATTER,
    ],
  },
  SASSY: {
    likes: [
      FoodKey.SIRENS_SONG_SOUP,
      FoodKey.GOLDEN_CAVIAR,
      FoodKey.PEARL_DELICACY,
    ],
    dislikes: [
      FoodKey.SEAWEED_SNACK,
      FoodKey.PLANKTON_CRACKERS,
      FoodKey.KELP_JERKY,
    ],
  },
  BITTER: {
    likes: [
      FoodKey.DEEP_ABYSS_DELICACY,
      FoodKey.KRAKEN_BITES,
      FoodKey.ABYSSAL_TRUFFLES,
    ],
    dislikes: [
      FoodKey.BUBBLE_BISCUITS,
      FoodKey.SEAFOAM_CANDY,
      FoodKey.SAND_DOLLAR_COOKIES,
    ],
  },
  DEMURE: {
    likes: [FoodKey.KELP_SALAD, FoodKey.REEF_ROLLS, FoodKey.AQUATIC_ALFREDO],
    dislikes: [
      FoodKey.KRAKEN_BITES,
      FoodKey.LEVIATHANS_LUNCH,
      FoodKey.PRESSURE_COOKED_PLATTER,
    ],
  },
  APATHETIC: {
    likes: [
      FoodKey.OCEAN_BREEZE_MIX,
      FoodKey.SEAWEED_SNACK,
      FoodKey.WAVE_WAFERS,
    ],
    dislikes: [
      FoodKey.ROYAL_FEAST,
      FoodKey.POSEIDONS_PLATTER,
      FoodKey.MYTHICAL_MARITIME_MEAL,
    ],
  },
  SHADY: {
    likes: [
      FoodKey.ABYSSAL_TRUFFLES,
      FoodKey.DEEP_ABYSS_DELICACY,
      FoodKey.ANCIENT_OCEAN_FEAST,
    ],
    dislikes: [
      FoodKey.CORAL_NIBBLES,
      FoodKey.BUBBLE_BISCUITS,
      FoodKey.OCEAN_POPS,
    ],
  },
  BOASTY: {
    likes: [
      FoodKey.GOLDEN_CAVIAR,
      FoodKey.ROYAL_FEAST,
      FoodKey.MYTHICAL_MARITIME_MEAL,
    ],
    dislikes: [
      FoodKey.SEAWEED_SNACK,
      FoodKey.ALGAE_CHIPS,
      FoodKey.PLANKTON_CRACKERS,
    ],
  },
  PUNK: {
    likes: [
      FoodKey.KRAKEN_BITES,
      FoodKey.HYDROTHERMAL_HASH,
      FoodKey.PRESSURE_COOKED_PLATTER,
    ],
    dislikes: [
      FoodKey.PEARL_DELICACY,
      FoodKey.MERMAIDS_BLESSING,
      FoodKey.SIRENS_SONG_SOUP,
    ],
  },
  SNOBBY: {
    likes: [FoodKey.GOLDEN_CAVIAR, FoodKey.PEARL_DELICACY, FoodKey.ROYAL_FEAST],
    dislikes: [
      FoodKey.DEEP_SEA_PELLETS,
      FoodKey.SEAWEED_SNACK,
      FoodKey.ALGAE_CHIPS,
    ],
  },
  DADDY: {
    likes: [
      FoodKey.ROYAL_FEAST,
      FoodKey.POSEIDONS_PLATTER,
      FoodKey.ANCIENT_OCEAN_FEAST,
    ],
    dislikes: [FoodKey.TIDE_TAFFIES, FoodKey.OCEAN_POPS, FoodKey.SEAFOAM_CANDY],
  },
  GIRLY: {
    likes: [
      FoodKey.MERMAIDS_BLESSING,
      FoodKey.PEARL_DELICACY,
      FoodKey.LUMINOUS_JELLIES,
    ],
    dislikes: [
      FoodKey.KRAKEN_BITES,
      FoodKey.HYDROTHERMAL_HASH,
      FoodKey.DEEP_ABYSS_DELICACY,
    ],
  },
};

export const getFoodPreferenceAffection = (
  personality: PersonalityType,
  foodKey: FoodKey
): number => {
  const preferences = PERSONALITY_FOOD_PREFERENCES[personality];

  if (preferences.likes.includes(foodKey)) {
    return AFFECTION_BOOST_LIKED;
  }
  if (preferences.dislikes.includes(foodKey)) {
    return AFFECTION_LOSS_DISLIKED;
  }
  return 0;
};
