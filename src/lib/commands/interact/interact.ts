import { eq } from "drizzle-orm";
import { db } from "@db/index";
import { pets, petUsers } from "@db/schema";
import { VercelRequest, VercelResponse } from "@vercel/node";
import { InteractionResponseType } from "discord-interactions";
import { FORMAT_MESSAGE_START_COMMAND } from "@/lib/fp/format/discord-message-formats/format-message-start-comand";
import { handleFeed } from "@/lib/fp/interact/feed/handle-feed";
import {
  ActivityType,
  ACTIVITY_MAP,
  InteractAction,
} from "@/lib/fp/interact/activities";
import { MaturityType } from "@/lib/constants/db-enums";

const getInteractionEmoji = (action: InteractAction) => {
  switch (action) {
    case "wine and dine":
      return "🍷";
    case "clap":
      return "👏";
    case "meditate":
      return "🧘";
    case "challenge":
      return "👄";
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
  challenge: "frollicked",
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
  const action = message.data.options[0].value as keyof typeof ACTIVITY_MAP;

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

    const activityType = ACTIVITY_MAP[action];

    if (activityType === ActivityType.FEED) {
      const feedResult = handleFeed(user.pet, user.pet.pearls);

      if (!feedResult.success) {
        return response.status(200).json({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
            content: feedResult.message,
          },
        });
      }

      // Update pet stats and pearls in one update
      await db
        .update(pets)
        .set({
          hunger: feedResult.updatedPet!.hunger,
          affection: feedResult.updatedPet!.affection,
          experience: feedResult.updatedPet!.experience,
          level: feedResult.updatedPet!.level,
          maturity: feedResult.updatedPet!.maturity as MaturityType,
          intelligence: feedResult.updatedPet!.intelligence,
          fitness: feedResult.updatedPet!.fitness,
          reflective: feedResult.updatedPet!.reflective,
          reactive: feedResult.updatedPet!.reactive,
          carapace: feedResult.updatedPet!.carapace,
          regeneration: feedResult.updatedPet!.regeneration,
          tiredness: feedResult.updatedPet!.tiredness,
          pearls: user.pet.pearls - feedResult.cost!,
          lastFed: new Date(),
        })
        .where(eq(pets.id, user.pet.id));

      return response.status(200).json({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          embeds: feedResult.embeds,
        },
      });
    }

    // Handle other activities...
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
