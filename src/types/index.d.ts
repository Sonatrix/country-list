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
