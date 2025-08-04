/**
 * Find which continent a country belongs to
 * @param {string} countryCode - The alpha2 country code
 * @returns {string|null} - The continent name or null if not found
 */
export function getContinentForCountry(countryCode: string): string | null;
/**
 * Get all countries in a specific continent by continent name
 * @param {string} continentName - The name of the continent
 * @returns {string[]|null} - Array of country codes in the continent or null if not found
 */
export function getCountriesInContinent(continentName: string): string[] | null;
export default continentsData;
export const asia: {
    name: string;
    regions: string[];
    countries: string[];
};
export const africa: {
    name: string;
    regions: string[];
    countries: string[];
};
export const northAmerica: {
    name: string;
    regions: string[];
    countries: string[];
};
export const southAmerica: {
    name: string;
    regions: string[];
    countries: string[];
};
export const antarctica: any;
export const europe: {
    name: string;
    regions: string[];
    countries: string[];
};
export const oceania: {
    name: string;
    regions: string[];
    countries: string[];
};
export namespace continents {
    export { asia };
    export { africa };
    export { northAmerica };
    export { southAmerica };
    export { antarctica };
    export { europe };
    export { oceania };
}
export const allContinentCountries: string[];
import continentsData from './continents.js';
//# sourceMappingURL=continents.module.d.ts.map