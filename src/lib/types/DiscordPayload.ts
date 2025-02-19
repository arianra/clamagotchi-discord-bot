import { Embed } from "discord.js";

type DiscordPayloadContent = {
  content: string | Record<string, unknown>;
  embeds?: Embed[];
};

type DiscordPayloadEmbeds = {
  content?: string | Record<string, unknown>;
  embeds: Embed[];
};

export type DiscordPayload = DiscordPayloadContent | DiscordPayloadEmbeds;
