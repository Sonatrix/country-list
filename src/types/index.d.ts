export interface Country {
  alpha2: string;
  alpha3: string;
  countryCallingCodes?: string[];
  currencies: string[];
  emoji?: string;
  ioc?: string;
  languages: string[];
  name: string;
  status?: string;
}

export interface Continent {
  name: string;
  regions: string[];
  countries: string[];
}

export interface Region {
  name: string;
  countries: string[];
}

export interface Currency {
  code: string;
  decimals: number;
  name: string;
  number: string | number;
  symbol?: string;
}

export interface Language {
  alpha2: string;
  alpha3: string;
  bibliographic: string;
  name: string;
}

export interface TimezoneData {
  [countryCode: string]: string[];
}

export interface TimezoneInterface {
  all: string[];
  byCountry: TimezoneData;
  getTimezonesByCountry: (countryCode: string) => string[] | null;
  getCountriesForTimezone: (timezone: string) => string[];
  getUtcOffset: (timezone: string) => string | null;
  getUtcOffsetV2: (timezone: string) => string | null;
}

export interface Lookup {
  countries(query: string | Partial<Country>): Country[];
  currencies(query: string | Partial<Currency>): Currency[];
  languages(query: string | Partial<Language>): Language[];
}

export interface CallingCountry extends Country {
  countryCallingCodes: string[];
}

export interface CurrencySymbol {
  symbol: string;
  name: string;
  code: string;
  number: string;
}

export type CurrencySymbolMap = CurrencySymbol[];

export interface Regions {
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

export const continents: Record<string, Continent>;
export const regions: Regions;
export const countries: { all: Country[]; [code: string]: Country | Country[] };
export const currencies: {
  all: Currency[];
  [code: string]: Currency | Currency[];
};
export const languages: {
  all: Language[];
  [code: string]: Language | Language[];
};
export const timezones: TimezoneInterface;
export const lookup: Lookup;
export const callingCountries: {
  all: CallingCountry[];
  [code: string]: CallingCountry | CallingCountry[];
};
export const callingCodes: { all: string[] };
export const currencySymbolMap: CurrencySymbolMap;

export function getSymbolFromCurrency(currencyCode: string): string;
export function getNameFromCurrency(currencyCode: string): string;
export function getSafeSymbolFromCurrency(currencyCode: string): string;
export function getSafeNameFromCurrency(currencyCode: string): string;
