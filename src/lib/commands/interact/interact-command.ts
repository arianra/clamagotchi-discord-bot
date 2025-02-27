import { INTERACT_ACTIONS } from "@/lib/fp/interact/activities";

export const INTERACT_COMMAND = {
  name: "interact",
  description: "Interact with your Clamagotchi to gain XP.",
  options: [
    {
      name: "action",
      description: "How do you want to interact with your Clamagotchi?",
      type: 3, // STRING type
      required: true,
      choices: INTERACT_ACTIONS.map((action) => ({
        name: action,
        value: action,
      })),
    },
  ],
};
