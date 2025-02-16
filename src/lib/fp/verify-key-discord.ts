import { VercelRequest } from "@vercel/node";
import { verifyKey } from "discord-interactions";

export const verifyDiscordKey = (request: VercelRequest) => {
  const signature = request.headers["x-signature-ed25519"] as string;
  const timestamp = request.headers["x-signature-timestamp"] as string;
  const rawBody = JSON.stringify(request.body);

  return verifyKey(
    rawBody,
    signature,
    timestamp,
    process.env.PUBLIC_KEY as string
  );
};
