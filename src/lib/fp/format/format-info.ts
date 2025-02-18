import { Pet } from "@/lib/types/Pet";

export const formatInfo = (pet: Pet, discordId: string) => {
  return `${pet.imageUrl}
# Clamagotchi Info
Name: ${pet.name}
Owner: <@${discordId}>

Level: ${pet.level}
Experience: ${pet.experience}
Pearls: ${pet.pearls}

## Characteristics
Personality: ${pet.personality}
Maturity: ${pet.maturity}
Gender: ${pet.gender}

### BasicStats
- Hunger: ${pet.hunger}
- Thirst: ${pet.thirst}
- Health: ${pet.health}
- Affection: ${pet.affection}
- Tiredness: ${pet.tiredness}
- Hygiene: ${pet.hygiene}

### Physical Stats
- Intelligence: ${pet.intelligence} 
- Fitness: ${pet.fitness}
- Reflective: ${pet.reflective}
- Reactive: ${pet.reactive}
- Carapace: ${pet.carapace}
- Regeneration: ${pet.regeneration} 

### Last Actions
- Last Fed: ${pet.lastFed}
- Last Clapped: ${pet.lastDrank}`;
};
