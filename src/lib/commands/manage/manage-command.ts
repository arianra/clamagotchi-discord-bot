export const MANAGE_COMMAND = {
  name: "manage",
  description: "Manage your Clamagotchi's settings",
  options: [
    {
      name: "rename",
      description: "Change your Clamagotchi's name (costs 100 pearls)",
      type: 1, // SUB_COMMAND type
      options: [
        {
          name: "new_name",
          description: "The new name for your Clamagotchi",
          type: 3, // STRING type
          required: true,
        },
      ],
    },
  ],
};
