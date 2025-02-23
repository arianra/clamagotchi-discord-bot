type MeditationInsight = {
  message: string;
  source: string; // For our reference, not shown to users
  xpGain: number; // More profound insights give more XP
};

const MEDITATION_INSIGHTS: MeditationInsight[] = [
  {
    message:
      "*closes eyes thoughtfully* The pearl's value comes not from its shine, but from the labor of those who found it... 🌊",
    source: "Marx's Labor Theory of Value",
    xpGain: 8,
  },
  {
    message:
      "*contemplates deeply* The smallest clam and the largest whale swim in the same ocean. Why then do some claim the waters as their own? 🌊",
    source: "Rodney on Resource Exploitation",
    xpGain: 10,
  },
  {
    message:
      "*achieves clarity* True growth comes not from competing with other clams, but from lifting each other up from the ocean floor... ✨",
    source: "Mutual Aid Theory",
    xpGain: 7,
  },
  {
    message:
      "*reaches enlightenment* The shells we wear are shaped by the currents we swim in, but we can change those currents together... 🐚",
    source: "Fanon's Sociogenesis",
    xpGain: 12,
  },
  {
    message:
      "*finds inner peace* Strange how the same waters that divide our reefs also connect all shores... 🌊",
    source: "Internationalist Solidarity",
    xpGain: 9,
  },
  {
    message:
      "*gains wisdom* The smallest barnacle's story is as worthy as the tale of the greatest leviathan... 📖",
    source: "Subaltern Studies",
    xpGain: 8,
  },
  {
    message:
      "*ponders deeply* Why do we call it a 'pearl of wisdom' when true wisdom lies in sharing our pearls? 💭",
    source: "Collective Knowledge Systems",
    xpGain: 7,
  },
  {
    message:
      "*contemplates deeply* The strongest currents are those where many streams flow together as one... 🌊",
    source: "Malcolm X on Unity",
    xpGain: 10,
  },
  {
    message:
      "*gazes into depths* The surface may shimmer with gold, but true wealth flows in the depths where we all swim... 💎",
    source: "Marx on Capital",
    xpGain: 11,
  },
  {
    message:
      "*watches patterns* The tides that move us are not natural law, but the rhythms we've been taught to accept... 🌊",
    source: "Fanon on Societal Conditioning",
    xpGain: 9,
  },
  {
    message:
      "*observes carefully* Strange how some fish claim to own the reef, when the reef grew long before any fish was born... 🐠",
    source: "Indigenous Perspectives on Land",
    xpGain: 10,
  },
  {
    message:
      "*reflects thoughtfully* The smallest fish must learn to see themselves through their own eyes, not through the eyes of bigger fish... 🐟",
    source: "Du Bois's Double Consciousness",
    xpGain: 12,
  },
  {
    message:
      "*understands clearly* When the tide rises, it lifts all shells - but some shells are held down by chains... ⛓️",
    source: "Angela Davis on Systemic Oppression",
    xpGain: 11,
  },
  {
    message:
      "*ponders deeply* The pearl divers know more about the ocean than all the merchants who trade their findings... 👥",
    source: "Gramsci on Worker Knowledge",
    xpGain: 9,
  },
  {
    message:
      "*realizes truth* The schools of fish swimming in formation aren't free just because they all swim the same way... 🐟",
    source: "Marcuse on False Consciousness",
    xpGain: 10,
  },
  {
    message:
      "*sees clearly* Those who guard the reef's wealth are the same ones who took it from the reef dwellers... 🏰",
    source: "Rodney on Neo-colonialism",
    xpGain: 11,
  },
  {
    message:
      "*discovers wisdom* Every shell holds a story, but the loudest stories aren't always the truest ones... 📚",
    source: "Spivak on Subaltern Voices",
    xpGain: 10,
  },
  {
    message:
      "*finds truth* The coral doesn't grow because of the reef keeper's rules, but because of the collective work of countless polyps... 🪸",
    source: "Marx on Labor Value",
    xpGain: 11,
  },
  {
    message:
      "*understands deeply* The anemone and the clownfish know more about mutual aid than all the shark's treaties... 🐠",
    source: "Kropotkin on Mutual Aid",
    xpGain: 9,
  },
  {
    message:
      "*sees pattern* When the octopus changes color to match the coral, is it by choice or by necessity of survival? 🐙",
    source: "Fanon on Cultural Assimilation",
    xpGain: 12,
  },
  {
    message:
      "*gains insight* The fish who forgets their own reef, preferring the aquarium, has learned to love their own containment... 🏊‍♂️",
    source: "Malcolm X on Identity",
    xpGain: 11,
  },
  {
    message:
      "*observes intently* The jellyfish drifts freely, yet always within currents shaped by others... 🎐",
    source: "Foucault on Power Structures",
    xpGain: 10,
  },
  {
    message:
      "*contemplates deeply* Why do the small fish thank the shark for eating only a few of them today? 🦈",
    source: "Sankara on Neo-colonialism",
    xpGain: 11,
  },
  {
    message:
      "*ponders quietly* The sea cucumber turning its insides out to survive is not the same as willingly giving them up... 🥒",
    source: "Césaire on Resistance",
    xpGain: 10,
  },
  {
    message:
      "*reflects calmly* The lionfish who invades new reefs was first displaced from its own waters... 🐡",
    source: "Said on Displacement",
    xpGain: 9,
  },
  {
    message:
      "*understands deeply* The hermit crab's shell is borrowed, but their spirit of resistance is their own... 🦀",
    source: "C.L.R. James on Revolutionary Spirit",
    xpGain: 11,
  },
  {
    message:
      "*sees truth* The reef's beauty lies not in any single coral, but in the harmony of their collective growth... 🪸",
    source: "Luxembourg on Spontaneous Order",
    xpGain: 10,
  },
  {
    message:
      "*realizes suddenly* The tides do not rise and fall by the will of the moon alone, but by the pull of all celestial bodies together... ⭐",
    source: "Mariátegui on Collective Action",
    xpGain: 12,
  },
  {
    message:
      "*discovers wisdom* The sea slug carries the algae's chlorophyll not as theft, but as liberation of its potential... 🌿",
    source: "Cabral on Revolutionary Culture",
    xpGain: 11,
  },
  {
    message:
      "*meditates deeply* The whale's song travels farther when many voices join the chorus... 🐋",
    source: "Bambara on Collective Voice",
    xpGain: 10,
  },
  {
    message:
      "*observes carefully* The cleaner wrasse and the shark dance together, but one still holds power over the other... 🦈",
    source: "hooks on Power Relations",
    xpGain: 11,
  },
  {
    message:
      "*ponders truth* The seahorse changes its colors, but why must it change to survive in its own home? 🌈",
    source: "Thiong'o on Cultural Imperialism",
    xpGain: 12,
  },
  {
    message:
      "*sees clearly* The fish trapped in the tide pool must learn that the ocean exists beyond these walls... 🌊",
    source: "Freire on Critical Consciousness",
    xpGain: 11,
  },
  {
    message:
      "*understands deeply* The starfish regrows its arms not through the mercy of the one who tore them, but through its own power... ⭐",
    source: "Lorde on Self-Preservation",
    xpGain: 10,
  },
  {
    message:
      "*contemplates silently* The pearl forms not from the oyster's wish to be beautiful, but from its resistance to pain... 🦪",
    source: "Fanon on Revolutionary Violence",
    xpGain: 12,
  },
  {
    message:
      "*watches intently* The moray eel strikes not from desire for violence, but because peaceful hiding in its cave was no longer possible... 🐍",
    source: "Fanon on Revolutionary Necessity",
    xpGain: 12,
  },
  {
    message:
      "*observes deeply* The swordfish's blade was not made for fighting, but when cornered, becomes a weapon of liberation... ⚔️",
    source: "Huey P. Newton on Self-Defense",
    xpGain: 11,
  },
  {
    message:
      "*understands clearly* The ink of the octopus clouds the water not to hide, but to change the conditions of its oppression... 🦑",
    source: "Che on Revolutionary Tactics",
    xpGain: 10,
  },
  {
    message:
      "*sees truth* The barracuda who swims alone is caught in the net, but the school that turns together breaks free... 🐟",
    source: "Mao on People's War",
    xpGain: 11,
  },
  {
    message:
      "*contemplates deeply* The reef does not ask permission to grow through the nets that would contain it... 🌊",
    source: "Assata on Revolutionary Action",
    xpGain: 12,
  },
  {
    message:
      "*realizes suddenly* The hammerhead's strange shape was not a deformity, but an evolution of resistance... 🦈",
    source: "Cabral on Revolutionary Adaptation",
    xpGain: 11,
  },
  {
    message:
      "*ponders quietly* The electric eel's shock is not violence, but a reminder that power flows through all of us... ⚡",
    source: "Malcolm X on Power",
    xpGain: 12,
  },
  {
    message:
      "*observes carefully* The turtle's shell is both protection and prison - true liberation means shedding old armor... 🐢",
    source: "Sankara on Revolutionary Transformation",
    xpGain: 11,
  },
  {
    message:
      "*understands deeply* The coral polyps build their fortress not in a day, but through constant, collective resistance... 🏰",
    source: "Lenin on Revolutionary Patience",
    xpGain: 10,
  },
  {
    message:
      "*sees clearly* The anglerfish's light is not to guide others, but to reveal the true nature of the depths... 🎣",
    source: "Mariátegui on Revolutionary Consciousness",
    xpGain: 11,
  },
  {
    message:
      "*reflects silently* The sea urchin's spines grow sharper not from hatred, but from the necessity of survival... 🌟",
    source: "George Jackson on Revolutionary Defense",
    xpGain: 12,
  },
  {
    message:
      "*realizes truth* The mantis shrimp strikes with the force of a bullet not for glory, but because half-measures mean death... 🦐",
    source: "Fred Hampton on Revolutionary Action",
    xpGain: 11,
  },
  {
    message:
      "*contemplates deeply* The pistol shrimp's snap creates a flash of light - in darkness, even small actions can illuminate the way... 💫",
    source: "Ho Chi Minh on Revolutionary Tactics",
    xpGain: 10,
  },
  {
    message:
      "*observes intently* The remora follows the shark not from love, but because the current system of distribution leaves no choice... 🦈",
    source: "Lenin on Imperialism",
    xpGain: 11,
  },
  {
    message:
      "*contemplates deeply* The seastar moves slowly, but when many arms reach together, even the strongest shell opens... 🌟",
    source: "Mao on Mass Line",
    xpGain: 12,
  },
  {
    message:
      "*understands clearly* The shoal that moves as one did not learn this dance overnight, but through continuous practice and unity... 🐟",
    source: "Stalin on Organization",
    xpGain: 11,
  },
  {
    message:
      "*sees wisdom* The wise old grouper knows both the shallow reefs and the deep trenches - theory without practice is empty... 🐠",
    source: "Gramsci on Praxis",
    xpGain: 10,
  },
  {
    message:
      "*realizes truth* The dolphins who guard their pod today were once themselves hunted - memory is a weapon... 🐬",
    source: "Lenin on Historical Consciousness",
    xpGain: 11,
  },
  {
    message:
      "*ponders deeply* The abyss is dark not because light cannot reach it, but because those above hoard the sun... 🌊",
    source: "Gramsci on Cultural Hegemony",
    xpGain: 12,
  },
  {
    message:
      "*observes carefully* The clownfish who thinks itself separate from its anemone has forgotten the nature of symbiosis... 🐠",
    source: "Mao on Contradiction",
    xpGain: 11,
  },
  {
    message:
      "*reflects silently* Each wave alone returns to the sea, but together they can reshape the shoreline... 🌊",
    source: "Stalin on Collective Action",
    xpGain: 10,
  },
  {
    message:
      "*understands deeply* The wise cuttlefish changes not just its colors, but the texture of its skin - adapt or perish... 🦑",
    source: "Lenin on Revolutionary Tactics",
    xpGain: 11,
  },
  {
    message:
      "*sees clearly* The coral that grows in isolation becomes bleached, but those united in solidarity thrive... 🪸",
    source: "Gramsci on Solidarity",
    xpGain: 12,
  },
  {
    message:
      "*contemplates truth* The fish who memorizes the patterns of the net without questioning why it is cast learns nothing... 🎣",
    source: "Mao on Investigation",
    xpGain: 11,
  },
  {
    message:
      "*realizes suddenly* The sea cucumber that empties itself to survive today must learn to keep its strength for tomorrow... 🥒",
    source: "Lenin on Strategic Retreat",
    xpGain: 10,
  },
  {
    message:
      "*observes intently* The mussel bed that grows in layers becomes stronger than the rock it clings to... 🦪",
    source: "Gramsci on Building Power",
    xpGain: 11,
  },
  {
    message:
      "*understands deeply* The wise octopus knows that each arm must move with purpose, yet all serve the same body... 🐙",
    source: "Stalin on Democratic Centralism",
    xpGain: 12,
  },
];

export const getRandomInsight = (): MeditationInsight => {
  return MEDITATION_INSIGHTS[
    Math.floor(Math.random() * MEDITATION_INSIGHTS.length)
  ];
};
