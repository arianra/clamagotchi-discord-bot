import { getRandomColor } from "@/lib/constants/colors";
import { EMOJI_CLAM } from "@/lib/constants/emojis";
import { Pet } from "@/lib/types/Pet";
import { EmbedBuilder } from "discord.js";
import { LevelUpResult } from "../../levelling/level-up-pet";
import { getXpForLevel } from "../../levelling/get-xp-for-level";

interface StatChange {
  oldValue: number;
  newValue: number;
  name: string;
}

const formatStatChange = (stat: StatChange): string => {
  if (stat.newValue > stat.oldValue) {
    return `${stat.name}: ${stat.oldValue} → **${stat.newValue}** (+${
      stat.newValue - stat.oldValue
    }) 🟢`;
  }
  return `${stat.name}: ${stat.oldValue} → **${stat.newValue}**`;
};

export const createLevelEmbed = (levelResult: LevelUpResult) => {
  if (!levelResult.didLevelUp) {
    return new EmbedBuilder()
      .setColor(getRandomColor(700))
      .setTitle(`${EMOJI_CLAM} Experience Gained! ${EMOJI_CLAM}`)
      .setDescription(
        `**${levelResult.pet.name}** gained experience! (${
          levelResult.pet.experience
        }/${getXpForLevel(levelResult.pet.level)} XP)`
      )
      .setFooter({
        text: `Tiredness, Fitness & Maturity have effect on how much XP you gain.`,
      })
      .toJSON();
  }

  const statChanges: StatChange[] = [
    {
      name: "Intelligence",
      oldValue: levelResult.oldStats.intelligence,
      newValue: levelResult.newStats!.intelligence,
    },
    {
      name: "Fitness",
      oldValue: levelResult.oldStats.fitness,
      newValue: levelResult.newStats!.fitness,
    },
    {
      name: "Reflective",
      oldValue: levelResult.oldStats.reflective,
      newValue: levelResult.newStats!.reflective,
    },
    {
      name: "Reactive",
      oldValue: levelResult.oldStats.reactive,
      newValue: levelResult.newStats!.reactive,
    },
    {
      name: "Carapace",
      oldValue: levelResult.oldStats.carapace,
      newValue: levelResult.newStats!.carapace,
    },
    {
      name: "Regeneration",
      oldValue: levelResult.oldStats.regeneration,
      newValue: levelResult.newStats!.regeneration,
    },
  ];

  const embed = new EmbedBuilder()
    .setColor(getRandomColor(700))
    .setTitle(`${EMOJI_CLAM} Level Up! ${EMOJI_CLAM}`)
    .setDescription(
      `**${levelResult.pet.name}** has reached level **${levelResult.newLevel}**!`
    )
    .addFields({
      name: "Stats Improved",
      value: statChanges
        .filter((stat) => stat.newValue !== stat.oldValue)
        .map(formatStatChange)
        .join("\n"),
      inline: false,
    });

  // Add evolution field if the pet evolved
  if (levelResult.hasEvolved) {
    embed.addFields({
      name: "Evolution",
      value: `Maturity: ${levelResult.oldMaturity} → **${levelResult.newMaturity}** 🌟`,
      inline: false,
    });
  }

  // Add XP progress field
  embed.addFields({
    name: "Experience",
    value: `Progress: ${levelResult.pet.experience}/${getXpForLevel(
      levelResult.newLevel
    )} XP`,
    inline: false,
  });

  embed.setFooter({
    text: `Tiredness, Fitness & Maturity have effect on how much XP you gain.`,
  });

  return embed.toJSON();
};
