import { VercelRequest, VercelResponse } from "@vercel/node";
import { InteractionResponseType } from "discord-interactions";
import { fetchRandomAvatarUrl } from "@/lib/fp/fetch-random-avatar-url";
import { createClamagotchiName } from "@/lib/fp/create-clamagotchi-name";
import { formatEmbedInfoImage } from "@/lib/fp/format/embed/info-image";

export const random = async (
  request: VercelRequest,
  response: VercelResponse
) => {
  try {
    const randomImageUrl = await fetchRandomAvatarUrl();
    const randomName = await createClamagotchiName();

    return response.status(200).json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: `Random Clamagotchi: ${randomName}`,
        embeds: [
          formatEmbedInfoImage({ name: randomName, imageUrl: randomImageUrl }),
        ],
      },
    });
  } catch (error) {
    console.error("Error in random command:", error);
    return response.status(200).json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "Something went wrong while generating a random Clamagotchi.",
      },
    });
  }
};
