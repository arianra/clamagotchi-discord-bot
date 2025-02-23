import { getRandomColor } from "@/lib/constants/colors";
import { EMOJI_CLAM } from "@/lib/constants/emojis";
import { Pet } from "@/lib/types/Pet";
import { EmbedBuilder } from "discord.js";
import { FoodKey } from "../food-keys";
import { FOOD_ITEMS } from "../food";

interface FeedEmbedInfo {
  pet: Pet;
  foodKey: FoodKey;
  oldHunger: number;
  newHunger: number;
  oldAffection: number;
  newAffection: number;
  oldPearls: number;
  newPearls: number;
  cost: number;
  reaction: string;
}

const formatStatChange = (
  oldVal: number,
  newVal: number,
  isPercentage = true
): string => {
  if (isPercentage) {
    const oldPercent = (oldVal * 100).toFixed(1);
    const newPercent = (newVal * 100).toFixed(1);

    if (newVal > oldVal) {
      return `${oldPercent}% → **${newPercent}%** 🟢`;
    } else if (newVal < oldVal) {
      return `${oldPercent}% → **${newPercent}%** 🔴`;
    }
    return `${oldPercent}% → **${newPercent}%**`;
  } else {
    if (newVal > oldVal) {
      return `${oldVal} → **${newVal}** 🟢`;
    } else if (newVal < oldVal) {
      return `${oldVal} → **${newVal}** 🔴`;
    }
    return `${oldVal} → **${newVal}**`;
  }
};

export const createFeedEmbed = (info: FeedEmbedInfo) => {
  const food = FOOD_ITEMS[info.foodKey];

  return new EmbedBuilder()
    .setColor(getRandomColor(700))
    .setTitle(`${EMOJI_CLAM} Feeding Time: ${info.pet.name} ${EMOJI_CLAM}`)
    .setDescription(info.reaction)
    .addFields(
      {
        name: "Food",
        value: [
          `Name: **${food.name}**`,
          `Type: **${food.type}**`,
          `Tier: **${food.tier}**`,
          `Cost: **${info.cost}** pearls`,
        ].join("\n"),
        inline: true,
      },
      {
        name: "Stats Changed",
        value: [
          `Hunger: ${formatStatChange(info.oldHunger, info.newHunger)}`,
          `Affection: ${formatStatChange(
            info.oldAffection,
            info.newAffection
          )}`,
          `Pearls: ${formatStatChange(info.oldPearls, info.newPearls, false)}`,
        ].join("\n"),
        inline: true,
      }
    )
    .setFooter({ text: "Feed your Clamagotchi regularly to keep them happy!" })
    .toJSON();
};
