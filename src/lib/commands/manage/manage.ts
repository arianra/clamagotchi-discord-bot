import { eq } from "drizzle-orm";
import { db } from "@db/index";
import { pets, petUsers } from "@db/schema";
import { VercelRequest, VercelResponse } from "@vercel/node";
import { InteractionResponseType } from "discord-interactions";
import { FORMAT_MESSAGE_START_COMMAND } from "@/lib/fp/format/discord-message-formats/format-message-start-comand";

const RENAME_COST = 100;

export const manage = async (
  request: VercelRequest,
  response: VercelResponse
) => {
  console.info("Manage command received.");

  const message = request.body;
  const discordId = message?.member?.user.id as string;
  const subCommand = message.data.options[0].name;

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

    if (subCommand === "rename") {
      const newName = message.data.options[0].options[0].value as string;

      if (user.pet.pearls < RENAME_COST) {
        return response.status(200).json({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
            content: `You need ${RENAME_COST} pearls to rename your Clamagotchi. You only have ${user.pet.pearls} pearls.`,
          },
        });
      }

      // Update pet name and deduct pearls
      await db
        .update(pets)
        .set({
          name: newName,
          pearls: user.pet.pearls - RENAME_COST,
          updatedAt: new Date(),
        })
        .where(eq(pets.id, user.pet.id));

      return response.status(200).json({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: `✨ Renamed your Clamagotchi to **${newName}** (-${RENAME_COST} pearls)`,
        },
      });
    }
  } catch (error) {
    console.error("Error in manage command:", error);
    return response.status(200).json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "Something went wrong while managing your pet.",
      },
    });
  }
};
