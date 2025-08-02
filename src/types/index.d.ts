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

export interface Currency {
  code: string;
  decimals: number;
  name: string;
  number: string;
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
}

export interface Lookup {
  countries(query: string): Country[];
  currencies(query: string): Currency[];
  languages(query: string): Language[];
}

export interface CallingCountry extends Country {
  countryCallingCodes: string[];
}

export interface CurrencySymbolMap {
  [currencyCode: string]: string;
}

export const continents: { [continent: string]: string[] };
export const regions: { [region: string]: string[] };
export const countries: { all: Country[] };
export const currencies: { all: Currency[] };
export const languages: { all: Language[] };
export const timezones: TimezoneInterface;
export const lookup: Lookup;
export const callingCountries: { all: CallingCountry[] };
export const callingCodes: { all: string[] };
export const currencySymbolMap: CurrencySymbolMap;

export function getSymbolFromCurrency(currencyCode: string): string;
export function getNameFromCurrency(currencyCode: string): string;
export function getSafeSymbolFromCurrency(currencyCode: string): string;
export function getSafeNameFromCurrency(currencyCode: string): string;
