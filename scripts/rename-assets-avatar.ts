import { readdir, rename } from "node:fs/promises";
import { extname, join } from "node:path";

async function renumberFiles(directoryPath: string) {
  try {
    // Read all files in directory
    const files = await readdir(directoryPath);

    // Rename each file with padded zeros
    for (let i = 0; i < files.length; i++) {
      const oldPath = join(directoryPath, files[i]);
      const extension = extname(files[i]); // Gets ".png", ".jpg", etc.
      const newName = `${String(i + 1).padStart(5, "0")}${extension}`; // Creates "00001.png", etc.

      const newPath = join(directoryPath, newName);

      await rename(oldPath, newPath);
    }

    console.log(`Renamed ${files.length} files`);
  } catch (error) {
    console.error("Error renaming files:", error);
  }
}

// Usage
await renumberFiles("./assets/avatars");
