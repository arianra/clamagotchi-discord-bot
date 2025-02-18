export type Pet = {
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
  intelligence: number;
  fitness: number;
  reflective: number;
  reactive: number;
  carapace: number;
  regeneration: number;
  level: number;
  experience: number;
  lastFed: Date;
  lastDrank: Date;
  createdAt: Date;
  updatedAt: Date;
  meta: Record<string, unknown>;
};
