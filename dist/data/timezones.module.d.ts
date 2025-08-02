/**
 * Get timezones for a specific country by alpha2 code
 * @param {string} countryCode - The alpha2 country code
 * @returns {string[]|null} - Array of timezone strings for that country or null if not found
 */
export function getTimezonesByCountry(countryCode: string): string[] | null;
/**
 * Get all countries that use a specific timezone
 * @param {string} timezone - The timezone to look for (e.g. "Europe/London")
 * @returns {string[]} - Array of country codes that use this timezone
 */
export function getCountriesForTimezone(timezone: string): string[];
/**
 * Get current UTC offset for a timezone
 * @param {string} timezone - Timezone string (e.g. "Europe/London")
 * @returns {string} - UTC offset in format "+HH:MM" or "-HH:MM"
 */
export function getUtcOffset(timezone: string): string;
export default timezoneData;
export const allTimezones: string[];
export namespace timezones {
    export { allTimezones as all };
    export { timezoneData as byCountry };
    export { getTimezonesByCountry };
    export { getCountriesForTimezone };
    export { getUtcOffset };
}
import timezoneData from './timezones.js';
//# sourceMappingURL=timezones.module.d.ts.map