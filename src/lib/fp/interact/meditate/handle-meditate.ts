import { Pet } from "@/lib/types/Pet";
import { getRandomInsight } from "./meditate-insights";
import { levelUpPet, LevelUpResult } from "../../levelling/level-up-pet";
import { createMeditateEmbed } from "./embed/embed-meditate";
import { createLevelEmbed } from "../../format/embed/embed-level";
import { APIEmbed } from "discord.js";
import { handleActivity } from "../get-activity-effort";
import { ActivityType } from "../activities";

const MEDITATION_COOLDOWN = 5 * 60 * 1000; // 5 minutes in milliseconds
const BASE_XP_GAIN = 1;
const BASE_TIREDNESS_REDUCTION = 0.05; // 5% tiredness reduction

interface MeditateResult {
  success: boolean;
  message: string;
  newTiredness?: number;
  levelUpResult?: LevelUpResult;
  updatedPet?: Pet;
  embeds?: APIEmbed[];
  lastMeditateTime?: number;
}
type PetMeditateType = {
  tiredness: number;
  lastRest?: Date;
  name: string;
  experience: number;
  level: number;
};

export const handleMeditate = (
  pet: PetMeditateType,
  currentTime: number
): MeditateResult => {
  // Calculate time since last meditation
  const timeSinceLastMeditate = pet.lastRest
    ? currentTime - pet.lastRest.getTime()
    : MEDITATION_COOLDOWN;

  // Calculate effectiveness multiplier (0.1 to 1.0 based on cooldown)
  const effectivenessMultiplier = Math.min(
    Math.max(timeSinceLastMeditate / MEDITATION_COOLDOWN, 0.1),
    1.0
  );

  // Get random insight and its multipliers
  const insight = getRandomInsight();

  // Calculate activity effects (tiredness, etc.)
  const activityEffects = handleActivity(
    pet as unknown as Pet,
    ActivityType.MEDITATE
  );

  // Calculate tiredness reduction
  const tirenessReduction =
    (BASE_TIREDNESS_REDUCTION +
      BASE_TIREDNESS_REDUCTION * (insight.restMultiplier - 1)) *
    effectivenessMultiplier;

  // Calculate new tiredness
  const newTiredness = Math.max(0, pet.tiredness - tirenessReduction);

  // Calculate XP gain
  const xpGained =
    BASE_XP_GAIN *
    insight.xpMultiplier *
    effectivenessMultiplier *
    activityEffects.xpMultiplier *
    activityEffects.tirednessPenalty;

  // Level up the pet with gained XP
  const levelUpResult = levelUpPet(pet as unknown as Pet, xpGained);

  // Create embeds
  const embeds = [
    createMeditateEmbed({
      pet: { name: pet.name },
      insight: insight.message,
      oldTiredness: pet.tiredness,
      newTiredness,
      effectivenessMultiplier,
    }),
  ];

  // Add level up embed if XP was gained
  if (levelUpResult.pet.experience > pet.experience) {
    embeds.push(createLevelEmbed(levelUpResult));
  }

  // Create updated pet object
  const updatedPet = {
    ...levelUpResult.pet,
    tiredness: newTiredness,
    lastMeditateTime: currentTime,
  };

  return {
    success: true,
    message: "",
    newTiredness,
    levelUpResult,
    updatedPet,
    embeds,
    lastMeditateTime: currentTime,
  };
};
