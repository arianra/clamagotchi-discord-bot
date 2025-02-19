import { verifyDiscordKey } from "@/lib/fp/verify-key-discord";
import { VercelRequest, VercelResponse } from "@vercel/node";
import { InteractionResponseType, InteractionType } from "discord-interactions";
import {
  respondInfo,
  respondInvalid,
  respondPong,
  respondUnknown,
  setResponseHeaders,
} from "@/lib/responses/handshake";
import { start } from "@/lib/commands/start/start";
import {
  respond,
  respondError,
  respondSuccess,
} from "@/lib/responses/generic-response";
import { MessageFlags } from "discord.js";
import { createClamagotchiName } from "@/lib/fp/create-clamagotchi-name";
import { fetchRandomAvatarUrl } from "@/lib/fp/fetch-random-avatar-url";
import { formatTest } from "@/lib/fp/format/format-test";
import { sendFollowUp } from "@/lib/responses/send-follow-up";
import { formatEmbedInfoGeneral } from "@/lib/fp/format/embed/info-general";
import { formatEmbedInfoStats } from "@/lib/fp/format/embed/info-stats";
import { formatEmbedInfoImage } from "@/lib/fp/format/embed/info-image";
import { info } from "@/lib/commands/info/info";
import { formatMessageInfoCommand } from "@/lib/fp/format/discord-message-formats/format-message-info-command";
import { sendWebhookResponse } from "@/lib/responses/send-webhook-response";
import { sendDeferredResponse } from "@/lib/responses/send-deferred-response";

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

  if (message.data.name === "info") {
    return info(request, response);
  }

  if (message.data.name === "start") {
    console.info("Start Command received.");

    return response.status(200).json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: `use ${formatMessageInfoCommand()} for now.`,
      },
    });
  }
};
