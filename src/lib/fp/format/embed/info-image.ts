import { getRandomColor } from "@/lib/constants/colors";
import { Pet } from "@/lib/types/Pet";
import { EmbedBuilder } from "discord.js";

export const formatEmbedInfoImage = (pet: Pick<Pet, "name" | "imageUrl">) => {
  return new EmbedBuilder()
    .setColor(getRandomColor(700))
    .setImage(pet.imageUrl!)
    .setFooter({
      text: `Clamagotchi: ${pet.name}`,
      iconURL:
        "https://cdn.discordapp.com/app-icons/1340509480663646209/02fbdbd6487f60514d26023c8bdb259e.png?size=128",
    })
    .toJSON();
};
