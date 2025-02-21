export const DB_ENUM_PERSONALITY: readonly [string, ...string[]] = [
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
];

export const DB_ENUM_GENDER: readonly [string, ...string[]] = [
  "NEUTRAL",
  "MALE",
  "FEMALE",
];

export const DB_ENUM_MATURITY: readonly [string, ...string[]] = [
  "BABY",
  "TODDLER",
  "CHILD",
  "TEEN",
  "TWEEN",
  "ADULT",
  "ELDER",
  "ANCIENT",
];

export const DB_ENUM_TRADE_STATUS = [
  "pending",
  "completed",
  "declined",
] as const;
