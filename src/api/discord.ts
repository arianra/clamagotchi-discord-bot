import { verifyDiscordKey } from "@/lib/fp/verify-key-discord";
import { VercelRequest, VercelResponse } from "@vercel/node";
import { InteractionResponseType, InteractionType } from "discord-interactions";
import { version } from "../../package.json" assert { type: "json" };
import {
  respondInfo,
  respondInvalid,
  respondPong,
  respondUnknown,
  setResponseHeaders,
} from "@/lib/responses/request";

export default async (request: VercelRequest, response: VercelResponse) => {
  if (request.method !== "POST") {
    return respondInfo(response);
  }

  const isValidRequest = await verifyDiscordKey(request);
  if (!isValidRequest) {
    return respondInvalid(response);
  }

  setResponseHeaders(response);

  const message = request.body;

  if (!(message || message.type || message.data || message.data.name)) {
    return respondUnknown(response, message);
  }

  if (message.type === InteractionType.PING) {
    return respondPong(response);
  }
};
