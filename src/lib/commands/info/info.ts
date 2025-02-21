import { eq } from "drizzle-orm";
import { db } from "@db/index";
import { pets, petUsers } from "@db/schema";
import { VercelRequest, VercelResponse } from "@vercel/node";
import { InteractionResponseType } from "discord-interactions";
import { formatEmbedInfoGeneral } from "@/lib/fp/format/embed/info-general";
import { formatEmbedInfoImage } from "@/lib/fp/format/embed/info-image";
import { Pet } from "@/lib/types/Pet";

export const info = async (
  request: VercelRequest,
  response: VercelResponse
) => {
  console.info("Info command received.");

  const message = request.body;
  const discordId = message?.member?.user.id as string;

  if (!discordId) {
    return response.status(200).json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "Could not find your Discord ID.",
      },
    });
  }

  try {
    const user = await db.query.petUsers.findFirst({
      where: eq(petUsers.discordId, discordId),
      with: {
        pet: true,
      },
    });

    if (!user || !user.pet) {
      return response.status(200).json({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content:
            "You don't have a Clamagotchi yet! Use `/start` to create one.",
        },
      });
    }

    return response.status(200).json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        embeds: [
          formatEmbedInfoGeneral(user.pet as Pet),
          formatEmbedInfoImage(user.pet as Pet),
        ],
      },
    });
  } catch (error) {
    console.error("Error in info command:", error);
    return response.status(200).json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content:
          "Something went wrong while fetching your pet, maybe try again.",
      },
    });
  }
};
