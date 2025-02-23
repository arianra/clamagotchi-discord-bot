import { Pet } from "@/lib/types/Pet";
import { getXpForLevel } from "./get-xp-for-level";
import { getMaturityForLevel, MATURITY_XP_MULTIPLIER } from "./maturity-level";
import {
  asPositivePoints,
  distributeRandomPhysicalStats,
} from "./distribute-random-physical-stats";
import { MaturityType } from "@/lib/constants/db-enums";

export interface LevelUpResult {
  pet: Pet;
  adjustedXpToAdd: number;
  didLevelUp: boolean;
  oldLevel: number;
  newLevel: number;
  oldStats: {
    intelligence: number;
    fitness: number;
    reflective: number;
    reactive: number;
    carapace: number;
    regeneration: number;
  };
  newStats?: {
    intelligence: number;
    fitness: number;
    reflective: number;
    reactive: number;
    carapace: number;
    regeneration: number;
  };
  hasEvolved?: boolean;
  oldMaturity?: MaturityType;
  newMaturity?: MaturityType;
}
type PetLevel = {
  experience: number;
  level: number;
  maturity: string;
  intelligence: number;
  fitness: number;
  reflective: number;
  reactive: number;
  carapace: number;
  regeneration: number;
  name: string;
};

export const levelUpPet = (pet: PetLevel, xpToAdd: number): LevelUpResult => {
  // Apply maturity multiplier and ensure minimum XP gain of 1
  const maturityMultiplier =
    MATURITY_XP_MULTIPLIER[pet.maturity as MaturityType];
  const adjustedXpToAdd = Math.max(1, Math.ceil(xpToAdd * maturityMultiplier));

  const newXP = pet.experience + adjustedXpToAdd;
  let currentLevel = pet.level;
  let hasEvolved = false;
  let oldMaturity = pet.maturity as MaturityType;
  let newMaturity = pet.maturity as MaturityType;

  const oldStats = {
    intelligence: pet.intelligence,
    fitness: pet.fitness,
    reflective: pet.reflective,
    reactive: pet.reactive,
    carapace: pet.carapace,
    regeneration: pet.regeneration,
  };

  // Check if we have enough XP for any level ups
  const nextLevelXP = getXpForLevel(currentLevel);
  if (newXP < nextLevelXP) {
    return {
      pet: {
        ...pet,
        experience: newXP,
      } as Pet,
      adjustedXpToAdd,
      didLevelUp: false,
      oldLevel: pet.level,
      newLevel: currentLevel,
      oldStats,
      newStats: oldStats,
    };
  }

  // Calculate final level and accumulate stat changes
  let accumulatedStats = { ...oldStats };

  while (true) {
    const nextLevelThreshold = getXpForLevel(currentLevel);
    if (newXP < nextLevelThreshold) break;

    currentLevel++;
    const statPoints = currentLevel % 10 === 0 ? 10 : 5;
    const levelStats = distributeRandomPhysicalStats(
      asPositivePoints(statPoints)
    );

    // Check for maturity evolution at this level
    const maturityAtLevel = getMaturityForLevel(currentLevel);
    if (maturityAtLevel !== newMaturity) {
      hasEvolved = true;
      newMaturity = maturityAtLevel;
    }

    // Add new stats to accumulated total
    accumulatedStats = {
      intelligence:
        accumulatedStats.intelligence + (levelStats?.intelligence ?? 0),
      fitness: accumulatedStats.fitness + (levelStats?.fitness ?? 0),
      reflective: accumulatedStats.reflective + (levelStats?.reflective ?? 0),
      reactive: accumulatedStats.reactive + (levelStats?.reactive ?? 0),
      carapace: accumulatedStats.carapace + (levelStats?.carapace ?? 0),
      regeneration:
        accumulatedStats.regeneration + (levelStats?.regeneration ?? 0),
    };
  }

  return {
    pet: {
      ...pet,
      level: currentLevel,
      experience: newXP,
      maturity: newMaturity,
      ...accumulatedStats,
    } as Pet,
    adjustedXpToAdd,
    didLevelUp: true,
    oldLevel: pet.level,
    newLevel: currentLevel,
    oldStats,
    newStats: accumulatedStats,
    hasEvolved,
    ...(hasEvolved && { oldMaturity, newMaturity }),
  };
};
