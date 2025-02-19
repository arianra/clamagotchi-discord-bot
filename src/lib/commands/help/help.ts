import { formatMessageInfoCommand } from "@/lib/fp/format/discord-message-formats/format-message-info-command";
import { formatMessageStartCommand } from "@/lib/fp/format/discord-message-formats/format-message-start-comand";
import { VercelRequest, VercelResponse } from "@vercel/node";
import { InteractionResponseType } from "discord-interactions";

export const help = (request: VercelRequest, response: VercelResponse) => {
  console.info("Start Command received.");

  return response.status(200).json({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content:
        `use ${formatMessageInfoCommand()} for now.\n` +
        `*(${formatMessageStartCommand()} doesn't do anything yet})*`,
    },
  });
};
