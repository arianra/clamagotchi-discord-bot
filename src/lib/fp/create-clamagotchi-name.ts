import { animeNameSuffixes, clamPrefixes, clamTypes } from "../constants/names";

export const createClamagotchiName = () => {
  const prefix = clamPrefixes[Math.floor(Math.random() * clamPrefixes.length)];
  const clamType = clamTypes[Math.floor(Math.random() * clamTypes.length)];
  const suffix =
    animeNameSuffixes[Math.floor(Math.random() * animeNameSuffixes.length)];

  const patterns = [
    () => `${prefix}${clamType}${suffix}`,
    () => `${prefix}${clamType}`,
  ];

  const selectedPattern = patterns[Math.floor(Math.random() * patterns.length)];
  return selectedPattern();
};
