import { VercelResponse } from "@vercel/node";
import { DiscordPayload } from "../types/DiscordPayload";
import { URI_API_DISCORD } from "../constants/uris";
import { version } from "../../../package.json" assert { type: "json" };

type SendWebhookResponseProps = {
  token: string;
  application_id: string;
  payload: DiscordPayload;
};

export const sendWebhookResponse = async (
  { token, application_id, payload }: SendWebhookResponseProps,
  isPatch: boolean = false
) => {
  const { content, embeds } = payload;

  const body = JSON.stringify({
    ...(content && { content }),
    ...(embeds && { embeds }),
  });

  const webhookUrl = isPatch
    ? `${URI_API_DISCORD}/webhooks/${application_id}/${token}/messages/@original`
    : `${URI_API_DISCORD}/webhooks/${application_id}/${token}/messages`;

  try {
    return await fetch(webhookUrl, {
      method: isPatch ? "PATCH" : "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": `DiscordBot (clamagotchi-discord-bot.vercel.app, ${version})`,
        Authorization: `Bot ${process.env.TOKEN}`,
      },
      body,
    });
  } catch (error) {
    console.error("Error editing reply:", error);
    throw error;
  }
};
