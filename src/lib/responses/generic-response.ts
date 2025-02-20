import { VercelResponse } from "@vercel/node";
import { InteractionResponseType } from "discord-interactions";

export interface APIResponse {
  success: boolean;
  message: any;
}

export function respondSuccess(message: any): APIResponse {
  return {
    success: true,
    message,
  };
}

export function respondError(message: any): APIResponse {
  return {
    success: false,
    message,
  };
}

export const respond = (
  response: VercelResponse,
  responseMessage: APIResponse
): VercelResponse => {
  const { message } = responseMessage;
  if (!message) {
    return response.status(200).json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: { content: "(error) response is not the correct shape" },
    });
  }
  return response.status(200).json({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: { content: JSON.stringify(message) },
  });
};
