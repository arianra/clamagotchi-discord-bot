import {
  pgTable,
  text,
  uuid,
  timestamp,
  integer,
  real,
  pgEnum,
  bigint,
  jsonb,
  varchar,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import {
  DB_ENUM_GENDER,
  DB_ENUM_MATURITY,
  DB_ENUM_PERSONALITY,
} from "../lib/constants/db-enums";

// Enums
export const personalityEnum = pgEnum("personality", DB_ENUM_PERSONALITY);
export const genderEnum = pgEnum("gender", DB_ENUM_GENDER);
export const maturityEnum = pgEnum("maturity", DB_ENUM_MATURITY);

// reference only
export const users_DONT_USE = pgTable("users", {
  id: integer("id").primaryKey(),
  userName: varchar("userName", { length: 255 }),
  clamness: varchar("clamness", { length: 255 }),
  discordId: varchar("discordId", { length: 255 }),
  striker: integer("striker"),
  guardian: integer("guardian"),
});

// Pet Users table
export const petUsers = pgTable("pet_users", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  discordId: varchar("discord_id", { length: 255 }).notNull().unique(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

// Pets table
export const pets = pgTable("pets", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .references(() => petUsers.id)
    .unique(),
  name: text("name").notNull(),
  imageUrl: text("image_url").notNull(),

  gender: genderEnum("gender").notNull().default(DB_ENUM_GENDER[0]),
  personality: personalityEnum("personality")
    .notNull()
    .default(DB_ENUM_PERSONALITY[0]),
  maturity: maturityEnum("maturity").notNull().default(DB_ENUM_MATURITY[0]),
  pearls: integer("pearls").notNull().default(0),

  // Stats (0-1 scale)
  hunger: real("hunger").notNull().default(0),
  thirst: real("thirst").notNull().default(0),
  health: real("health").notNull().default(1),
  affection: real("affection").notNull().default(0.5),
  tiredness: real("tiredness").notNull().default(0),
  hygiene: real("hygiene").notNull().default(1),

  intelligence: integer("intelligence").notNull().default(0),
  fitness: integer("strength").notNull().default(0),
  reflective: integer("reflexes").notNull().default(0),
  reactive: integer("reactiveness").notNull().default(0),
  carapace: integer("carapace").notNull().default(0),
  regeneration: integer("regeneration").notNull().default(0),

  // Progress
  level: integer("level").notNull().default(1),
  experience: bigint("experience", { mode: "number" }).notNull().default(0),

  // Timestamps
  lastFed: timestamp("last_fed").notNull().defaultNow(),
  lastDrank: timestamp("last_drank").notNull().defaultNow(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),

  meta: jsonb("meta").notNull().default({}),
});

// Items table
export const items = pgTable("items", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  description: text("description"),
  effect: text("effect").notNull(),
  rarity: real("rarity").notNull().default(0), // 0-1 scale
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Pet Items (junction table for pets and their items)
export const petItems = pgTable("pet_items", {
  id: uuid("id").primaryKey().defaultRandom(),
  petId: uuid("pet_id")
    .references(() => pets.id)
    .notNull(),
  itemId: uuid("item_id")
    .references(() => items.id)
    .notNull(),
  quantity: integer("quantity").notNull().default(1),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Relations
export const petUsersRelations = relations(petUsers, ({ one }) => ({
  pet: one(pets, {
    fields: [petUsers.id],
    references: [pets.userId],
  }),
}));

export const petsRelations = relations(pets, ({ one, many }) => ({
  user: one(petUsers, {
    fields: [pets.userId],
    references: [petUsers.id],
  }),
  items: many(petItems),
}));

export const itemsRelations = relations(items, ({ many }) => ({
  pets: many(petItems),
}));

export const petItemsRelations = relations(petItems, ({ one }) => ({
  pet: one(pets, {
    fields: [petItems.petId],
    references: [pets.id],
  }),
  item: one(items, {
    fields: [petItems.itemId],
    references: [items.id],
  }),
}));
