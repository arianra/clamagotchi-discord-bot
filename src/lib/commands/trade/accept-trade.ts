import { eq } from "drizzle-orm";
import { db } from "@db/index";
import { trades, petUsers, pets } from "@db/schema";
import { VercelRequest, VercelResponse } from "@vercel/node";
import { InteractionResponseType } from "discord-interactions";
import { DB_ENUM_TRADE_STATUS } from "@/lib/constants/db-enums";

export const acceptTrade = async (
  request: VercelRequest,
  response: VercelResponse,
  traderId: string,
  targetId: string,
  tradeId: string
) => {
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

    if (!trader[0]?.pet || !target[0]?.pet) {
      return response.status(200).json({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: "One or both pets no longer exist.",
        },
      });
    }

    const validTrader = trader[0];
    const validTarget = target[0];

    // Swap the pets between users
    await db.transaction(async (tx) => {
      // Update trade status
      await tx
        .update(trades)
        .set({
          status: DB_ENUM_TRADE_STATUS[1], // completed
          completedAt: new Date(),
        })
        .where(eq(trades.tradeId, tradeId));

      // Swap pets
      await Promise.all([
        tx
          .update(pets)
          .set({ userId: validTarget.user.id })
          .where(eq(pets.id, validTrader.pet!.id)),
        tx
          .update(pets)
          .set({ userId: validTrader.user.id })
          .where(eq(pets.id, validTarget.pet!.id)),
      ]);
    });

    return response.status(200).json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: `Trade completed! <@${traderId}> and <@${targetId}> have swapped their Clamagotchis.`,
      },
    });
  } catch (error) {
    console.error("Error in trade acceptance:", error);
    return response.status(200).json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "Something went wrong while completing the trade.",
      },
    });
  }
};
