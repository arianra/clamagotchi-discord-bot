import { DB_ENUM_PERSONALITY } from "@/lib/constants/db-enums";

export const getRandomPersonality = () => {
  const personalities = DB_ENUM_PERSONALITY;
  return personalities[Math.floor(Math.random() * personalities.length)];
};
