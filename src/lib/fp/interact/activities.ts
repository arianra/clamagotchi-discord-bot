export const INTERACT_ACTIONS = [
  "wine and dine",
  "clap",
  "meditate",
  "challenge",
  "play",
  "explore",
] as const;

export type InteractAction = (typeof INTERACT_ACTIONS)[number];

export enum ActivityType {
  FEED = "FEED",
  CLAP = "CLAP",
  MEDITATE = "MEDITATE",
  CHALLENGE = "CHALLENGE",
  PLAY = "PLAY",
  EXPLORE = "EXPLORE",
}

export const ACTIVITY_MAP: Record<InteractAction, ActivityType> = {
  "wine and dine": ActivityType.FEED,
  clap: ActivityType.CLAP,
  meditate: ActivityType.MEDITATE,
  challenge: ActivityType.CHALLENGE,
  play: ActivityType.PLAY,
  explore: ActivityType.EXPLORE,
} as const;
