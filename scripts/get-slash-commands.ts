import "dotenv/config";

const { TOKEN, APPLICATION_ID } = process.env;

const command = `curl -X GET -H 'Authorization: Bot ${TOKEN}' https://discord.com/api/v10/applications/${APPLICATION_ID}/commands`;

console.log("Executing:\n", command);
const childProcess = Bun.spawn(["bash", "-c", command]);

const output = await new Response(childProcess.stdout).text();
console.log("\nResponse:\n", JSON.parse(output));
