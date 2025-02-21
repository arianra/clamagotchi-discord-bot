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

export const DB_ENUM_GENDER = ["NEUTRAL", "MALE", "FEMALE"] as const;

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

export const DB_ENUM_TRADE_STATUS = [
  "pending",
  "completed",
  "declined",
] as const;
