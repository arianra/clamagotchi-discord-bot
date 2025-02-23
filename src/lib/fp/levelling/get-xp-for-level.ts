const XP_BASE_AMOUNT = 8;
const XP_MULTIPLIER = 1.4;

export const getXpForLevel = (level: number) =>
  Math.floor(XP_BASE_AMOUNT * (level + Math.pow(level - 1, XP_MULTIPLIER)));
