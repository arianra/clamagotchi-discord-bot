import { verifyDiscordKey } from "@/lib/fp/verify-key-discord";
import { VercelRequest, VercelResponse } from "@vercel/node";
import { InteractionResponseType, InteractionType } from "discord-interactions";
import {
  respondInfo,
  respondInvalid,
  respondPong,
  respondUnknown,
  setResponseHeaders,
} from "@/lib/responses/request";
import { start } from "@/lib/commands/start/start";
import { respond, respondError } from "@/lib/responses/generic-response";

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

  // return response.status(200).json({
  //   type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
  //   data: "skill issue tbh",
  // });

  if (message.type === InteractionType.APPLICATION_COMMAND) {
    response.status(200).json({
      type: 5,
      data: {
        flags: 64,
      },
    });
  }

  // return await fetch(
  //   `https://discord.com/api/v10/webhooks/${message.application_id}/${message.token}/messages/@original`,
  //   {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "User-Agent": "DiscordBot (clamagotchi-discord-bot.vercel.app, 1.0.0)",
  //     },
  //     body: JSON.stringify({
  //       content: "SKILL ISSUE",
  //     }),
  //   }
  // ).catch((error) => {
  //   console.error("Error editing reply:", error);
  //   throw error;
  // });

  if (message.data.name === "start") {
    console.log(
      `Start command received by user id: ${message.member.user.username}`
    );
    try {
      const startResponse = await start(message);
      console.log("startResponse", startResponse.message);
      return await fetch(
        `https://discord.com/api/v10/webhooks/${message.application_id}/${message.token}/messages/@original`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: startResponse.message,
          }),
        }
      );
    } catch (error) {
      console.error("Error in start command:", error);
      return await fetch(
        `https://discord.com/api/v10/webhooks/${message.application_id}/${message.token}/messages/@original`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content:
              "Something went wrong while creating your pet. Please try again later.",
          }),
        }
      );
    }
  }
};
