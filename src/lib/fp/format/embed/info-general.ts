import { getRandomColor } from "@/lib/constants/colors";
import { EMOJI_CLAM } from "@/lib/constants/emojis";
import { Pet } from "@/lib/types/Pet";
import { EmbedBuilder } from "discord.js";
import { getXpForLevel } from "../../levelling/get-xp-for-level";

export const formatEmbedInfoGeneral = (pet: Pet, discordId: string) => {
  return new EmbedBuilder()
    .setColor(getRandomColor(700))
    .setTitle(`${EMOJI_CLAM} Clamagotchi: **${pet.name}** ${EMOJI_CLAM}`)
    .setDescription(`Owned by <@${discordId}>`)
    .setThumbnail(pet.imageUrl)
    .addFields(
      {
        name: "Characteristics",
        value: [
          `Personality: **${pet.personality}**`,
          `Maturity: **${pet.maturity}**`,
          `Gender: **${pet.gender}**`,
        ].join("\n"),
        inline: true,
      },
      {
        name: "General",
        value: [
          `Level: **${pet.level}**`,
          `Experience: **${pet.experience}**/${getXpForLevel(pet.level)}`,
          `Pearls: **${pet.pearls}**`,
        ].join("\n"),
        inline: true,
      }
    )
    .addFields(
      {
        name: "Condition",
        value: [
          `hunger: **${pet.hunger! * 100}%**`,
          `thirst: **${pet.thirst! * 100}%**`,
          `health: **${pet.health! * 100}%**`,
          `affection: **${pet.affection! * 100}%**`,
          `tiredness: **${pet.tiredness! * 100}%**`,
          `hygiene: **${pet.hygiene! * 100}%**`,
        ].join(" ◇ "),
        inline: false,
      },
      {
        name: "Physical Stats",
        value: [
          `intelligence: **${pet.intelligence}**`,
          `fitness: **${pet.fitness}**`,
          `reflective: **${pet.reflective}**`,
          `reactive: **${pet.reactive}**`,
          `carapace: **${pet.carapace}**`,
          `regeneration: **${pet.regeneration}**`,
        ].join(" ◇ "),
        inline: false,
      }
    )
    .toJSON();
};
