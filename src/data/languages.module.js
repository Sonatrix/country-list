/**
 * Module that exports only the languages data
 * This file can be imported directly to benefit from tree-shaking
 * @module languages
 */

// Languages data
const languagesAll = [
  // Data will be copied from languages.js during build
];

// Create an indexed lookup object
const languages = {
  all: languagesAll,
};

// Add lookup by language codes
languagesAll.forEach((language) => {
  const { alpha2, alpha3, bibliographic } = language;
  if (alpha2) languages[alpha2] = language;
  if (alpha3) languages[alpha3] = language;
  if (bibliographic) languages[bibliographic] = language;
});

export default languages;
export { languagesAll };
