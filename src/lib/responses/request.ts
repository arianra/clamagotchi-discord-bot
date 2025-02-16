import { VercelResponse } from "@vercel/node";
import { InteractionResponseType } from "discord-interactions";
import { version } from "../../../package.json" assert { type: "json" };

export const setResponseHeaders = (response: VercelResponse) => {
  response.setHeader("Content-Type", "application/json");
  response.setHeader(
    "User-Agent",
    `DiscordBot (clamagotchi-discord-bot.vercel.app, ${version})`
  );
};

export const respondInfo = (response: VercelResponse) => {
  return response.status(412).json(`Clamagotchi Discord Bot v${version}`);
};

export const respondPong = (response: VercelResponse) => {
  console.info("Handling Ping request");
  return response.status(200).json({
    type: InteractionResponseType.PONG,
  });
};

export const respondUnknown = (response: VercelResponse, message: unknown) => {
  console.error("Unknown Request");
  response.status(401).json({ error: `Unknown Request`, message });
};

export const respondInvalid = (response: VercelResponse) => {
  console.error("Invalid Request");
  response.status(401).json({ error: `Invalid Request` });
};
