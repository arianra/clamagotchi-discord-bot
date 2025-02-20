import { Pet } from "@/lib/types/Pet";
import { EmbedBuilder } from "discord.js";
import { formatPhysicalStats } from "../format-physical-stats";
import {
  asPositivePoints,
  distributeRandomPhysicalStats,
} from "../../levelling/distribute-random-physical-stats";
import { getRandomColor } from "@/lib/constants/colors";

export const formatEmbedInfoStats = (pet: Partial<Pet>) => {
  return new EmbedBuilder()
    .setColor(getRandomColor(700))
    .setTitle(`Stats`)
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
        ].join(" ◇ "),
        inline: false,
      },
      {
        name: "Physical Stats",
        value: formatPhysicalStats(
          distributeRandomPhysicalStats(asPositivePoints(25))
        ),
        inline: false,
      }
    )
    .toJSON();
};
