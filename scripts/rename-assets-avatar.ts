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

    // Find highest existing number
    let highestNumber = 0;
    for (const file of imageFiles) {
      const parsedName = parse(file);
      // Get the part before the first dot
      const baseNumber = parsedName.name.split(".")[0];
      // Only consider files where the part before the first dot is entirely numbers
      if (/^\d+$/.test(baseNumber)) {
        const fileNumber = parseInt(baseNumber, 10);
        highestNumber = Math.max(highestNumber, fileNumber);
      }
    }

    // Filter files that don't have purely numeric names before the first dot
    const unnumberedFiles = imageFiles.filter((file) => {
      const parsedName = parse(file);
      const baseNumber = parsedName.name.split(".")[0];
      return !/^\d+$/.test(baseNumber);
    });

    // Rename only unnumbered files, starting after the highest number
    let newNumber = highestNumber + 1;
    for (const file of unnumberedFiles) {
      const oldPath = join(directoryPath, file);
      const extension = extname(file).toLowerCase();

      // Skip files without extensions
      if (!extension) {
        console.warn(`Skipping file without extension: ${file}`);
        continue;
      }

      const newName = `${String(newNumber).padStart(5, "0")}${extension}`;
      const newPath = join(directoryPath, newName);

      if (await exists(oldPath)) {
        await rename(oldPath, newPath);
        newNumber++;
      }
    }

    console.log(
      `Renamed ${unnumberedFiles.length} files, starting after number ${highestNumber}`
    );
  } catch (error) {
    console.error("Error renaming files:", error);
  }
})();
