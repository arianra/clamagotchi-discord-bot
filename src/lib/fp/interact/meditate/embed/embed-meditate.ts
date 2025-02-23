import { getRandomColor } from "@/lib/constants/colors";
import { EMOJI_CLAM } from "@/lib/constants/emojis";
import { EmbedBuilder } from "discord.js";

type PetMeditateEmbed = {
  name: string;
};

interface MeditateEmbedInfo {
  pet: PetMeditateEmbed;
  insight: string;
  oldTiredness: number;
  newTiredness: number;
  effectivenessMultiplier: number;
}

const formatStatChange = (oldVal: number, newVal: number): string => {
  const oldPercent = (oldVal * 100).toFixed(1);
  const newPercent = (newVal * 100).toFixed(1);

  if (newVal < oldVal) {
    return `${oldPercent}% → **${newPercent}%** 🟢`;
  } else if (newVal > oldVal) {
    return `${oldPercent}% → **${newPercent}%** 🔴`;
  }
  return `${oldPercent}% → **${newPercent}%**`;
};

const formatEffectiveness = (multiplier: number): string => {
  const percent = (multiplier * 100).toFixed(0);
  if (multiplier < 1) {
    return `(${percent}% effective)`;
  }
  return "";
};

export const createMeditateEmbed = (info: MeditateEmbedInfo) => {
  return new EmbedBuilder()
    .setColor(getRandomColor(700))
    .setTitle(`🧘 ${info.pet.name} Meditates`)
    .setDescription(
      `${info.insight}\n\n${formatEffectiveness(info.effectivenessMultiplier)}`
    )
    .addFields({
      name: "Stats Changed",
      value: `Tiredness: ${formatStatChange(
        info.oldTiredness,
        info.newTiredness
      )}`,
      inline: true,
    })
    .setFooter({
      text: "(Meditation is most effective once every 5 minutes)",
    })
    .toJSON();
};
