export const TRADE_COMMAND = {
  name: "trade",
  description: "Trade your Clamagotchi with another player",
  options: [
    {
      name: "user",
      description: "The user you want to trade with",
      type: 6, // USER type
      required: true,
    },
  ],
};
