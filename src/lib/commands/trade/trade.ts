import { eq } from "drizzle-orm";
import { db } from "@db/index";
import { pets, petUsers, trades } from "@db/schema";
import { VercelRequest, VercelResponse } from "@vercel/node";
import { InteractionResponseType, InteractionType } from "discord-interactions";
import { Pet } from "@/lib/types/Pet";
import { formatEmbedInfoGeneral } from "@/lib/fp/format/embed/info-general";
import { formatEmbedInfoImage } from "@/lib/fp/format/embed/info-image";
import { FORMAT_MESSAGE_START_COMMAND } from "@/lib/fp/format/discord-message-formats/format-message-start-comand";
import { DB_ENUM_TRADE_STATUS } from "@/lib/constants/db-enums";

export const trade = async (
  request: VercelRequest,
  response: VercelResponse
) => {
  console.info("Trade command received.");

  const message = request.body;
  const traderId = message?.member?.user.id as string;
  const targetId = message.data.options[0].value as string;

  if (traderId === targetId) {
    return response.status(200).json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "You can't trade with yourself, you donkey.",
      },
    });
  }

  try {
    // Get both users with their pets
    const [trader, target] = await Promise.all([
      db
        .select({
          user: petUsers,
          pet: pets,
        })
        .from(petUsers)
        .leftJoin(pets, eq(pets.userId, petUsers.id))
        .where(eq(petUsers.discordId, traderId))
        .execute(),
      db
        .select({
          user: petUsers,
          pet: pets,
        })
        .from(petUsers)
        .leftJoin(pets, eq(pets.userId, petUsers.id))
        .where(eq(petUsers.discordId, targetId))
        .execute(),
    ]);

    // Check if both users exist and have pets
    if (!trader[0]?.pet || !target[0]?.pet) {
      const missingPet = !trader[0]?.pet
        ? "You don't"
        : `<@${targetId}> doesn't`;
      return response.status(200).json({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: `${missingPet} have a Clamagotchi yet! Use ${FORMAT_MESSAGE_START_COMMAND} to create one.`,
        },
      });
    }

    // Create unique trade ID
    const tradeId = `${traderId}-${targetId}-${Date.now()}`;

    const traderPet = trader[0].pet;
    const targetPet = target[0].pet;

    // Create trade record
    await db.insert(trades).values({
      tradeId: tradeId,
      status: DB_ENUM_TRADE_STATUS[0],
      createdAt: new Date(),
    });

    return response.status(200).json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: `<@${targetId}>, <@${traderId}> wants to trade their Clamagotchi with you!`,
        embeds: [
          formatEmbedInfoGeneral(traderPet as Pet, traderId),
          formatEmbedInfoGeneral(targetPet as Pet, targetId),
        ],
        components: [
          {
            type: 1,
            components: [
              {
                type: 2,
                style: 3, // Green button
                label: "Accept Trade",
                custom_id: `accept_trade:${tradeId}`,
              },
              {
                type: 2,
                style: 4, // Red button
                label: "Decline Trade",
                custom_id: `decline_trade:${tradeId}`,
              },
            ],
          },
        ],
      },
    });
  } catch (error) {
    console.error("Error in trade command:", error);
    return response.status(200).json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content:
          "Something went wrong while initiating the trade, maybe try again.",
      },
    });
  }
};
