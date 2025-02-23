import { FoodKey } from "./food-keys";

export enum FoodType {
  INSTANT = "INSTANT",
  PREPARED = "PREPARED",
}

export enum FoodTier {
  LOW = "LOW", // 1.2x to 1.8x fillingness
  MEDIUM = "MEDIUM", // 2.3x to 2.7x fillingness
  HIGH = "HIGH", // 3.8x to 6.0x fillingness
}

interface FoodItem {
  name: string;
  type: FoodType;
  tier: FoodTier;
  fillingness: number;
  cost: number;
}

const BASE_FOOD_COST = 4;

// Tier affects base cost multiplier
const TIER_COST_MULTIPLIER = {
  [FoodTier.LOW]: 1,
  [FoodTier.MEDIUM]: 1.2,
  [FoodTier.HIGH]: 1.5,
} as const;

// Prepared foods cost more than instant
const TYPE_COST_MULTIPLIER = {
  [FoodType.INSTANT]: 1,
  [FoodType.PREPARED]: 1.2,
} as const;

export const calculateFoodCost = (
  fillingness: number,
  tier: FoodTier,
  type: FoodType
): number => {
  return Math.round(
    BASE_FOOD_COST *
      fillingness *
      TIER_COST_MULTIPLIER[tier] *
      TYPE_COST_MULTIPLIER[type]
  );
};

