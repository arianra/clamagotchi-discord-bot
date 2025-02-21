import { INFO_COMMAND } from "../src/lib/commands/info/info-command";
import { START_COMMAND } from "../src/lib/commands/start/start-command";
import { HELP_COMMAND } from "../src/lib/commands/help/help-command";
import { SHOW_COMMAND } from "../src/lib/commands/show/show-command";
import { RANDOM_COMMAND } from "../src/lib/commands/random/random-command";
import { TRADE_COMMAND } from "../src/lib/commands/trade/trade-command";
console.log(`PUBLIC_KEY: ${process.env.PUBLIC_KEY}`);

(async () => {
  const response = await fetch(
    `https://discord.com/api/v10/applications/${process.env.APPLICATION_ID}/commands`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bot ${process.env.TOKEN}`,
      },
      method: "PUT",
      body: JSON.stringify([
        START_COMMAND,
        INFO_COMMAND,
        HELP_COMMAND,
        SHOW_COMMAND,
        RANDOM_COMMAND,
        TRADE_COMMAND,
      ]),
    }
  );

  if (response.ok) {
    console.log("Registered all commands");
  } else {
    console.error("Error registering commands");
    const text = await response.text();
    console.error(text);
  }
})();
