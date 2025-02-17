import { PhysicalStats } from "../../types/PhysicalStats";

export const distributeRandomPhysicalStats = (
  points: number = 0
): PhysicalStats | null => {
  if (points < 1) return null;

  const stats: PhysicalStats = {
    intelligence: 0,
    fitness: 0,
    reflective: 0,
    reactive: 0,
    carapace: 0,
    regeneration: 0,
  };

  // Get array of stat keys for random distribution
  const statKeys = Object.keys(stats) as (keyof PhysicalStats)[];

  // Distribute points randomly
  while (points > 0) {
    const randomStat = statKeys[Math.floor(Math.random() * statKeys.length)];
    stats[randomStat]++;
    points--;
  }

  return stats;
};
