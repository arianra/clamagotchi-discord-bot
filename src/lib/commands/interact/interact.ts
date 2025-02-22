import { eq } from "drizzle-orm";
import { db } from "@db/index";
import { pets, petUsers } from "@db/schema";
import { VercelRequest, VercelResponse } from "@vercel/node";
import { InteractionResponseType } from "discord-interactions";
import { Pet } from "@/lib/types/Pet";
import { INTERACT_ACTIONS } from "./interact-command";
import { FORMAT_MESSAGE_START_COMMAND } from "@/lib/fp/format/discord-message-formats/format-message-start-comand";

type InteractAction = (typeof INTERACT_ACTIONS)[number];

const getInteractionEmoji = (action: InteractAction) => {
  switch (action) {
    case "wine and dine":
      return "🍷";
    case "clap":
      return "👏";
    case "meditate":
      return "🧘";
    case "attack":
      return "⚔️";
    case "play":
      return "🎮";
    case "explore":
      return "🗺️";
    default:
      return "❓";
  }
};

const INTERACTION_VERBS: Record<InteractAction, string> = {
  "wine and dine": "wined and dined",
  clap: "clapped",
  meditate: "meditated",
  attack: "sparred",
  play: "played",
  explore: "explored",
} as const;

export const interact = async (
  request: VercelRequest,
  response: VercelResponse
) => {
  console.info("Interact command received.");

  const message = request.body;
  const discordId = message?.member?.user.id as string;
  const action = message.data.options[0].value as InteractAction;

  try {
    const user = await db.query.petUsers.findFirst({
      where: eq(petUsers.discordId, discordId),
      with: {
        pet: true,
      },
    });

    if (!user?.pet) {
      return response.status(200).json({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: `You don't have a Clamagotchi yet! Use ${FORMAT_MESSAGE_START_COMMAND} to create one.`,
        },
      });
    }

    const emoji = getInteractionEmoji(action);
    return response.status(200).json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: `${emoji} You ${INTERACTION_VERBS[action]} with your Clamagotchi!`,
      },
    });
  } catch (error) {
    console.error("Error in interact command:", error);
    return response.status(200).json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "Something went wrong while interacting with your pet.",
      },
    });
  }
};
