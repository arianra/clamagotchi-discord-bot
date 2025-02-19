import { PhysicalStats } from "./PhysicalStats";

export type Pet = PhysicalStats & {
  id: string;
  userId: string;
  name: string;
  imageUrl: string;
  gender: string;
  personality: string;
  maturity: string;
  pearls: number;
  hunger: number;
  thirst: number;
  health: number;
  affection: number;
  tiredness: number;
  hygiene: number;

  level: number;
  experience: number;
  lastFed: Date;
  lastDrank: Date;
  createdAt: Date;
  updatedAt: Date;
  meta: Record<string, unknown>;
};
