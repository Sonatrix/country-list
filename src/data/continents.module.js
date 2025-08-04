import continentsData from './continents.js';

// Export the raw continents data
export default continentsData;

// Export individual continents for selective imports
export const {
  asia,
  africa,
  northAmerica,
  southAmerica,
  antarctica,
  europe,
  oceania
} = continentsData;

// Create a consolidated export for all continents
export const continents = {
  asia,
  africa,
  northAmerica,
  southAmerica,
  antarctica,
  europe,
  oceania
};

// Get all countries from all continents
export const allContinentCountries = Object.values(continentsData)
  .flatMap(continent => continent.countries)
  .filter((country, index, self) => self.indexOf(country) === index)
  .sort();

/**
 * Find which continent a country belongs to
 * @param {string} countryCode - The alpha2 country code
 * @returns {string|null} - The continent name or null if not found
 */
export function getContinentForCountry(countryCode) {
  if (!countryCode) return null;
  
  const continent = Object.values(continentsData).find(cont => 
    cont.countries.includes(countryCode.toUpperCase())
  );
  
  return continent ? continent.name : null;
}

/**
 * Get all countries in a specific continent by continent name
 * @param {string} continentName - The name of the continent
 * @returns {string[]|null} - Array of country codes in the continent or null if not found
 */
export function getCountriesInContinent(continentName) {
  if (!continentName) return null;
  
  const continent = Object.values(continentsData).find(cont => 
    cont.name.toLowerCase() === continentName.toLowerCase()
  );
  
  return continent ? continent.countries : null;
}
