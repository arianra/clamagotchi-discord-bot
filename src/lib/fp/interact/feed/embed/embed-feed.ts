import { getRandomColor } from "@/lib/constants/colors";
import { EMOJI_CLAM } from "@/lib/constants/emojis";
import { EmbedBuilder } from "discord.js";
import { FoodKey } from "../food-keys";
import { FOOD_ITEMS } from "../food";

type PetFeedEmbed = {
  name: string;
};

interface FeedEmbedInfo {
  pet: PetFeedEmbed;
  foodKey: FoodKey;
  oldHunger: number;
  newHunger: number;
  oldAffection: number;
  newAffection: number;
  oldPearls: number;
  newPearls: number;
  oldTiredness: number;
  newTiredness: number;
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
    .setTitle(`🍽️ You fed ${info.pet.name} a ${food.name}`)
    .setDescription(`${info.pet.name}: ${info.reaction}`)
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
          ...(info.oldAffection !== info.newAffection
            ? [
                `Affection: ${formatStatChange(
                  info.oldAffection,
                  info.newAffection
                )}`,
              ]
            : []),
          `Tiredness: ${formatStatChange(
            info.oldTiredness,
            info.newTiredness
          )}`,
          `Pearls: ${formatStatChange(info.oldPearls, info.newPearls, false)}`,
        ].join("\n"),
        inline: true,
      }
    )
    .setFooter({
      text: `Food tiers have effect on how fulfilling the food is and how much xp you gain.`,
    })
    .toJSON();
};
