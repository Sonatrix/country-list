import type { Continent } from '../index.js';

declare const continentData: Record<string, Continent>;

export default continentData;
export const asia: Continent;
export const africa: Continent;
export const northAmerica: Continent;
export const southAmerica: Continent;
export const antarctica: Continent;
export const europe: Continent;
export const oceania: Continent;
export const continents: Record<string, Continent>;
export const allContinentCountries: string[];
export function getContinentForCountry(countryCode: string): string | null;
export function getCountriesInContinent(
  continentName: string
): string[] | null;
