import { list } from "@vercel/blob";

export const fetchRandomAvatarUrl = async (): Promise<string> => {
  try {
    // List all files in the avatars directory
    const { blobs } = await list({
      prefix: "avatars/",
    });

    if (blobs.length === 0) {
      throw new Error("No avatar images found");
    }

    // Pick a random blob
    const randomIndex = Math.floor(Math.random() * blobs.length);
    const randomBlob = blobs[randomIndex];

    console.log("Random blob:", randomBlob);

    return randomBlob.url;
  } catch (error) {
    console.error("Error getting random avatar:", error);
    throw error;
  }
};
