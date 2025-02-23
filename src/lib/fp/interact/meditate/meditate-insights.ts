type MeditationInsight = {
  message: string;
  source: string; // For our reference, not shown to users
  xpMultiplier: number; // 1.2-2.0
  restMultiplier: number; // 1.5-3.0
};

/*
1. Direct Revolutionary Action/Violence (1.8-2.0 XP, 2.5-3.0 rest)
2. Core Revolutionary Theory (1.6-1.8 XP, 2.2-2.5 rest)
3. Revolutionary Strategy (1.5-1.7 XP, 2.0-2.3 rest)
4. Critical Theory (1.4-1.6 XP, 1.8-2.1 rest)
*/

const MEDITATION_INSIGHTS: MeditationInsight[] = [
  {
    message:
      "*closes eyes thoughtfully* — **The pearl's value comes not from its shine, but from the labor of those who found it... 🌊**",
    source: "Marx's Labor Theory of Value",
    xpMultiplier: 1.8,
    restMultiplier: 2.0,
  },
  {
    message:
      "*contemplates deeply* — **The smallest clam and the largest whale swim in the same ocean. Why then do some claim the waters as their own? 🌊**",
    source: "Rodney on Resource Exploitation",
    xpMultiplier: 1.7,
    restMultiplier: 2.2,
  },
  {
    message:
      "*achieves clarity* — **True growth comes not from competing with other clams, but from lifting each other up from the ocean floor... ✨**",
    source: "Mutual Aid Theory",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*reaches enlightenment* — **The shells we wear are shaped by the currents we swim in, but we can change those currents together... 🐚**",
    source: "Fanon's Sociogenesis",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*finds inner peace* — **Strange how the same waters that divide our reefs also connect all shores... 🌊**",
    source: "Internationalist Solidarity",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*gains wisdom* — **The smallest barnacle's story is as worthy as the tale of the greatest leviathan... 📖**",
    source: "Subaltern Studies",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*ponders deeply* — **Why do we call it a 'pearl of wisdom' when true wisdom lies in sharing our pearls? 💭**",
    source: "Collective Knowledge Systems",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*contemplates deeply* — **The strongest currents are those where many streams flow together as one... 🌊**",
    source: "Malcolm X on Unity",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*gazes into depths* — **The tides that move us are not natural law, but the rhythms we've been taught to accept... 🌊**",
    source: "Fanon on Societal Conditioning",
    xpMultiplier: 1.9,
    restMultiplier: 2.5,
  },
  {
    message:
      "*watches patterns* — **The tides that move us are not natural law, but the rhythms we've been taught to accept... 🌊**",
    source: "Fanon on Societal Conditioning",
    xpMultiplier: 1.9,
    restMultiplier: 2.5,
  },
  {
    message:
      "*observes carefully* — **Strange how some fish claim to own the reef, when the reef grew long before any fish was born... 🐠**",
    source: "Indigenous Perspectives on Land",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*reflects thoughtfully* — **The smallest fish must learn to see themselves through their own eyes, not through the eyes of bigger fish... 🐟**",
    source: "Du Bois's Double Consciousness",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*understands clearly* — **When the tide rises, it lifts all shells - but some shells are held down by chains... ⛓️**",
    source: "Angela Davis on Systemic Oppression",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*ponders deeply* — **The pearl divers know more about the ocean than all the merchants who trade their findings... 👥**",
    source: "Gramsci on Worker Knowledge",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*realizes truth* — **The schools of fish swimming in formation aren't free just because they all swim the same way... 🐟**",
    source: "Marcuse on False Consciousness",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*sees clearly* — **Those who guard the reef's wealth are the same ones who took it from the reef dwellers... 🏰**",
    source: "Rodney on Neo-colonialism",
    xpMultiplier: 1.7,
    restMultiplier: 2.3,
  },
  {
    message:
      "*discovers wisdom* — **Every shell holds a story, but the loudest stories aren't always the truest ones... 📚**",
    source: "Spivak on Subaltern Voices",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*finds truth* — **The coral doesn't grow because of the reef keeper's rules, but because of the collective work of countless polyps... 🪸**",
    source: "Marx on Labor Value",
    xpMultiplier: 1.7,
    restMultiplier: 2.4,
  },
  {
    message:
      "*understands deeply* — **The anemone and the clownfish know more about mutual aid than all the shark's treaties... 🐠**",
    source: "Kropotkin on Mutual Aid",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*sees pattern* — **When the octopus changes color to match the coral, is it by choice or by necessity of survival? 🐙**",
    source: "Fanon on Cultural Assimilation",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*gains insight* — **The fish who forgets their own reef, preferring the aquarium, has learned to love their own containment... 🏊‍♂️**",
    source: "Malcolm X on Identity",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*observes intently* — **The jellyfish drifts freely, yet always within currents shaped by others... 🎐**",
    source: "Foucault on Power Structures",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*contemplates deeply* — **Why do the small fish thank the shark for eating only a few of them today? 🦈**",
    source: "Sankara on Neo-colonialism",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*ponders quietly* — **The sea cucumber turning its insides out to survive is not the same as willingly giving them up... 🥒**",
    source: "Césaire on Resistance",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*reflects calmly* — **The lionfish who invades new reefs was first displaced from its own waters... 🐡**",
    source: "Said on Displacement",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*understands deeply* — **The hermit crab's shell is borrowed, but their spirit of resistance is their own... 🦀**",
    source: "C.L.R. James on Revolutionary Spirit",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*sees truth* — **The reef's beauty lies not in any single coral, but in the harmony of their collective growth... 🌟**",
    source: "Luxembourg on Spontaneous Order",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*realizes suddenly* — **The tides do not rise and fall by the will of the moon alone, but by the pull of all celestial bodies together... ⭐**",
    source: "Mariátegui on Collective Action",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*discovers wisdom* — **The sea slug carries the algae's chlorophyll not as theft, but as liberation of its potential... 🌿**",
    source: "Cabral on Revolutionary Culture",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*meditates deeply* — **The whale's song travels farther when many voices join the chorus... 🐋**",
    source: "Bambara on Collective Voice",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*observes carefully* — **The cleaner wrasse and the shark dance together, but one still holds power over the other... 🦈**",
    source: "hooks on Power Relations",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*ponders truth* — **The seahorse changes its colors, but why must it change to survive in its own home? 🌈**",
    source: "Thiong'o on Cultural Imperialism",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*sees clearly* — **The fish trapped in the tide pool must learn that the ocean exists beyond these walls... 🌊**",
    source: "Freire on Critical Consciousness",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*understands deeply* — **The starfish regrows its arms not through the mercy of the one who tore them, but through its own power... ⭐**",
    source: "Lorde on Self-Preservation",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*contemplates silently* — **The pearl forms not from the oyster's wish to be beautiful, but from its resistance to pain... 🦪**",
    source: "Fanon on Revolutionary Violence",
    xpMultiplier: 1.9,
    restMultiplier: 2.7,
  },
  {
    message:
      "*watches intently* — **The moray eel strikes not from desire for violence, but because peaceful hiding in its cave was no longer possible... 🐍**",
    source: "Fanon on Revolutionary Necessity",
    xpMultiplier: 2.0,
    restMultiplier: 3.0,
  },
  {
    message:
      "*observes deeply* — **The swordfish's blade was not made for fighting, but when cornered, becomes a weapon of liberation... ⚔️**",
    source: "Huey P. Newton on Self-Defense",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*understands clearly* — **The ink of the octopus clouds the water not to hide, but to change the conditions of its oppression... 🦑**",
    source: "Che on Revolutionary Tactics",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*sees truth* — **The barracuda who swims alone is caught in the net, but the school that turns together breaks free... 🐟**",
    source: "Mao on People's War",
    xpMultiplier: 1.6,
    restMultiplier: 2.2,
  },
  {
    message:
      "*contemplates deeply* — **The reef does not ask permission to grow through the nets that would contain it... 🌊**",
    source: "Assata on Revolutionary Action",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*realizes suddenly* — **The hammerhead's strange shape was not a deformity, but an evolution of resistance... 🦈**",
    source: "Cabral on Revolutionary Adaptation",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*ponders quietly* — **The electric eel's shock is not violence, but a reminder that power flows through all of us... ⚡**",
    source: "Malcolm X on Power",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*observes carefully* — **The turtle's shell is both protection and prison - true liberation means shedding old armor... 🐢**",
    source: "Sankara on Revolutionary Transformation",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*understands deeply* — **The coral polyps build their fortress not in a day, but through constant, collective resistance... 🏰**",
    source: "Lenin on Revolutionary Patience",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*sees clearly* — **The anglerfish's light is not to guide others, but to reveal the true nature of the depths... 🎣**",
    source: "Mariátegui on Revolutionary Consciousness",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*reflects silently* — **The sea urchin's spines grow sharper not from hatred, but from the necessity of survival... 🌟**",
    source: "George Jackson on Revolutionary Defense",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*realizes truth* — **The mantis shrimp strikes with the force of a bullet not for glory, but because half-measures mean death... 🦐**",
    source: "Fred Hampton on Revolutionary Action",
    xpMultiplier: 1.9,
    restMultiplier: 2.8,
  },
  {
    message:
      "*contemplates deeply* — **The pistol shrimp's snap creates a flash of light - in darkness, even small actions can illuminate the way... 💫**",
    source: "Ho Chi Minh on Revolutionary Tactics",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*observes intently* — **The remora follows the shark not from love, but because the current system of distribution leaves no choice... 🦈**",
    source: "Lenin on Imperialism",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*contemplates deeply* — **The seastar moves slowly, but when many arms reach together, even the strongest shell opens... **",
    source: "Mao on Mass Line",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*understands clearly* — **The shoal that moves as one did not learn this dance overnight, but through continuous practice and unity... 🐟**",
    source: "Stalin on Organization",
    xpMultiplier: 1.6,
    restMultiplier: 2.2,
  },
  {
    message:
      "*sees wisdom* — **The wise old grouper knows both the shallow reefs and the deep trenches - theory without practice is empty... 🐠**",
    source: "Gramsci on Praxis",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*realizes truth* — **The dolphins who guard their pod today were once themselves hunted - memory is a weapon... ⭐**",
    source: "Lenin on Historical Consciousness",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*ponders deeply* — **The abyss is dark not because light cannot reach it, but because those above hoard the sun... 🌊**",
    source: "Gramsci on Cultural Hegemony",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*observes carefully* — **The clownfish who thinks itself separate from its anemone has forgotten the nature of symbiosis... 🐠**",
    source: "Mao on Contradiction",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*reflects silently* — **Each wave alone returns to the sea, but together they can reshape the shoreline... 🌊**",
    source: "Stalin on Collective Action",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*understands deeply* — **The wise cuttlefish changes not just its colors, but the texture of its skin - adapt or perish... 🦑**",
    source: "Lenin on Revolutionary Tactics",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*sees clearly* — **The coral that grows in isolation becomes bleached, but those united in solidarity thrive... 🪸**",
    source: "Gramsci on Solidarity",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*contemplates truth* — **The fish who memorizes the patterns of the net without questioning why it is cast learns nothing... 🎣**",
    source: "Mao on Investigation",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*realizes suddenly* — **The sea cucumber that empties itself to survive today must learn to keep its strength for tomorrow... 🥒**",
    source: "Lenin on Strategic Retreat",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*observes intently* — **The mussel bed that grows in layers becomes stronger than the rock it clings to... 🦪**",
    source: "Gramsci on Building Power",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*understands deeply* — **The wise octopus knows that each arm must move with purpose, yet all serve the same body... 🐙**",
    source: "Stalin on Democratic Centralism",
    xpMultiplier: 1.6,
    restMultiplier: 1.8,
  },
  {
    message:
      "*observes deeply* — **The parrotfish who grinds coral to sand doesn't know it creates the very beaches where others rest... 🐠**",
    source: "Marx on Alienated Labor",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*contemplates truth* — **The whale shark filters the water not for itself alone, but creates currents that feed all around it... 🐋**",
    source: "Lenin on Vanguardism",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*understands clearly* — **The nautilus builds its chambers in a perfect spiral, yet cannot comprehend its own mathematics... 🐚**",
    source: "Gramsci on False Consciousness",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*sees wisdom* — **The pufferfish who shows its spines to sharks but not to friends knows the difference between peace and pacifism... 🐡**",
    source: "Trotsky on Permanent Revolution",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*realizes deeply* — **The sea snake's venom grows stronger not from malice, but from the necessity of survival against larger predators... 🐍**",
    source: "Mao on Protracted Struggle",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*ponders quietly* — **The barnacle builds its fortress not to hide from the world, but to better resist its storms... 🦪**",
    source: "Lenin on Party Organization",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*observes carefully* — **The hagfish appears weak and primitive, yet survives by turning predators' strength against them... 🐟**",
    source: "Giap on Guerrilla Tactics",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*contemplates deeply* — **The Portuguese Man O' War is not one creature, but many working as one - there is strength in unity... ⛵**",
    source: "Stalin on Party Unity",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*understands suddenly* — **The cleaner shrimp removes parasites from larger fish, but who will clean the parasites from society?... 🦐**",
    source: "Luxembourg on Reform vs Revolution",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*sees clearly* — **The lanternfish's light is not its own, but borrowed from the bacteria within - all power comes from the masses... 🎐**",
    source: "Mao on Mass Line",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*reflects deeply* — **The conch's shell grows in a spiral, each revolution building on the last, yet always moving forward... 🐚**",
    source: "Engels on Dialectics",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*realizes truth* — **The salmon who swims upstream fights not just the current, but the very system that made the river... 🐟**",
    source: "Mariátegui on Indigenous Socialism",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*observes intently* — **The decorator crab adorns itself with pieces of its environment, yet beneath remains a fighter... 🦀**",
    source: "Lenin on Legal and Illegal Struggle",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
  {
    message:
      "*understands deeply* — **The boxfish's rigid armor limits its movement - sometimes our defenses become our chains... 🐡**",
    source: "Luxemburg on Spontaneity",
    xpMultiplier: 1.0,
    restMultiplier: 1.0,
  },
];

export const getRandomInsight = (): MeditationInsight => {
  return MEDITATION_INSIGHTS[
    Math.floor(Math.random() * MEDITATION_INSIGHTS.length)
  ];
};
