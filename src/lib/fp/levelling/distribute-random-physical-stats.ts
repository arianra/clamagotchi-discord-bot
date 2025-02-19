import { PhysicalStats } from "../../types/PhysicalStats";

// Create a unique symbol for the brand
declare const PositiveNumber: unique symbol;
type PositiveNumber = number & { readonly [PositiveNumber]: never };

// Function overloads
export function distributeRandomPhysicalStats(): null;
export function distributeRandomPhysicalStats(
  points: PositiveNumber
): PhysicalStats;
export function distributeRandomPhysicalStats(points: 0): null;
export function distributeRandomPhysicalStats(
  points?: number
): PhysicalStats | null {
  if (!points || points < 1) return null;

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
}

export const asPositivePoints = (n: number): PositiveNumber => {
  if (n <= 0) throw new Error("Points must be positive");
  return n as PositiveNumber;
};
