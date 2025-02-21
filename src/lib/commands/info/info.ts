import { eq } from "drizzle-orm";
import { db } from "@db/index";
import { pets, petUsers } from "@db/schema";
import { VercelRequest, VercelResponse } from "@vercel/node";
import { InteractionResponseType } from "discord-interactions";
import { formatEmbedInfoGeneral } from "@/lib/fp/format/embed/info-general";
import { formatEmbedInfoImage } from "@/lib/fp/format/embed/info-image";
import { Pet } from "@/lib/types/Pet";
import { FORMAT_MESSAGE_START_COMMAND } from "@/lib/fp/format/discord-message-formats/format-message-start-comand";

export const info = async (
  request: VercelRequest,
  response: VercelResponse
) => {
  console.info("Info command received.");

  const message = request.body;
  const discordId = message?.member?.user.id as string;

  try {
    const user = await db.query.petUsers.findFirst({
      where: eq(petUsers.discordId, discordId),
      with: {
        pet: true,
      },
    });

    const validUser = user!;

    return response.status(200).json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        embeds: [
          formatEmbedInfoGeneral(validUser.pet as Pet),
          formatEmbedInfoImage(validUser.pet as Pet),
        ],
      },
    });
  } catch (error) {
    console.error("Error in info command:", error);

    // Check if it's a NeonDB error (usually has code property)
    if (error && typeof error === "object" && "code" in error) {
      const dbError = error as { code: string };

      // Common Postgres error codes
      switch (dbError.code) {
        case "42P01": // undefined_table
          return response.status(200).json({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
              content: `You don't have a Clamagotchi yet! Use ${FORMAT_MESSAGE_START_COMMAND} to create one.`,
            },
          });
        default:
          return response.status(200).json({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
              content:
                "Something went wrong with the database, please try again later.",
            },
          });
      }
    }

    // Generic error fallback
    return response.status(200).json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content:
          "Something went wrong while fetching your pet, maybe try again.",
      },
    });
  }
};
