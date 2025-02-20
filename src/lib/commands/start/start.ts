import { eq } from "drizzle-orm";
import { db } from "@db/index";
import { pets, petUsers } from "@db/schema";
import { createClamagotchiName } from "@lib/fp/create-clamagotchi-name";
import { fetchRandomAvatarUrl } from "@lib/fp/fetch-random-avatar-url";
import { formatPhysicalStats } from "@lib/fp/format/format-physical-stats";
import {
  respondSuccess,
  respondError,
  APIResponse,
  respond,
} from "@lib/responses/generic-response";
import { EMOJI_CLAM_SPARKLE } from "@/lib/constants/emojis";
import {
  asPositivePoints,
  distributeRandomPhysicalStats,
} from "@lib/fp/levelling/distribute-random-physical-stats";
import { Message } from "discord.js";
import { formatInfo } from "@/lib/fp/format/format-info";
import { Pet } from "@/lib/types/Pet";
import { getRandomGender } from "@/lib/fp/creation/get-random-gender";
import { getRandomPersonality } from "@/lib/fp/creation/get-random-personality";
import { VercelRequest, VercelResponse } from "@vercel/node";
import { InteractionResponseType } from "discord-interactions";
import { formatEmbedInfoGeneral } from "@/lib/fp/format/embed/info-general";
import { formatEmbedInfoStats } from "@/lib/fp/format/embed/info-stats";
import { formatEmbedInfoImage } from "@/lib/fp/format/embed/info-image";

export async function start(
  request: VercelRequest,
  response: VercelResponse
): Promise<VercelResponse> {
  console.log("start command received");

  const message = request.body;
  const discordId = message?.member?.user.id as string;

  if (!discordId) {
    return response.status(200).json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "skill issue discord id",
      },
    });
    // return respond(
    //   response,
    //   respondError(
    //     "Something went wrong while creating your Clamagotchi, seems there's no discord ID?"
    //   )
    // );
  }
  try {
    // Find or create user
    let user = await db.query.petUsers.findFirst({
      where: eq(petUsers.discordId, discordId),
    });
    if (!user) {
      const [newUser] = await db
        .insert(petUsers)
        .values({
          discordId: discordId,
          createdAt: new Date(),
        })
        .returning();
      user = newUser;
    }
    if (!user) {
      return response.status(200).json({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: "skill issue user",
        },
      });
      // return respond(
      //   response,
      //   respondError(
      //     "Something went wrong while creating your user associated with your pet..."
      //   )
      // );
    }
    // TypeScript narrowing - we know user exists after the above checks
    const validUser = user;

    // Check if user already has a pet
    const existingPet = await db.query.pets.findFirst({
      where: eq(pets.userId, user.id),
    });
    if (existingPet) {
      return response.status(200).json({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: `You already own a Clamagotchi: \n\u200b`,
          embeds: [
            formatEmbedInfoGeneral(existingPet as Pet),
            formatEmbedInfoImage(existingPet as Pet),
          ],
        },
      });
      // return respond(
      //   response,
      //   respondError(
      //     `You already have a Clamagotchi! Use \`/info\` to see their status.\n\n${formatInfo(
      //       existingPet as Pet,
      //       discordId
      //     )}`
      //   )
      // );
    }

    // Get custom name if provided, otherwise generate one
    const petName = await createClamagotchiName();
    const imageUrl = await fetchRandomAvatarUrl();

    const personality = getRandomPersonality();
    const gender = getRandomGender();
    const stats = distributeRandomPhysicalStats(asPositivePoints(25));

    // return response.status(200).json({
    //   type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    //   data: {
    //     content: JSON.stringify([
    //       stats,
    //       petName,
    //       imageUrl,
    //       personality,
    //       gender,
    //     ]),
    //   },
    // });

    console.info(
      `Creating new pet for user ${validUser.discordId}, pet name: ${petName}`
    );

    const [newPet] = await db
      .insert(pets)
      .values({
        userId: validUser.id,
        name: petName,
        imageUrl,
        ...distributeRandomPhysicalStats(asPositivePoints(25)),
      })
      .returning();

    console.info(newPet);

    return response.status(200).json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "skill issue after creating pet",
      },
    });
    // return respond(response, respondSuccess(JSON.stringify(newPet)));
    // return respond(response, respondSuccess("extreme skill issue"));
  } catch (error) {
    console.error("Error in start command:", error);
    return respond(
      response,
      respondError("Something went wrong while creating your pet.")
    );
  }
}
