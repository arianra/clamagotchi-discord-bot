import { eq } from "drizzle-orm";
import { db } from "@db/index";
import { trades } from "@db/schema";
import { VercelRequest, VercelResponse } from "@vercel/node";
import { InteractionResponseType } from "discord-interactions";
import { DB_ENUM_TRADE_STATUS } from "@/lib/constants/db-enums";

export const declineTrade = async (
  response: VercelResponse,
  traderId: string,
  targetId: string,
  tradeId: string
) => {
  try {
    // Update trade status to declined
    await db
      .update(trades)
      .set({
        status: DB_ENUM_TRADE_STATUS[2], // declined
        completedAt: new Date(),
      })
      .where(eq(trades.tradeId, tradeId));

    return response.status(200).json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: `<@${targetId}> has declined the trade with <@${traderId}>.`,
      },
    });
  } catch (error) {
    console.error("Error in trade decline:", error);
    return response.status(200).json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "Something went wrong while declining the trade.",
      },
    });
  }
};
