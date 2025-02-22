import { Pet } from "@/lib/types/Pet";
import { ActivityType } from "@/lib/constants/activities";

export const ActivityEffort = {
  TRIVIAL: 0.03125, // 1/32  - Minimal effort (petting)
  VERY_LIGHT: 0.0625, // 2/32  - Very light (drinking)
  LIGHT: 0.09375, // 3/32  - Light effort (feeding)
  EASY: 0.125, // 4/32  - Easy activity (cleaning)
  MODERATE: 0.15625, // 5/32  - Moderate (playing)
  STANDARD: 0.1875, // 6/32  - Standard activity
  ENGAGING: 0.21875, // 7/32  - Engaging activity
  CHALLENGING: 0.25, // 8/32  - Challenging (training)
  HARD: 0.28125, // 9/32  - Hard activity
  VERY_HARD: 0.3125, // 10/32 - Very hard (challenges)
  INTENSE: 0.34375, // 11/32 - Intense activity
  EXTREME: 0.375, // 12/32 - Extreme (tournaments)
} as const;

export const ACTIVITY_EFFORT: Record<ActivityType, number> = {
  [ActivityType.FEED]: ActivityEffort.LIGHT,
  [ActivityType.CLAP]: ActivityEffort.MODERATE,
  [ActivityType.STUDY]: ActivityEffort.STANDARD,
  [ActivityType.CHALLENGE]: ActivityEffort.CHALLENGING,
  [ActivityType.PLAY]: ActivityEffort.MODERATE,
  [ActivityType.EXPLORE]: ActivityEffort.STANDARD,
} as const;

export const getActivityEffort = (activity: ActivityType): number => {
  return ACTIVITY_EFFORT[activity];
};

const FITNESS_REDUCTION_MULTIPLIER = 0.002; // 0.2% reduction per fitness point

export const handleActivity = (pet: Pet, activityType: ActivityType) => {
  const baseEffort = getActivityEffort(activityType);

  const fitnessMultiplier = Math.max(
    0.5,
    1 - pet.fitness * FITNESS_REDUCTION_MULTIPLIER
  );
  const effort = baseEffort * fitnessMultiplier;

  // Add tiredness
  const newTiredness = Math.min(1, pet.tiredness + effort);

  // Maybe affect success rate based on current tiredness
  const tirednessPenalty =
    pet.tiredness > 0.8
      ? 0.5 // 50% penalty if very tired
      : pet.tiredness > 0.6
      ? 0.8 // 20% penalty if tired
      : 1; // No penalty

  // Could also affect XP gain
  const xpMultiplier =
    pet.tiredness > 0.8
      ? 0.5 // Half XP if very tired
      : pet.tiredness > 0.6
      ? 0.8 // 80% XP if tired
      : 1; // Full XP

  return {
    newTiredness,
    tirednessPenalty,
    xpMultiplier,
    fitnessMultiplier, // Added to show the reduction in response
  };
};