export const FOOD_ITEMS: Record<FoodKey, FoodItem> = {
  [FoodKey.SEAWEED_SNACK]: {
    name: "Seaweed Snack",
    type: FoodType.INSTANT,
    tier: FoodTier.LOW,
    fillingness: 1.2,
    cost: calculateFoodCost(1.2, FoodTier.LOW, FoodType.INSTANT),
  },
  [FoodKey.ALGAE_CHIPS]: {
    name: "Algae Chips",
    type: FoodType.INSTANT,
    tier: FoodTier.LOW,
    fillingness: 1.5,
    cost: calculateFoodCost(1.5, FoodTier.LOW, FoodType.INSTANT),
  },
  [FoodKey.PLANKTON_CRACKERS]: {
    name: "Plankton Crackers",
    type: FoodType.PREPARED,
    tier: FoodTier.LOW,
    fillingness: 1.8,
    cost: calculateFoodCost(1.8, FoodTier.LOW, FoodType.PREPARED),
  },
  [FoodKey.CORAL_NIBBLES]: {
    name: "Coral Nibbles",
    type: FoodType.INSTANT,
    tier: FoodTier.LOW,
    fillingness: 1.3,
    cost: calculateFoodCost(1.3, FoodTier.LOW, FoodType.INSTANT),
  },
  [FoodKey.SEA_SALT_CRISPS]: {
    name: "Sea Salt Crisps",
    type: FoodType.INSTANT,
    tier: FoodTier.LOW,
    fillingness: 1.4,
    cost: calculateFoodCost(1.4, FoodTier.LOW, FoodType.INSTANT),
  },
  [FoodKey.KELP_JERKY]: {
    name: "Kelp Jerky",
    type: FoodType.PREPARED,
    tier: FoodTier.LOW,
    fillingness: 1.6,
    cost: calculateFoodCost(1.6, FoodTier.LOW, FoodType.PREPARED),
  },
  [FoodKey.SAND_DOLLAR_COOKIES]: {
    name: "Sand Dollar Cookies",
    type: FoodType.PREPARED,
    tier: FoodTier.LOW,
    fillingness: 1.7,
    cost: calculateFoodCost(1.7, FoodTier.LOW, FoodType.PREPARED),
  },
  [FoodKey.BUBBLE_BISCUITS]: {
    name: "Bubble Biscuits",
    type: FoodType.INSTANT,
    tier: FoodTier.LOW,
    fillingness: 1.4,
    cost: calculateFoodCost(1.4, FoodTier.LOW, FoodType.INSTANT),
  },
  [FoodKey.TIDE_TAFFIES]: {
    name: "Tide Taffies",
    type: FoodType.INSTANT,
    tier: FoodTier.LOW,
    fillingness: 1.5,
    cost: calculateFoodCost(1.5, FoodTier.LOW, FoodType.INSTANT),
  },
  [FoodKey.BARNACLE_BITES]: {
    name: "Barnacle Bites",
    type: FoodType.PREPARED,
    tier: FoodTier.LOW,
    fillingness: 1.6,
    cost: calculateFoodCost(1.6, FoodTier.LOW, FoodType.PREPARED),
  },
  [FoodKey.SHELL_SPRINKLES]: {
    name: "Shell Sprinkles",
    type: FoodType.INSTANT,
    tier: FoodTier.LOW,
    fillingness: 1.3,
    cost: calculateFoodCost(1.3, FoodTier.LOW, FoodType.INSTANT),
  },
  [FoodKey.KELP_SALAD]: {
    name: "Kelp Salad",
    type: FoodType.PREPARED,
    tier: FoodTier.MEDIUM,
    fillingness: 2.3,
    cost: calculateFoodCost(2.3, FoodTier.MEDIUM, FoodType.PREPARED),
  },
  [FoodKey.SEAFOOD_MEDLEY]: {
    name: "Seafood Medley",
    type: FoodType.PREPARED,
    tier: FoodTier.MEDIUM,
    fillingness: 2.7,
    cost: calculateFoodCost(2.7, FoodTier.MEDIUM, FoodType.PREPARED),
  },
  [FoodKey.FISH_FLAKES]: {
    name: "Premium Fish Flakes",
    type: FoodType.INSTANT,
    tier: FoodTier.MEDIUM,
    fillingness: 2.5,
    cost: calculateFoodCost(2.5, FoodTier.MEDIUM, FoodType.INSTANT),
  },
  [FoodKey.ANEMONE_PASTA]: {
    name: "Anemone Pasta",
    type: FoodType.PREPARED,
    tier: FoodTier.MEDIUM,
    fillingness: 2.4,
    cost: calculateFoodCost(2.4, FoodTier.MEDIUM, FoodType.PREPARED),
  },
  [FoodKey.REEF_ROLLS]: {
    name: "Reef Rolls",
    type: FoodType.PREPARED,
    tier: FoodTier.MEDIUM,
    fillingness: 2.6,
    cost: calculateFoodCost(2.6, FoodTier.MEDIUM, FoodType.PREPARED),
  },
  [FoodKey.DEEP_SEA_PELLETS]: {
    name: "Deep Sea Pellets",
    type: FoodType.INSTANT,
    tier: FoodTier.MEDIUM,
    fillingness: 2.4,
    cost: calculateFoodCost(2.4, FoodTier.MEDIUM, FoodType.INSTANT),
  },
  [FoodKey.OCEAN_BREEZE_MIX]: {
    name: "Ocean Breeze Mix",
    type: FoodType.INSTANT,
    tier: FoodTier.MEDIUM,
    fillingness: 2.5,
    cost: calculateFoodCost(2.5, FoodTier.MEDIUM, FoodType.INSTANT),
  },
  [FoodKey.CORAL_CURRY]: {
    name: "Coral Curry",
    type: FoodType.PREPARED,
    tier: FoodTier.MEDIUM,
    fillingness: 2.6,
    cost: calculateFoodCost(2.6, FoodTier.MEDIUM, FoodType.PREPARED),
  },
  [FoodKey.SEABED_STEW]: {
    name: "Seabed Stew",
    type: FoodType.PREPARED,
    tier: FoodTier.MEDIUM,
    fillingness: 2.7,
    cost: calculateFoodCost(2.7, FoodTier.MEDIUM, FoodType.PREPARED),
  },
  [FoodKey.NAUTILUS_NOODLES]: {
    name: "Nautilus Noodles",
    type: FoodType.PREPARED,
    tier: FoodTier.MEDIUM,
    fillingness: 2.5,
    cost: calculateFoodCost(2.5, FoodTier.MEDIUM, FoodType.PREPARED),
  },
  [FoodKey.PHOSPHORUS_POPS]: {
    name: "Phosphorus Pops",
    type: FoodType.INSTANT,
    tier: FoodTier.MEDIUM,
    fillingness: 2.4,
    cost: calculateFoodCost(2.4, FoodTier.MEDIUM, FoodType.INSTANT),
  },
  [FoodKey.ROYAL_FEAST]: {
    name: "Royal Underwater Feast",
    type: FoodType.PREPARED,
    tier: FoodTier.HIGH,
    fillingness: 4.5,
    cost: calculateFoodCost(4.5, FoodTier.HIGH, FoodType.PREPARED),
  },
  [FoodKey.GOLDEN_CAVIAR]: {
    name: "Golden Caviar",
    type: FoodType.INSTANT,
    tier: FoodTier.HIGH,
    fillingness: 3.8,
    cost: calculateFoodCost(3.8, FoodTier.HIGH, FoodType.INSTANT),
  },
  [FoodKey.PEARL_DELICACY]: {
    name: "Pearl Delicacy",
    type: FoodType.PREPARED,
    tier: FoodTier.HIGH,
    fillingness: 5.0,
    cost: calculateFoodCost(5.0, FoodTier.HIGH, FoodType.PREPARED),
  },
  [FoodKey.ABYSSAL_TRUFFLES]: {
    name: "Abyssal Truffles",
    type: FoodType.PREPARED,
    tier: FoodTier.HIGH,
    fillingness: 4.2,
    cost: calculateFoodCost(4.2, FoodTier.HIGH, FoodType.PREPARED),
  },
  [FoodKey.LUMINOUS_JELLIES]: {
    name: "Luminous Jellies",
    type: FoodType.INSTANT,
    tier: FoodTier.HIGH,
    fillingness: 4.0,
    cost: calculateFoodCost(4.0, FoodTier.HIGH, FoodType.INSTANT),
  },
  [FoodKey.KRAKEN_BITES]: {
    name: "Kraken Bites",
    type: FoodType.PREPARED,
    tier: FoodTier.HIGH,
    fillingness: 4.8,
    cost: calculateFoodCost(4.8, FoodTier.HIGH, FoodType.PREPARED),
  },
  [FoodKey.MERMAIDS_BLESSING]: {
    name: "Mermaid's Blessing",
    type: FoodType.PREPARED,
    tier: FoodTier.HIGH,
    fillingness: 4.6,
    cost: calculateFoodCost(4.6, FoodTier.HIGH, FoodType.PREPARED),
  },
  [FoodKey.POSEIDONS_PLATTER]: {
    name: "Poseidon's Platter",
    type: FoodType.PREPARED,
    tier: FoodTier.HIGH,
    fillingness: 4.7,
    cost: calculateFoodCost(4.7, FoodTier.HIGH, FoodType.PREPARED),
  },
  [FoodKey.SIRENS_SONG_SOUP]: {
    name: "Siren's Song Soup",
    type: FoodType.PREPARED,
    tier: FoodTier.HIGH,
    fillingness: 4.3,
    cost: calculateFoodCost(4.3, FoodTier.HIGH, FoodType.PREPARED),
  },
  [FoodKey.ATLANTEAN_AMBROSIA]: {
    name: "Atlantean Ambrosia",
    type: FoodType.INSTANT,
    tier: FoodTier.HIGH,
    fillingness: 4.1,
    cost: calculateFoodCost(4.1, FoodTier.HIGH, FoodType.INSTANT),
  },
  [FoodKey.LEVIATHANS_LUNCH]: {
    name: "Leviathan's Lunch",
    type: FoodType.PREPARED,
    tier: FoodTier.HIGH,
    fillingness: 4.9,
    cost: calculateFoodCost(4.9, FoodTier.HIGH, FoodType.PREPARED),
  },
  [FoodKey.OCEAN_POPS]: {
    name: "Ocean Pops",
    type: FoodType.INSTANT,
    tier: FoodTier.LOW,
    fillingness: 1.4,
    cost: calculateFoodCost(1.4, FoodTier.LOW, FoodType.INSTANT),
  },
  [FoodKey.SEAFOAM_CANDY]: {
    name: "Seafoam Candy",
    type: FoodType.INSTANT,
    tier: FoodTier.LOW,
    fillingness: 1.3,
    cost: calculateFoodCost(1.3, FoodTier.LOW, FoodType.INSTANT),
  },
  [FoodKey.CORAL_CRUNCH]: {
    name: "Coral Crunch",
    type: FoodType.PREPARED,
    tier: FoodTier.LOW,
    fillingness: 1.7,
    cost: calculateFoodCost(1.7, FoodTier.LOW, FoodType.PREPARED),
  },
  [FoodKey.SALTY_SPIRALS]: {
    name: "Salty Spirals",
    type: FoodType.INSTANT,
    tier: FoodTier.LOW,
    fillingness: 1.5,
    cost: calculateFoodCost(1.5, FoodTier.LOW, FoodType.INSTANT),
  },
  [FoodKey.WAVE_WAFERS]: {
    name: "Wave Wafers",
    type: FoodType.PREPARED,
    tier: FoodTier.LOW,
    fillingness: 1.6,
    cost: calculateFoodCost(1.6, FoodTier.LOW, FoodType.PREPARED),
  },
  [FoodKey.HYDROTHERMAL_HASH]: {
    name: "Hydrothermal Hash",
    type: FoodType.PREPARED,
    tier: FoodTier.MEDIUM,
    fillingness: 2.6,
    cost: calculateFoodCost(2.6, FoodTier.MEDIUM, FoodType.PREPARED),
  },
  [FoodKey.MARINER_MUNCH]: {
    name: "Mariner Munch",
    type: FoodType.INSTANT,
    tier: FoodTier.MEDIUM,
    fillingness: 2.4,
    cost: calculateFoodCost(2.4, FoodTier.MEDIUM, FoodType.INSTANT),
  },
  [FoodKey.TIDAL_TEMPURA]: {
    name: "Tidal Tempura",
    type: FoodType.PREPARED,
    tier: FoodTier.MEDIUM,
    fillingness: 2.7,
    cost: calculateFoodCost(2.7, FoodTier.MEDIUM, FoodType.PREPARED),
  },
  [FoodKey.AQUATIC_ALFREDO]: {
    name: "Aquatic Alfredo",
    type: FoodType.PREPARED,
    tier: FoodTier.MEDIUM,
    fillingness: 2.5,
    cost: calculateFoodCost(2.5, FoodTier.MEDIUM, FoodType.PREPARED),
  },
  [FoodKey.PRESSURE_COOKED_PLATTER]: {
    name: "Pressure Cooked Platter",
    type: FoodType.PREPARED,
    tier: FoodTier.MEDIUM,
    fillingness: 2.6,
    cost: calculateFoodCost(2.6, FoodTier.MEDIUM, FoodType.PREPARED),
  },
  [FoodKey.NEPTUNES_NECTAR]: {
    name: "Neptune's Nectar",
    type: FoodType.INSTANT,
    tier: FoodTier.HIGH,
    fillingness: 4.2,
    cost: calculateFoodCost(4.2, FoodTier.HIGH, FoodType.INSTANT),
  },
  [FoodKey.DEEP_ABYSS_DELICACY]: {
    name: "Deep Abyss Delicacy",
    type: FoodType.PREPARED,
    tier: FoodTier.HIGH,
    fillingness: 4.7,
    cost: calculateFoodCost(4.7, FoodTier.HIGH, FoodType.PREPARED),
  },
  [FoodKey.ANCIENT_OCEAN_FEAST]: {
    name: "Ancient Ocean Feast",
    type: FoodType.PREPARED,
    tier: FoodTier.HIGH,
    fillingness: 4.8,
    cost: calculateFoodCost(4.8, FoodTier.HIGH, FoodType.PREPARED),
  },
  [FoodKey.SUNKEN_TREASURE_TREAT]: {
    name: "Sunken Treasure Treat",
    type: FoodType.PREPARED,
    tier: FoodTier.HIGH,
    fillingness: 4.5,
    cost: calculateFoodCost(4.5, FoodTier.HIGH, FoodType.PREPARED),
  },
  [FoodKey.MYTHICAL_MARITIME_MEAL]: {
    name: "Mythical Maritime Meal",
    type: FoodType.PREPARED,
    tier: FoodTier.HIGH,
    fillingness: 4.9,
    cost: calculateFoodCost(4.9, FoodTier.HIGH, FoodType.PREPARED),
  },
} as const;

// Helper to get foods by tier
export const getFoodsByTier = (tier: FoodTier) =>
  Object.values(FOOD_ITEMS).filter((food) => food.tier === tier);

// Helper to get foods by type
export const getFoodsByType = (type: FoodType) =>
  Object.values(FOOD_ITEMS).filter((food) => food.type === type);
