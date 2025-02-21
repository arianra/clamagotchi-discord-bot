import { eq } from "drizzle-orm";
import { db } from "@db/index";
import { trades, petUsers, pets } from "@db/schema";
import { VercelResponse } from "@vercel/node";
import { InteractionResponseType } from "discord-interactions";
import { DB_ENUM_TRADE_STATUS } from "@/lib/constants/db-enums";

export const acceptTrade = async (
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

    try {
      // Update trade status first
      await db
        .update(trades)
        .set({
          status: DB_ENUM_TRADE_STATUS[1], // completed
          completedAt: new Date(),
        })
        .where(eq(trades.tradeId, tradeId));

      // Store original pet IDs and owners
      const traderPetId = validTrader.pet!.id;
      const targetPetId = validTarget.pet!.id;
      const originalTraderUserId = validTrader.user.id;
      const originalTargetUserId = validTarget.user.id;

      try {
        // First swap - set trader's pet to null temporarily
        await db
          .update(pets)
          .set({ userId: null })
          .where(eq(pets.id, traderPetId));

        try {
          // Second swap - give target's pet to trader
          await db
            .update(pets)
            .set({ userId: validTrader.user.id })
            .where(eq(pets.id, targetPetId));

          try {
            // Final swap - give trader's pet to target
            await db
              .update(pets)
              .set({ userId: validTarget.user.id })
              .where(eq(pets.id, traderPetId));
          } catch (error) {
            // Rollback second swap if final swap fails
            await db
              .update(pets)
              .set({ userId: validTarget.user.id })
              .where(eq(pets.id, targetPetId));
            // Restore trader's pet
            await db
              .update(pets)
              .set({ userId: validTrader.user.id })
              .where(eq(pets.id, traderPetId));
            throw error;
          }
        } catch (error) {
          // Rollback first swap if second fails
          await db
            .update(pets)
            .set({ userId: validTrader.user.id })
            .where(eq(pets.id, traderPetId));
          throw error;
        }
      } catch (error) {
        // Rollback trade status if any pet swap fails
        await db
          .update(trades)
          .set({
            status: DB_ENUM_TRADE_STATUS[0], // back to pending
            completedAt: null,
          })
          .where(eq(trades.tradeId, tradeId));
        throw error;
      }

      return response.status(200).json({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: `Trade completed! <@${traderId}> and <@${targetId}> have swapped their Clamagotchis.`,
        },
      });
    } catch (error) {
      console.error("Error during trade execution:", error);
      return response.status(200).json({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content:
            "Trade failed. All changes have been reversed. You might be able to accept/deny again.",
        },
      });
    }
  } catch (error) {
    console.error("Error in trade acceptance:", error);
    return response.status(200).json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content:
          "Something went wrong while starting the trade. You might be able to accept/deny again",
      },
    });
  }
};
