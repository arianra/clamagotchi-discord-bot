const getSelfApiUrl = () =>
  process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}/api`
    : `http://localhost:3000/api`;

export const URI_API_SELF_FOLLOWUP = `${getSelfApiUrl()}/discord-followup`;

export const URI_API_DISCORD = `https://discord.com/api/v10`;
