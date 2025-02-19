import { getRandomColor } from "@/lib/constants/colors";
import { EMOJI_CLAM, EMOJI_CLAM_SPARKLE } from "@/lib/constants/emojis";
import { Pet } from "@/lib/types/Pet";
import { EmbedBuilder } from "discord.js";
import {
  asPositivePoints,
  distributeRandomPhysicalStats,
} from "../levelling/distribute-random-physical-stats";
import { formatPhysicalStats } from "./format-physical-stats";

export const formatTest = (pet: Partial<Pet>) => {
  return (
    new EmbedBuilder()
      .setColor(getRandomColor(700))
      .setTitle(`${EMOJI_CLAM} Your Clamagotchi`)
      .setDescription(`Name: **${pet.name}**`)
      .setImage(pet.imageUrl!)
      .addFields(
        {
          name: "Characteristics",
          value: [
            `Personality: **BRAT**`,
            `Maturity: **BABY**`,
            `Gender: **NEUTRAL**`,
          ].join("\n"),
          inline: true,
        },
        {
          name: "General",
          value: [`Level: **15**`, `XP: **25**`, `Pearls: **3**`].join("\n"),
          inline: true,
        },
        { name: "\u200B", value: "\u200B", inline: false }
      )
      .addFields(
        {
          name: "Condition",
          value: [
            `hunger: **1**`,
            `thirst: **2**`,
            `health: **3**`,
            `affection: **4**`,
            `tiredness: **5**`,
            `hygiene: **6**`,
          ].join("\n"),
          inline: true,
        },
        {
          name: "Physical Stats",
          value: formatPhysicalStats(
            distributeRandomPhysicalStats(asPositivePoints(25))
          ),
          inline: true,
        }
      )
      // .setTimestamp()
      .toJSON()
  );
};
