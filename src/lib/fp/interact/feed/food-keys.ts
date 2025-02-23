import { FOOD_ITEMS, FoodTier, FoodType } from "./food";

export enum FoodKey {
  // Low Tier
  SEAWEED_SNACK = "seaweed snack",
  ALGAE_CHIPS = "algae chips",
  PLANKTON_CRACKERS = "plankton crackers",
  CORAL_NIBBLES = "coral nibbles",
  SEA_SALT_CRISPS = "sea salt crisps",
  KELP_JERKY = "kelp jerky",
  SAND_DOLLAR_COOKIES = "sand dollar cookies",
  BUBBLE_BISCUITS = "bubble biscuits",
  TIDE_TAFFIES = "tide taffies",
  BARNACLE_BITES = "barnacle bites",
  SHELL_SPRINKLES = "shell sprinkles",
  OCEAN_POPS = "ocean pops",
  SEAFOAM_CANDY = "seafoam candy",
  CORAL_CRUNCH = "coral crunch",
  SALTY_SPIRALS = "salty spirals",
  WAVE_WAFERS = "wave wafers",

  // Medium Tier
  KELP_SALAD = "kelp salad",
  SEAFOOD_MEDLEY = "seafood medley",
  FISH_FLAKES = "fish flakes",
  ANEMONE_PASTA = "anemone pasta",
  REEF_ROLLS = "reef rolls",
  DEEP_SEA_PELLETS = "deep sea pellets",
  OCEAN_BREEZE_MIX = "ocean breeze mix",
  CORAL_CURRY = "coral curry",
  SEABED_STEW = "seabed stew",
  NAUTILUS_NOODLES = "nautilus noodles",
  PHOSPHORUS_POPS = "phosphorus pops",
  HYDROTHERMAL_HASH = "hydrothermal hash",
  MARINER_MUNCH = "mariner munch",
  TIDAL_TEMPURA = "tidal tempura",
  AQUATIC_ALFREDO = "aquatic alfredo",
  PRESSURE_COOKED_PLATTER = "pressure cooked platter",

  // High Tier
  ROYAL_FEAST = "royal feast",
  GOLDEN_CAVIAR = "golden caviar",
  PEARL_DELICACY = "pearl delicacy",
  ABYSSAL_TRUFFLES = "abyssal truffles",
  LUMINOUS_JELLIES = "luminous jellies",
  KRAKEN_BITES = "kraken bites",
  MERMAIDS_BLESSING = "mermaid's blessing",
  POSEIDONS_PLATTER = "poseidon's platter",
  SIRENS_SONG_SOUP = "siren's song soup",
  ATLANTEAN_AMBROSIA = "atlantean ambrosia",
  LEVIATHANS_LUNCH = "leviathan's lunch",
  NEPTUNES_NECTAR = "neptune's nectar",
  DEEP_ABYSS_DELICACY = "deep abyss delicacy",
  ANCIENT_OCEAN_FEAST = "ancient ocean feast",
  SUNKEN_TREASURE_TREAT = "sunken treasure treat",
  MYTHICAL_MARITIME_MEAL = "mythical maritime meal",
}

export const getRandomFood = (tier?: FoodTier | null): FoodKey => {
  const allFoods = Object.values(FoodKey);

  if (!tier) {
    return allFoods[Math.floor(Math.random() * allFoods.length)];
  }

  const foodsOfTier = allFoods.filter((key) => FOOD_ITEMS[key].tier === tier);

  return foodsOfTier[Math.floor(Math.random() * foodsOfTier.length)];
};

export const getRandomFoodByType = (type: FoodType): FoodKey => {
  const allFoods = Object.values(FoodKey);
  const foodsOfType = allFoods.filter((key) => FOOD_ITEMS[key].type === type);

  return foodsOfType[Math.floor(Math.random() * foodsOfType.length)];
};
