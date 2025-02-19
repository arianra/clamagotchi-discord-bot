import { getRandomColor } from "@/lib/constants/colors";
import { DISCORD_ID_DVDDYSTALIN } from "@/lib/constants/disord-ids";
import { EMOJI_CLAM } from "@/lib/constants/emojis";
import { Pet } from "@/lib/types/Pet";
import { EmbedBuilder } from "discord.js";

export const formatEmbedInfoGeneral = (pet: Partial<Pet>) => {
  return new EmbedBuilder()
    .setColor(getRandomColor(700))
    .setTitle(`${EMOJI_CLAM} Clamagotchi: **${pet.name}** ${EMOJI_CLAM}`)
    .setDescription(`Owned by <@${DISCORD_ID_DVDDYSTALIN}>`)
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
      }
    )
    .toJSON();
};
