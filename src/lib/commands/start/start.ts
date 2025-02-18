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
} from "@lib/responses/generic-response";
import { EMOJI_CLAM_SPARKLE } from "@/lib/constants/emojis";
import { distributeRandomPhysicalStats } from "@lib/fp/levelling/distribute-random-physical-stats";
import { Message } from "discord.js";
import { formatInfo } from "@/lib/fp/format/format-info";
import { Pet } from "@/lib/types/Pet";

export async function start(message: Message): Promise<APIResponse> {
  const discordId = message?.member?.user.id as string;
  // const name = message.data.options[0]?.value as string;
  const name = null;

  if (!discordId) {
    return respondError(
      "Something went wrong while creating your Clamagotchi, seems there's no discord ID?"
    );
  }
  console.log("discordId", discordId);
  try {
    // Find or create user
    console.log("discordId 1", discordId);
    let user = await db.query.petUsers.findFirst({
      where: eq(petUsers.discordId, discordId),
    });
    console.log("user 1", user);
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
    console.log("user 2", user);
    if (!user) {
      return respondError(
        "Something went wrong while creating your user associated with your pet..."
      );
    }
    // Check if user already has a pet
    const existingPet = await db.query.pets.findFirst({
      where: eq(pets.userId, user.id),
    });
    console.log("existingPet", existingPet);
    if (existingPet) {
      return respondError(
        `You already have a Clamagotchi! Use \`/info\` to see their status.\n\n${formatInfo(
          existingPet as Pet,
          discordId
        )}`
      );
    }
    // Get custom name if provided, otherwise generate one
    const petName = name || (await createClamagotchiName());
    const imageUrl = await fetchRandomAvatarUrl();

    // Create new pet with random stats
    const [newPet] = await db
      .insert(pets)
      .values({
        userId: user.id,
        name: petName,
        imageUrl,
        ...distributeRandomPhysicalStats(),
        // Other fields use schema defaults
      })
      .returning();

    // Format response
    const response = `# 🎉 Congratulations on your new Clamagotchi! 🎉

Your new pet has arrived!

## Meet ${petName}! ${EMOJI_CLAM_SPARKLE}

${imageUrl}

### Stats
${formatPhysicalStats(newPet)}

Use \`/info\` to check on ${petName}'s status and \`/help\` to learn how to care for them!`;

    return respondSuccess(response);
  } catch (error) {
    console.error("Error in start command:", error);
    return respondError(
      "Something went wrong while creating your pet. Please try again later."
    );
  }
}
