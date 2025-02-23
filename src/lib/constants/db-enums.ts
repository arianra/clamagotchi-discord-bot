export const DB_ENUM_PERSONALITY = [
  "BRAT",
  "KAWAI",
  "VALLEY GIRL",
  "BRO",
  "GEEKY",
  "LAZY",
  "BUBBLY",
  "SASSY",
  "BITTER",
  "DEMURE",
  "APATHETIC",
  "SHADY",
  "BOASTY",
  "PUNK",
  "SNOBBY",
  "DADDY",
  "GIRLY",
] as const;

export type PersonalityType = (typeof DB_ENUM_PERSONALITY)[number];

export const DB_ENUM_GENDER = ["NEUTRAL", "MALE", "FEMALE"] as const;

export type GenderType = (typeof DB_ENUM_GENDER)[number];

export const DB_ENUM_MATURITY = [
  "BABY",
  "TODDLER",
  "CHILD",
  "TEEN",
  "TWEEN",
  "ADULT",
  "ELDER",
  "ANCIENT",
] as const;

export type MaturityType = (typeof DB_ENUM_MATURITY)[number];

export const DB_ENUM_TRADE_STATUS = [
  "pending",
  "completed",
  "declined",
] as const;

export type TradeStatusType = (typeof DB_ENUM_TRADE_STATUS)[number];
