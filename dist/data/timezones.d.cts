import type { TimezoneData, TimezoneInterface } from '../index.cjs';

declare const timezoneData: TimezoneData;

export default timezoneData;
export const allTimezones: string[];
export function getTimezonesByCountry(countryCode: string): string[] | null;
export function getCountriesForTimezone(timezone: string): string[];
export function getUtcOffsetV2(timezone: string): string | null;
export function getUtcOffset(timezone: string): string | null;
export const timezones: TimezoneInterface;
