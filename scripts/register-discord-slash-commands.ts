import { START_COMMAND } from "../src/lib/commands/start/start-command";

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
      body: JSON.stringify([START_COMMAND]),
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
