import { readFileSync } from "fs";
import { join } from "path";
import { VercelRequest, VercelResponse } from "@vercel/node";
import { InteractionResponseType } from "discord-interactions";

const helpText = readFileSync(
  join(process.cwd(), "src/lib/commands/help/help-text.md"),
  "utf-8"
);

export const help = (request: VercelRequest, response: VercelResponse) => {
  console.info("Help command received.");

  return response.status(200).json({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: helpText,
    },
  });
};
