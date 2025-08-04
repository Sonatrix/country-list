export interface Region {
  name: string;
  countries: string[];
}

export interface RegionsData {
  centralAsia: Region;
  southernAsia: Region;
  southeastAsia: Region;
  eastAsia: Region;
  westernAsia: Region;
  centralAfrica: Region;
  northAfrica: Region;
  southernAfrica: Region;
  eastAfrica: Region;
  westAfrica: Region;
  centralAmerica: Region;
  northernAmerica: Region;
  southAmerica: Region;
  caribbean: Region;
  antartica: Region;
  northernEurope: Region;
  southernEurope: Region;
  easternEurope: Region;
  westernEurope: Region;
  australia: Region;
  melanesia: Region;
  micronesia: Region;
  polynesia: Region;
}

export const centralAsia: Region;
export const southernAsia: Region;
export const southeastAsia: Region;
export const eastAsia: Region;
export const westernAsia: Region;
export const centralAfrica: Region;
export const northAfrica: Region;
export const southernAfrica: Region;
export const eastAfrica: Region;
export const westAfrica: Region;
export const centralAmerica: Region;
export const northernAmerica: Region;
export const southAmerica: Region;
export const caribbean: Region;
export const antartica: Region;
export const northernEurope: Region;
export const southernEurope: Region;
export const easternEurope: Region;
export const westernEurope: Region;
export const australia: Region;
export const melanesia: Region;
export const micronesia: Region;
export const polynesia: Region;

export const regions: RegionsData;
export const allRegionCountries: string[];

export function getRegionsForCountry(countryCode: string): string[];
export function getCountriesInRegion(regionName: string): string[] | null;

declare const regionsModule: RegionsData;
export default regionsModule;
