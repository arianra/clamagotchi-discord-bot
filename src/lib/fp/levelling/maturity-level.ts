import { DB_ENUM_MATURITY } from "@/lib/constants/db-enums";

export const MATURITY_XP_MULTIPLIER: Record<
  (typeof DB_ENUM_MATURITY)[number],
  number
> = {
  BABY: 0.25,
  TODDLER: 0.5,
  CHILD: 1,
  TEEN: 1.25,
  TWEEN: 1.5,
  ADULT: 2,
  ELDER: 2.5,
  ANCIENT: 3,
} as const;

export const MATURITY_LEVELS: Record<
  (typeof DB_ENUM_MATURITY)[number],
  number
> = {
  BABY: 10,
  TODDLER: 20,
  CHILD: 40,
  TEEN: 60,
  TWEEN: 80,
  ADULT: 100,
  ELDER: 120,
  ANCIENT: 160,
} as const;

export const getMaturityForLevel = (
  level: number
): (typeof DB_ENUM_MATURITY)[number] => {
  if (level >= MATURITY_LEVELS.ANCIENT) return "ANCIENT";
  if (level >= MATURITY_LEVELS.ELDER) return "ELDER";
  if (level >= MATURITY_LEVELS.ADULT) return "ADULT";
  if (level >= MATURITY_LEVELS.TWEEN) return "TWEEN";
  if (level >= MATURITY_LEVELS.TEEN) return "TEEN";
  if (level >= MATURITY_LEVELS.CHILD) return "CHILD";
  if (level >= MATURITY_LEVELS.TODDLER) return "TODDLER";
  return "BABY";
};
