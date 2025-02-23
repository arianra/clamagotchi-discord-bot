import { FoodKey } from "./food-keys";
import { FOOD_ITEMS } from "./food";

interface FoodReaction {
  like: string;
  dislike: string;
  neutral: string;
}

export const FOOD_REACTIONS: Record<FoodKey, FoodReaction> = {
  // Low Tier
  [FoodKey.SEAWEED_SNACK]: {
    like: "*munches happily* — 🌿 These seaweed snacks are my favorite! 😋",
    dislike:
      "*reluctantly nibbles* — Blegh... tastes like the ocean floor... 🤢",
    neutral: "*crunch crunch* — Not bad, just a simple snack. 🤔",
  },
  [FoodKey.ALGAE_CHIPS]: {
    like: "*crunch* — So crispy! *crunch* So good! *crunch* 🌊✨",
    dislike: "*spits it out* — Ew, it tastes like pond scum! 🤮",
    neutral: "*nibbles quietly* — These chips are okay. 😐",
  },
  [FoodKey.PLANKTON_CRACKERS]: {
    like: "*chomps enthusiastically* — Yummy! The tiny bits make it extra tasty! 🦐✨",
    dislike: "*struggles to eat* — It's like trying to eat sand... 😖",
    neutral: "*munches* — Regular old plankton crackers. 🤷",
  },
  [FoodKey.CORAL_NIBBLES]: {
    like: "*bounces excitedly* — Ooh, the colors! They taste as good as they look! 🌈😍",
    dislike: "*winces* — Ow... too hard for my teeth... 😣",
    neutral: "*carefully bites* — These are alright. 😌",
  },
  [FoodKey.SEA_SALT_CRISPS]: {
    like: "*crackles with joy* — Perfect amount of salt! *munch munch* 🧂✨",
    dislike: "*reaches for water* — Too salty! My mouth is a desert! 🏜️😫",
    neutral: "*crunches* — Just your average salty snack. 🤔",
  },
  [FoodKey.KELP_JERKY]: {
    like: "*chews happily* — This kelp jerky is so flavorful! 🌿😋",
    dislike: "*struggles* — It's like chewing on old leather... 😤",
    neutral: "*nibbles* — Kelp jerky, gets the job done. 😶",
  },

  // Medium Tier
  [FoodKey.KELP_SALAD]: {
    like: "*munches fresh greens* — Such a vibrant and healthy salad! 🥗✨",
    dislike: "*pushes plate away* — I'm not a sea turtle, you know... 🐢😒",
    neutral: "*takes small bites* — A decent kelp salad. 🥗",
  },
  [FoodKey.SEAFOOD_MEDLEY]: {
    like: "*savors each bite* — What a delightful mix of ocean flavors! 🐟🦐✨",
    dislike: "*picks through food* — This medley is a mess of flavors... 😕",
    neutral: "*samples carefully* — A standard seafood medley. 🍱",
  },
  [FoodKey.HYDROTHERMAL_HASH]: {
    like: "*steam rises* — The spices in this hash are incredible! 🌋✨",
    dislike: "*fans mouth frantically* — Too hot! My mouth is on fire! 🔥😭",
    neutral: "*blows on food* — A warm hydrothermal hash. 🌡️",
  },
  [FoodKey.REEF_ROLLS]: {
    like: "*delicately unrolls* — These reef rolls are wrapped to perfection! 🌊✨",
    dislike: "*pokes at food* — These rolls are falling apart... 😫",
    neutral: "*takes a bite* — Some basic reef rolls. 🍱",
  },

  // High Tier
  [FoodKey.ROYAL_FEAST]: {
    like: "*dines elegantly* — This feast is truly fit for royalty! 👑✨",
    dislike: "*adjusts napkin* — Too fancy for my taste... 🎩😕",
    neutral: "*samples politely* — Quite the elaborate meal. 🍽️",
  },
  [FoodKey.GOLDEN_CAVIAR]: {
    like: "*savors delicately* — Such exquisite caviar, simply divine! ✨🥄",
    dislike: "*grimaces* — Pretentious little fish eggs... 🥱",
    neutral: "*tastes carefully* — Golden caviar, quite luxurious. 🥂",
  },
  [FoodKey.PEARL_DELICACY]: {
    like: "*sparkles with joy* — This pearl delicacy is absolutely heavenly! 💎✨",
    dislike: "*sighs* — Too refined for my palate... 🎭",
    neutral: "*samples properly* — A sophisticated pearl delicacy. 🌟",
  },
  [FoodKey.KRAKEN_BITES]: {
    like: "These kraken bites pack quite a punch!",
    dislike: "Too intense and chewy...",
    neutral: "Some hearty kraken bites.",
  },
  [FoodKey.SAND_DOLLAR_COOKIES]: {
    like: "*nibbles edges* — These cookies are shaped so prettily! 🍪✨",
    dislike: "*brushes off crumbs* — Too sandy for my taste... 🏖️😕",
    neutral: "*breaks cookie in half* — Sand dollar cookies, quite cute. 🪙",
  },
  [FoodKey.BUBBLE_BISCUITS]: {
    like: "*pops each bubble* — So fun and tasty! 💫🫧",
    dislike: "*watches bubbles pop* — They're just full of air... 😒",
    neutral: "*careful bite* — Bubbly and light. 🫧",
  },
  [FoodKey.TIDE_TAFFIES]: {
    like: "*stretches candy* — Ooh, it changes color like the tides! 🌊✨",
    dislike: "*stuck in teeth* — Too sticky to enjoy... 😣",
    neutral: "*chews thoughtfully* — Tide taffies are interesting. 🍬",
  },
  [FoodKey.BARNACLE_BITES]: {
    like: "*crunches happily* — Each bite is a tiny treasure! 🐚✨",
    dislike: "*picks teeth* — Too crunchy and clingy... 😖",
    neutral: "*careful bite* — Barnacle bites, quite crunchy. 🦪",
  },
  [FoodKey.SHELL_SPRINKLES]: {
    like: "*watches them sparkle* — They melt like sea foam! ✨🐚",
    dislike: "*spits out* — Like eating crushed shells... 😫",
    neutral: "*sprinkles some more* — Decorative and edible. 🎨",
  },
  [FoodKey.OCEAN_POPS]: {
    like: "*licks happily* — It's like tasting the ocean breeze! 🌊🍭",
    dislike: "*makes face* — Too artificially salty... 🧂😖",
    neutral: "*sucks thoughtfully* — Ocean-flavored lollipop. 🍬",
  },
  [FoodKey.SEAFOAM_CANDY]: {
    like: "*watches it dissolve* — It melts like real seafoam! 🫧✨",
    dislike: "*wipes mouth* — Too foamy and weird... 😕",
    neutral: "*lets it melt* — Interesting texture. 🌊",
  },
  [FoodKey.CORAL_CRUNCH]: {
    like: "*munches excitedly* — Such beautiful coral colors! 🌺✨",
    dislike: "*rubs jaw* — Too hard to enjoy... 😣",
    neutral: "*careful bite* — Colorful and crunchy. 🎨",
  },
  [FoodKey.SALTY_SPIRALS]: {
    like: "*follows the spiral* — Each curve is perfectly seasoned! 🌀✨",
    dislike: "*drinks water* — The salt is overwhelming... 🧂😫",
    neutral: "*examines shape* — Spiral snacks with salt. 🌀",
  },
  [FoodKey.WAVE_WAFERS]: {
    like: "*admires pattern* — They ripple like real waves! 🌊✨",
    dislike: "*breaks wafer* — Too delicate and plain... 😒",
    neutral: "*small bite* — Wave-shaped wafers. 🍘",
  },
  [FoodKey.ANEMONE_PASTA]: {
    like: "*twirls fork* — The tentacles dance on my plate! 🦑✨",
    dislike: "*untangles noodles* — Too wiggly to eat properly... 😖",
    neutral: "*careful bite* — Interesting pasta shape. 🍝",
  },
  [FoodKey.DEEP_SEA_PELLETS]: {
    like: "*pops one in* — Each pellet is packed with flavor! 🌊✨",
    dislike: "*pushes away* — Tastes too processed... 😕",
    neutral: "*examines pellet* — Standard deep sea feed. 🔵",
  },
  [FoodKey.OCEAN_BREEZE_MIX]: {
    like: "*sorts through mix* — Every piece is a new surprise! 🌊✨",
    dislike: "*picks out pieces* — Too many flavors at once... 😫",
    neutral: "*selects carefully* — A varied ocean mix. 🥨",
  },
  [FoodKey.NAUTILUS_NOODLES]: {
    like: "*follows spiral shape* — Perfect spiral of flavor! 🐚✨",
    dislike: "*unwinds noodle* — Too mathematically precise... 🤔",
    neutral: "*twirls fork* — Spiral-shaped pasta. 🍜",
  },
  [FoodKey.PHOSPHORUS_POPS]: {
    like: "*watches them glow* — They light up my mouth! ✨💫",
    dislike: "*shields eyes* — Too bright to enjoy... 😣",
    neutral: "*observes glow* — Luminescent snacks. 🌟",
  },
  [FoodKey.ABYSSAL_TRUFFLES]: {
    like: "*savors darkness* — The depths of flavor are amazing! 🌑✨",
    dislike: "*peers into truffle* — Too mysterious for me... 😨",
    neutral: "*careful bite* — Dark and rich truffles. 🍫",
  },
  [FoodKey.LUMINOUS_JELLIES]: {
    like: "*watches them glow* — They dance with light! ✨🌟",
    dislike: "*squints* — Too bright and wobbly... 😖",
    neutral: "*observes jiggle* — Glowing gelatin treats. 🪩",
  },
  [FoodKey.MERMAIDS_BLESSING]: {
    like: "*feels magical* — I can taste the enchantment! 🧜‍♀️✨",
    dislike: "*doubts magic* — Just fancy marketing... 🙄",
    neutral: "*tries magic food* — Mystical-themed dish. 🌟",
  },
  [FoodKey.POSEIDONS_PLATTER]: {
    like: "*feels godly* — Worthy of the sea god himself! 👑🌊",
    dislike: "*overwhelmed* — Too much godly power... 😵",
    neutral: "*respectful bite* — A divine arrangement. 🍱",
  },
  [FoodKey.SIRENS_SONG_SOUP]: {
    like: "*hums along* — The flavors sing to me! 🎵✨",
    dislike: "*covers ears* — Too loud in my mouth... 🎶😖",
    neutral: "*sips quietly* — Melodious soup. 🥣",
  },
  [FoodKey.ATLANTEAN_AMBROSIA]: {
    like: "*feels ancient power* — Tastes like lost civilization! 🏛️✨",
    dislike: "*suspicious* — Probably not authentic... 🤨",
    neutral: "*respectful taste* — Ancient recipe recreation. 🏺",
  },
  [FoodKey.LEVIATHANS_LUNCH]: {
    like: "*feels mighty* — Power in every bite! 🐋✨",
    dislike: "*intimidated* — Too intense for me... 😰",
    neutral: "*cautious bite* — Mighty portion size. 🍱",
  },
  [FoodKey.ANCIENT_OCEAN_FEAST]: {
    like: "*tastes history* — Centuries of flavor! 🏺✨",
    dislike: "*questions age* — Maybe too ancient... 🤢",
    neutral: "*careful bite* — Traditional ocean feast. 🍽️",
  },
  [FoodKey.SUNKEN_TREASURE_TREAT]: {
    like: "*discovers flavors* — Each bite is precious! 💎✨",
    dislike: "*disappointed* — Not worth diving for... 😒",
    neutral: "*examines food* — Treasure-themed dessert. 🏴‍☠️",
  },
  [FoodKey.MYTHICAL_MARITIME_MEAL]: {
    like: "*feels legendary* — Tales will be told of this feast! 📚✨",
    dislike: "*skeptical* — More myth than meal... 🙄",
    neutral: "*tastes carefully* — Legendary dish. 🗺️",
  },
  [FoodKey.FISH_FLAKES]: {
    like: "*watches flakes float down* — Premium flakes, premium taste! 🐠✨",
    dislike: "*blows flakes away* — Just fancy fish food... 😒",
    neutral: "*catches a flake* — Standard fish flakes. 🐟",
  },
  [FoodKey.CORAL_CURRY]: {
    like: "*steam wafts up* — The coral adds such unique spice! 🌶️✨",
    dislike: "*fans mouth* — Too many competing flavors... 🥵",
    neutral: "*stirs curry* — Interesting coral-based curry. 🍛",
  },
  [FoodKey.SEABED_STEW]: {
    like: "*sips broth* — Like a warm ocean current! 🌊✨",
    dislike: "*finds sand* — Too much seabed, not enough stew... 😕",
    neutral: "*careful spoonful* — Deep sea stew. 🥣",
  },
  [FoodKey.MARINER_MUNCH]: {
    like: "*salutes* — A true sailor's snack! ⚓✨",
    dislike: "*checks teeth* — Too tough for civilian tastes... 🚢😫",
    neutral: "*nibbles corner* — Sailor's favorite snack. 🧂",
  },
  [FoodKey.TIDAL_TEMPURA]: {
    like: "*crunches through waves* — Perfect crispy coating! 🌊✨",
    dislike: "*oil drips* — Too greasy for my taste... 💧😣",
    neutral: "*breaks piece* — Wave-shaped tempura. 🍤",
  },
  [FoodKey.AQUATIC_ALFREDO]: {
    like: "*twirls pasta* — Creamy ocean goodness! 🌊✨",
    dislike: "*wipes sauce* — Too rich and heavy... 🥛😫",
    neutral: "*forks noodles* — Seafood alfredo pasta. 🍝",
  },
  [FoodKey.PRESSURE_COOKED_PLATTER]: {
    like: "*steam billows* — Cooked by the depths themselves! 🌋✨",
    dislike: "*tests temperature* — Still too hot to handle... 🔥😅",
    neutral: "*waits patiently* — Pressure-cooked meal. 🍲",
  },
  [FoodKey.NEPTUNES_NECTAR]: {
    like: "*sips reverently* — The essence of the sea god himself! 🌊👑✨",
    dislike: "*gags politely* — Tastes like salty bathwater... 🌊😖",
    neutral: "*careful sip* — Divine sea essence. 🏺",
  },
  [FoodKey.DEEP_ABYSS_DELICACY]: {
    like: "*savors the darkness* — Flavors from the deepest trenches! 🕳️✨",
    dislike:
      "*squints into depths* — Some things should stay in the abyss... 😨",
    neutral: "*contemplates darkness* — Mysterious deep-sea fare. 🌑",
  },
};

export const getFoodReaction = (
  foodKey: FoodKey,
  isLiked: boolean | null
): string => {
  const reactions = FOOD_REACTIONS[foodKey];
  if (isLiked === true) return reactions.like;
  if (isLiked === false) return reactions.dislike;
  return reactions.neutral;
};
