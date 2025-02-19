import { VercelResponse } from "@vercel/node";
import { InteractionResponseType } from "discord-interactions";
import { MessageFlags } from "discord.js";

export const sendDeferredResponse = async (
  response: VercelResponse,
  isEphemeral: boolean = false
) =>
  response.status(200).json({
    type: InteractionResponseType.DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE,
    ...(isEphemeral && {
      data: {
        flags: MessageFlags.Ephemeral,
      },
    }),
  });
