/**
 * Find which region(s) a country belongs to
 * @param {string} countryCode - The alpha2 country code
 * @returns {string[]} - Array of region names that contain this country
 */
export function getRegionsForCountry(countryCode: string): string[];
/**
 * Get all countries in a specific region by region name
 * @param {string} regionName - The name of the region
 * @returns {string[]|null} - Array of country codes in the region or null if not found
 */
export function getCountriesInRegion(regionName: string): string[] | null;
export default regionsData;
export const centralAsia: {
    name: string;
    countries: string[];
};
export const southernAsia: {
    name: string;
    countries: string[];
};
export const southeastAsia: {
    name: string;
    countries: string[];
};
export const eastAsia: {
    name: string;
    countries: string[];
};
export const westernAsia: {
    name: string;
    countries: string[];
};
export const centralAfrica: {
    name: string;
    countries: string[];
};
export const northAfrica: {
    name: string;
    countries: string[];
};
export const southernAfrica: {
    name: string;
    countries: string[];
};
export const eastAfrica: {
    name: string;
    countries: string[];
};
export const westAfrica: {
    name: string;
    countries: string[];
};
export const centralAmerica: {
    name: string;
    countries: string[];
};
export const northernAmerica: {
    name: string;
    countries: string[];
};
export const southAmerica: {
    name: string;
    countries: string[];
};
export const caribbean: {
    name: string;
    countries: string[];
};
export const antartica: {
    name: string;
    countries: string[];
};
export const northernEurope: {
    name: string;
    countries: string[];
};
export const southernEurope: {
    name: string;
    countries: string[];
};
export const easternEurope: {
    name: string;
    countries: string[];
};
export const westernEurope: {
    name: string;
    countries: string[];
};
export const australia: {
    name: string;
    countries: string[];
};
export const melanesia: {
    name: string;
    countries: string[];
};
export const micronesia: {
    name: string;
    countries: string[];
};
export const polynesia: {
    name: string;
    countries: string[];
};
export namespace regions {
    export { centralAsia };
    export { southernAsia };
    export { southeastAsia };
    export { eastAsia };
    export { westernAsia };
    export { centralAfrica };
    export { northAfrica };
    export { southernAfrica };
    export { eastAfrica };
    export { westAfrica };
    export { centralAmerica };
    export { northernAmerica };
    export { southAmerica };
    export { caribbean };
    export { antartica };
    export { northernEurope };
    export { southernEurope };
    export { easternEurope };
    export { westernEurope };
    export { australia };
    export { melanesia };
    export { micronesia };
    export { polynesia };
}
export const allRegionCountries: string[];
import * as regionsData from './regions.js';
//# sourceMappingURL=regions.module.d.ts.map