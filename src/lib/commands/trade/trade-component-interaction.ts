import { trades } from "@/db/schema";
import { DB_ENUM_TRADE_STATUS } from "@/lib/constants/db-enums";
import { VercelResponse } from "@vercel/node";
import { InteractionResponseType } from "discord-interactions";
import { eq } from "drizzle-orm";
import { acceptTrade } from "./accept-trade";
import { declineTrade } from "./decline-trade";
import { db } from "@/db";

export const tradeComponentInteraction = async (
  response: VercelResponse,
  message: any
) => {
  const messageAction = message.data.custom_id;
  const [action, tradeId] = messageAction.split(":");
  const [traderId, targetId] = tradeId.split("-");

  // Check if the user clicking is the target
  const interactorId = message?.member?.user.id as string;
  if (interactorId !== targetId) {
    return response.status(200).json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content:
          "Only the user being offered the trade can accept or decline it.",
      },
    });
  }

  // Get trade status
  const trade = await db.query.trades.findFirst({
    where: eq(trades.tradeId, tradeId),
  });

  // If trade doesn't exist or is not pending, return error
  if (!trade || trade.status !== DB_ENUM_TRADE_STATUS[0]) {
    return response.status(200).json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "This trade is no longer active.",
      },
    });
  }

  if (action === "accept_trade") {
    return acceptTrade(response, traderId, targetId, tradeId);
  }

  if (action === "decline_trade") {
    return declineTrade(response, traderId, targetId, tradeId);
  }
};
