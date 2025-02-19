import { PhysicalStats } from "../../types/PhysicalStats";

export function formatPhysicalStats(stats: PhysicalStats): string {
  return (
    `🧠 Intelligence: **${stats.intelligence}** ◇ ` +
    `🌟 Fitness: **${stats.fitness}** ◇ ` +
    `⚡ Reflexes: **${stats.reflective}** ◇ ` +
    `🎯 Reactiveness: **${stats.reactive}** ◇ ` +
    `🛡️ Carapace: **${stats.carapace}** ◇ ` +
    `❤️ Regeneration: **${stats.regeneration}**`
  );
}
