import { fetch } from "undici";
import { URI_API_DISCORD } from "../constants/uris";

export const sendFollowUp = async ({
  content,
  embeds,
  message,
}: Record<string, any>) => {
  const { application_id: applicationId, token: interactionToken } =
    message.application_id;
  const webhookUrl = `${URI_API_DISCORD}/webhooks/${applicationId}/${interactionToken}`;

  const body = { ...(content && { content }), ...(embeds && { embeds }) };
  console.log("going to send follow up");

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "DiscordBot (clamagotchi-discord-bot.vercel.app, 1.0.0)",
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    clearTimeout(timeout);
    console.error("Follow up failed", error);
    throw error;
  }
};
