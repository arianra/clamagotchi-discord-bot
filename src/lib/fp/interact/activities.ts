import { ActivityEffort } from "@/lib/fp/interact/get-activity-effort";

export const INTERACT_ACTIONS = [
  "wine and dine",
  "clap",
  "meditate",
  "challenge",
  "play",
  "explore",
] as const;

type InteractAction = (typeof INTERACT_ACTIONS)[number];

export enum ActivityType {
  FEED = "FEED",
  CLAP = "CLAP",
  STUDY = "STUDY",
  CHALLENGE = "CHALLENGE",
  PLAY = "PLAY",
  EXPLORE = "EXPLORE",
}

export const ACTIVITY_MAP: Record<
  (typeof INTERACT_ACTIONS)[number],
  ActivityType
> = {
  "wine and dine": ActivityType.FEED,
  clap: ActivityType.CLAP,
  meditate: ActivityType.STUDY,
  challenge: ActivityType.CHALLENGE,
  play: ActivityType.PLAY,
  explore: ActivityType.EXPLORE,
} as const;
