import { Pet } from "@/lib/types/Pet";
import { getXPForLevel } from "./get-xp-for-level";
import {
  asPositivePoints,
  distributeRandomPhysicalStats,
} from "./distribute-random-physical-stats";

interface LevelUpResult {
  pet: Pet;
  didLevelUp: boolean;
  newStats?: {
    intelligence: number;
    fitness: number;
    reflective: number;
    reactive: number;
    carapace: number;
    regeneration: number;
  };
}

export const levelUpPet = (pet: Pet, xpToAdd: number): LevelUpResult => {
  const newXP = pet.experience + xpToAdd;
  const currentLevelXP = getXPForLevel(pet.level);
  const nextLevelXP = getXPForLevel(pet.level + 1);

  // If we haven't reached next level
  if (newXP < nextLevelXP) {
    return {
      pet: {
        ...pet,
        experience: newXP,
      },
      didLevelUp: false,
    };
  }

  // Level up occurred
  const newLevel = pet.level + 1;
  const statPoints = newLevel % 10 === 0 ? 10 : 5;
  const newStats = distributeRandomPhysicalStats(asPositivePoints(statPoints));

  return {
    pet: {
      ...pet,
      level: newLevel,
      experience: newXP,
      intelligence: pet.intelligence + (newStats?.intelligence ?? 0),
      fitness: pet.fitness + (newStats?.fitness ?? 0),
      reflective: pet.reflective + (newStats?.reflective ?? 0),
      reactive: pet.reactive + (newStats?.reactive ?? 0),
      carapace: pet.carapace + (newStats?.carapace ?? 0),
      regeneration: pet.regeneration + (newStats?.regeneration ?? 0),
    },
    didLevelUp: true,
    newStats,
  };
};
