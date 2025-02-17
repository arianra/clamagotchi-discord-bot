import { VercelResponse } from "@vercel/node";

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
  const errorCode = responseMessage.success ? 200 : 400;
  const { message } = responseMessage;
  if (!message)
    return response.status(errorCode).json("response is not the correct shape");
  return response.status(errorCode).json(message);
};
