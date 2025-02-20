import { DB_ENUM_GENDER } from "@/lib/constants/db-enums";

export const getRandomGender = () => {
  const genders = DB_ENUM_GENDER;
  return genders[Math.floor(Math.random() * genders.length)];
};
