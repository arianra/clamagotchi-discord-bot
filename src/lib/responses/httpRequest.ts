import https from "https";
import { version } from "../../../package.json" assert { type: "json" };

export const httpRequest = async ({
  method = "POST",
  payload,
  url,
}: {
  method?: string;
  payload: any;
  url: string;
}) => {
  const body = JSON.stringify(payload);

  return new Promise((resolve, reject) => {
    const req = https.request(
      url,
      {
        method: method,
        headers: {
          "Content-Type": "application/json",
          "Content-Length": body.length,
          "User-Agent": `DiscordBot (clamagotchi-discord-bot.vercel.app, ${version})`,
        },
      },
      (res) => {
        let responseData = "";

        res.on("data", (chunk) => {
          responseData += chunk;
        });

        res.on("end", () => {
          console.log("HTTPS response:", res.statusCode, responseData);
          resolve(null);
        });
      }
    );

    req.on("error", (error) => {
      console.error("HTTPS error:", error);
      reject(error);
    });

    req.write(body);
    req.end();
  });
};
