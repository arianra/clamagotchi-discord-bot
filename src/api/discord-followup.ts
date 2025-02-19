import { URI_API_DISCORD } from "@/lib/constants/uris";
import { createClamagotchiName } from "@/lib/fp/create-clamagotchi-name";
import { fetchRandomAvatarUrl } from "@/lib/fp/fetch-random-avatar-url";
import { VercelRequest, VercelResponse } from "@vercel/node";

export default async (request: VercelRequest, response: VercelResponse) => {
  const { applicationId, interactionToken } = request.body;

  console.info("Discord Follow-up received.");

  try {
    const petName = createClamagotchiName();
    const imageUrl = await fetchRandomAvatarUrl();

    const webhookUrl = `${URI_API_DISCORD}/webhooks/${applicationId}/${interactionToken}`;

    await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: "thiccccccc deferred response.",
      }),
    });

    return response.status(200).json({ success: true });
  } catch (error) {
    console.error("Follow-up error:", error);
    return response.status(500).json({ error: "Failed to send follow-up" });
  }
};
