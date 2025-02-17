import { exists, readdir, rename } from "node:fs/promises";
import { extname, join, parse } from "node:path";

(async () => {
  const directoryPath = "./assets/avatars";

  try {
    const files = await readdir(directoryPath);

    // Only process image files
    const validExtensions = [".png", ".jpg", ".jpeg", ".gif", ".webp"];
    const imageFiles = files.filter((file) =>
      validExtensions.includes(extname(file).toLowerCase())
    );

    // Get all numbered files and their metadata
    const numberedFiles = imageFiles
      .filter((file) => {
        const parsedName = parse(file);
        const baseNumber = parsedName.name.split(".")[0];
        return /^\d+$/.test(baseNumber);
      })
      .map((file) => {
        const parsedName = parse(file);
        const [baseNumber, ...metaParts] = parsedName.name.split(".");
        const metadata = metaParts.length > 0 ? "." + metaParts.join(".") : "";
        return {
          file,
          number: parseInt(baseNumber, 10),
          metadata,
          extension: extname(file).toLowerCase(),
        };
      })
      .sort((a, b) => a.number - b.number);

    // First rename all files to temporary names to avoid conflicts
    for (let i = 0; i < numberedFiles.length; i++) {
      const { file, metadata, extension } = numberedFiles[i];
      const oldPath = join(directoryPath, file);
      const tempName = `temp_${String(i + 1).padStart(
        5,
        "0"
      )}${metadata}${extension}`;
      const tempPath = join(directoryPath, tempName);

      if (await exists(oldPath)) {
        await rename(oldPath, tempPath);
      }
    }

    // Then rename from temporary names to final sequential numbers
    const tempFiles = (await readdir(directoryPath))
      .filter((file) => file.startsWith("temp_"))
      .sort();

    for (let i = 0; i < tempFiles.length; i++) {
      const file = tempFiles[i];
      const oldPath = join(directoryPath, file);

      // Extract metadata and extension from temp file
      const parsedName = parse(file);
      const [, ...metaParts] = parsedName.name.split("_")[1].split(".");
      const metadata = metaParts.length > 0 ? "." + metaParts.join(".") : "";
      const extension = extname(file).toLowerCase();

      const newName = `${String(i + 1).padStart(
        5,
        "0"
      )}${metadata}${extension}`;
      const newPath = join(directoryPath, newName);

      if (await exists(oldPath)) {
        await rename(oldPath, newPath);
      }
    }

    console.log(
      `Successfully renumbered ${numberedFiles.length} files sequentially`
    );
  } catch (error) {
    console.error("Error renumbering files:", error);
  }
})();
