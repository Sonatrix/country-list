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

declare const timezones: TimezoneInterface;
export default timezones;
