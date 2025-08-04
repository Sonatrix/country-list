import * as regionsData from './regions.js';

// Export the raw regions data
export default regionsData;

// Export individual regions for selective imports
export const {
  centralAsia,
  southernAsia,
  southeastAsia,
  eastAsia,
  westernAsia,
  centralAfrica,
  northAfrica,
  southernAfrica,
  eastAfrica,
  westAfrica,
  centralAmerica,
  northernAmerica,
  southAmerica,
  caribbean,
  antartica,
  northernEurope,
  southernEurope,
  easternEurope,
  westernEurope,
  australia,
  melanesia,
  micronesia,
  polynesia,
} = regionsData;

// Create a consolidated export for all regions
export const regions = {
  centralAsia,
  southernAsia,
  southeastAsia,
  eastAsia,
  westernAsia,
  centralAfrica,
  northAfrica,
  southernAfrica,
  eastAfrica,
  westAfrica,
  centralAmerica,
  northernAmerica,
  southAmerica,
  caribbean,
  antartica,
  northernEurope,
  southernEurope,
  easternEurope,
  westernEurope,
  australia,
  melanesia,
  micronesia,
  polynesia,
};

// Get all countries from all regions
export const allRegionCountries = Object.values(regionsData)
  .flatMap((region) => region.countries)
  .filter((country, index, self) => self.indexOf(country) === index)
  .sort();

/**
 * Find which region(s) a country belongs to
 * @param {string} countryCode - The alpha2 country code
 * @returns {string[]} - Array of region names that contain this country
 */
export function getRegionsForCountry(countryCode) {
  if (!countryCode) return [];

  const regions = [];
  Object.entries(regionsData).forEach(([, regionData]) => {
    if (regionData.countries.includes(countryCode.toUpperCase())) {
      regions.push(regionData.name);
    }
  });

  return regions;
}

/**
 * Get all countries in a specific region by region name
 * @param {string} regionName - The name of the region
 * @returns {string[]|null} - Array of country codes in the region or null if not found
 */
export function getCountriesInRegion(regionName) {
  if (!regionName) return null;

  const region = Object.values(regionsData).find(
    (r) => r.name.toLowerCase() === regionName.toLowerCase()
  );

  return region ? region.countries : null;
}
