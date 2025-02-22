import { verifyDiscordKey } from "@/lib/fp/verify-key-discord";
import { VercelRequest, VercelResponse } from "@vercel/node";
import { InteractionType } from "discord-interactions";
import {
  respondInfo,
  respondInvalid,
  respondPong,
  respondUnknown,
  setResponseHeaders,
} from "@/lib/responses/handshake";
import { start } from "@/lib/commands/start/start";
import { info } from "@/lib/commands/info/info";
import { help } from "@/lib/commands/help/help";
import { show } from "@/lib/commands/show/show";
import { random } from "@/lib/commands/random/random";
import { eq } from "drizzle-orm";
import { InteractionResponseType } from "discord-interactions";
import { db } from "@/db";
import { DB_ENUM_TRADE_STATUS } from "@/lib/constants/db-enums";
import { trades } from "@/db/schema";
import { acceptTrade } from "@/lib/commands/trade/accept-trade";
import { declineTrade } from "@/lib/commands/trade/decline-trade";
import { trade } from "@/lib/commands/trade/trade";
import { tradeComponentInteraction } from "@/lib/commands/trade/trade-component-interaction";
import { interact } from "@/lib/commands/interact/interact";
import { manage } from "@/lib/commands/manage/manage";

export default async (request: VercelRequest, response: VercelResponse) => {
  if (request.method !== "POST") {
    response.setHeader("Content-Type", "text/html");
    return respondInfo(response);
  }

  setResponseHeaders(response);

  const isValidRequest = await verifyDiscordKey(request);
  if (!isValidRequest) {
    return respondInvalid(response);
  }

  const message = request.body;

  if (!(message || message.type || message.data || message.data.name)) {
    return respondUnknown(response, message);
  }

  if (message.type === InteractionType.PING) {
    return respondPong(response);
  }

  if (message.data.name === "help") {
    return help(request, response);
  }

  if (message.data.name === "info") {
    return info(request, response);
  }

  if (message.data.name === "start") {
    return start(request, response);
  }

  if (message.data.name === "show") {
    return show(request, response);
  }

  if (message.data.name === "random") {
    return random(request, response);
  }

  if (message.data.name === "trade") {
    return trade(request, response);
  }

  if (message.data.name === "interact") {
    return interact(request, response);
  }

  if (message.data.name === "manage") {
    return manage(request, response);
  }

  if (message.type === InteractionType.MESSAGE_COMPONENT) {
    const messageAction = message.data.custom_id;
    const [action] = messageAction.split(":");

    if (action === "accept_trade" || action === "decline_trade") {
      return tradeComponentInteraction(response, message);
    }
  }
};
