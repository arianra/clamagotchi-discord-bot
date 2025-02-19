import { createClamagotchiName } from "@/lib/fp/create-clamagotchi-name";
import { fetchRandomAvatarUrl } from "@/lib/fp/fetch-random-avatar-url";
import { formatEmbedInfoGeneral } from "@/lib/fp/format/embed/info-general";
import { formatEmbedInfoImage } from "@/lib/fp/format/embed/info-image";
import { formatEmbedInfoStats } from "@/lib/fp/format/embed/info-stats";
import { VercelRequest, VercelResponse } from "@vercel/node";
import { InteractionResponseType } from "discord-interactions";

export const info = async (
  request: VercelRequest,
  response: VercelResponse
) => {
  console.info("Info Command received");

  const petName = createClamagotchiName();
  const imageUrl = await fetchRandomAvatarUrl();
  return response.status(200).json({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      embeds: [
        formatEmbedInfoGeneral({ name: petName, imageUrl }),
        formatEmbedInfoStats({ name: petName, imageUrl }),
        formatEmbedInfoImage({ name: petName, imageUrl }),
      ],
    },
  });
};
