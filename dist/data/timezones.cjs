'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var timezoneData = {
  AD: ['Europe/Andorra'],
  AE: ['Asia/Dubai'],
  AF: ['Asia/Kabul'],
  AG: ['America/Antigua'],
  AI: ['America/Anguilla'],
  AL: ['Europe/Tirane'],
  AM: ['Asia/Yerevan'],
  AO: ['Africa/Luanda'],
  AQ: [
    'Antarctica/Casey',
    'Antarctica/Davis',
    'Antarctica/DumontDUrville',
    'Antarctica/Mawson',
    'Antarctica/McMurdo',
    'Antarctica/Palmer',
    'Antarctica/Rothera',
    'Antarctica/Syowa',
    'Antarctica/Troll',
    'Antarctica/Vostok',
  ],
  AR: [
    'America/Argentina/Buenos_Aires',
    'America/Argentina/Catamarca',
    'America/Argentina/Cordoba',
    'America/Argentina/Jujuy',
    'America/Argentina/La_Rioja',
    'America/Argentina/Mendoza',
    'America/Argentina/Rio_Gallegos',
    'America/Argentina/Salta',
    'America/Argentina/San_Juan',
    'America/Argentina/San_Luis',
    'America/Argentina/Tucuman',
    'America/Argentina/Ushuaia',
  ],
  AS: ['Pacific/Pago_Pago'],
  AT: ['Europe/Vienna'],
  AU: [
    'Australia/Adelaide',
    'Australia/Brisbane',
    'Australia/Broken_Hill',
    'Australia/Currie',
    'Australia/Darwin',
    'Australia/Eucla',
    'Australia/Hobart',
    'Australia/Lindeman',
    'Australia/Lord_Howe',
    'Australia/Melbourne',
    'Australia/Perth',
    'Australia/Sydney',
  ],
  AW: ['America/Aruba'],
  AX: ['Europe/Mariehamn'],
  AZ: ['Asia/Baku'],
  BA: ['Europe/Sarajevo'],
  BB: ['America/Barbados'],
  BD: ['Asia/Dhaka'],
  BE: ['Europe/Brussels'],
  BF: ['Africa/Ouagadougou'],
  BG: ['Europe/Sofia'],
  BH: ['Asia/Bahrain'],
  BI: ['Africa/Bujumbura'],
  BJ: ['Africa/Porto-Novo'],
  BL: ['America/St_Barthelemy'],
  BM: ['Atlantic/Bermuda'],
  BN: ['Asia/Brunei'],
  BO: ['America/La_Paz'],
  BQ: ['America/Kralendijk'],
  BR: [
    'America/Araguaina',
    'America/Bahia',
    'America/Belem',
    'America/Boa_Vista',
    'America/Campo_Grande',
    'America/Cuiaba',
    'America/Eirunepe',
    'America/Fortaleza',
    'America/Maceio',
    'America/Manaus',
    'America/Noronha',
    'America/Porto_Velho',
    'America/Recife',
    'America/Rio_Branco',
    'America/Santarem',
    'America/Sao_Paulo',
  ],
  BS: ['America/Nassau'],
  BT: ['Asia/Thimphu'],
  BV: ['Antarctica/Troll'],
  BW: ['Africa/Gaborone'],
  BY: ['Europe/Minsk'],
  BZ: ['America/Belize'],
  CA: [
    'America/Atikokan',
    'America/Cambridge_Bay',
    'America/Creston',
    'America/Dawson',
    'America/Dawson_Creek',
    'America/Edmonton',
    'America/Fort_Nelson',
    'America/Glace_Bay',
    'America/Goose_Bay',
    'America/Halifax',
    'America/Inuvik',
    'America/Iqaluit',
    'America/Moncton',
    'America/Nipigon',
    'America/Pangnirtung',
    'America/Rainy_River',
    'America/Rankin_Inlet',
    'America/Regina',
    'America/Resolute',
    'America/St_Johns',
    'America/Swift_Current',
    'America/Thunder_Bay',
    'America/Toronto',
    'America/Vancouver',
    'America/Whitehorse',
    'America/Winnipeg',
    'America/Yellowknife',
  ],
  CC: ['Indian/Cocos'],
  CD: ['Africa/Kinshasa', 'Africa/Lubumbashi'],
  CF: ['Africa/Bangui'],
  CG: ['Africa/Brazzaville'],
  CH: ['Europe/Zurich'],
  CI: ['Africa/Abidjan'],
  CK: ['Pacific/Rarotonga'],
  CL: ['America/Punta_Arenas', 'America/Santiago', 'Pacific/Easter'],
  CM: ['Africa/Douala'],
  CN: ['Asia/Shanghai', 'Asia/Urumqi'],
  CO: ['America/Bogota'],
  CR: ['America/Costa_Rica'],
  CU: ['America/Havana'],
  CV: ['Atlantic/Cape_Verde'],
  CW: ['America/Curacao'],
  CX: ['Indian/Christmas'],
  CY: ['Asia/Famagusta', 'Asia/Nicosia'],
  CZ: ['Europe/Prague'],
  DE: ['Europe/Berlin', 'Europe/Busingen'],
  DJ: ['Africa/Djibouti'],
  DK: ['Europe/Copenhagen'],
  DM: ['America/Dominica'],
  DO: ['America/Santo_Domingo'],
  DZ: ['Africa/Algiers'],
  EC: ['America/Guayaquil', 'Pacific/Galapagos'],
  EE: ['Europe/Tallinn'],
  EG: ['Africa/Cairo'],
  EH: ['Africa/El_Aaiun'],
  ER: ['Africa/Asmara'],
  ES: ['Africa/Ceuta', 'Atlantic/Canary', 'Europe/Madrid'],
  ET: ['Africa/Addis_Ababa'],
  FI: ['Europe/Helsinki'],
  FJ: ['Pacific/Fiji'],
  FK: ['Atlantic/Stanley'],
  FM: ['Pacific/Chuuk', 'Pacific/Kosrae', 'Pacific/Pohnpei'],
  FO: ['Atlantic/Faroe'],
  FR: ['Europe/Paris'],
  GA: ['Africa/Libreville'],
  GB: ['Europe/London'],
  GD: ['America/Grenada'],
  GE: ['Asia/Tbilisi'],
  GF: ['America/Cayenne'],
  GG: ['Europe/Guernsey'],
  GH: ['Africa/Accra'],
  GI: ['Europe/Gibraltar'],
  GL: [
    'America/Danmarkshavn',
    'America/Nuuk',
    'America/Scoresbysund',
    'America/Thule',
  ],
  GM: ['Africa/Banjul'],
  GN: ['Africa/Conakry'],
  GP: ['America/Guadeloupe'],
  GQ: ['Africa/Malabo'],
  GR: ['Europe/Athens'],
  GS: ['Atlantic/South_Georgia'],
  GT: ['America/Guatemala'],
  GU: ['Pacific/Guam'],
  GW: ['Africa/Bissau'],
  GY: ['America/Guyana'],
  HK: ['Asia/Hong_Kong'],
  HM: ['Indian/Kerguelen'],
  HN: ['America/Tegucigalpa'],
  HR: ['Europe/Zagreb'],
  HT: ['America/Port-au-Prince'],
  HU: ['Europe/Budapest'],
  ID: ['Asia/Jakarta', 'Asia/Jayapura', 'Asia/Makassar', 'Asia/Pontianak'],
  IE: ['Europe/Dublin'],
  IL: ['Asia/Jerusalem'],
  IM: ['Europe/Isle_of_Man'],
  IN: ['Asia/Kolkata'],
  IO: ['Indian/Chagos'],
  IQ: ['Asia/Baghdad'],
  IR: ['Asia/Tehran'],
  IS: ['Atlantic/Reykjavik'],
  IT: ['Europe/Rome'],
  JE: ['Europe/Jersey'],
  JM: ['America/Jamaica'],
  JO: ['Asia/Amman'],
  JP: ['Asia/Tokyo'],
  KE: ['Africa/Nairobi'],
  KG: ['Asia/Bishkek'],
  KH: ['Asia/Phnom_Penh'],
  KI: ['Pacific/Enderbury', 'Pacific/Kiritimati', 'Pacific/Tarawa'],
  KM: ['Indian/Comoro'],
  KN: ['America/St_Kitts'],
  KP: ['Asia/Pyongyang'],
  KR: ['Asia/Seoul'],
  KW: ['Asia/Kuwait'],
  KY: ['America/Cayman'],
  KZ: [
    'Asia/Almaty',
    'Asia/Aqtau',
    'Asia/Aqtobe',
    'Asia/Atyrau',
    'Asia/Oral',
    'Asia/Qostanay',
    'Asia/Qyzylorda',
  ],
  LA: ['Asia/Vientiane'],
  LB: ['Asia/Beirut'],
  LC: ['America/St_Lucia'],
  LI: ['Europe/Vaduz'],
  LK: ['Asia/Colombo'],
  LR: ['Africa/Monrovia'],
  LS: ['Africa/Maseru'],
  LT: ['Europe/Vilnius'],
  LU: ['Europe/Luxembourg'],
  LV: ['Europe/Riga'],
  LY: ['Africa/Tripoli'],
  MA: ['Africa/Casablanca'],
  MC: ['Europe/Monaco'],
  MD: ['Europe/Chisinau'],
  ME: ['Europe/Podgorica'],
  MF: ['America/Marigot'],
  MG: ['Indian/Antananarivo'],
  MH: ['Pacific/Kwajalein', 'Pacific/Majuro'],
  MK: ['Europe/Skopje'],
  ML: ['Africa/Bamako'],
  MM: ['Asia/Yangon'],
  MN: ['Asia/Choibalsan', 'Asia/Hovd', 'Asia/Ulaanbaatar'],
  MO: ['Asia/Macau'],
  MP: ['Pacific/Saipan'],
  MQ: ['America/Martinique'],
  MR: ['Africa/Nouakchott'],
  MS: ['America/Montserrat'],
  MT: ['Europe/Malta'],
  MU: ['Indian/Mauritius'],
  MV: ['Indian/Maldives'],
  MW: ['Africa/Blantyre'],
  MX: [
    'America/Bahia_Banderas',
    'America/Cancun',
    'America/Chihuahua',
    'America/Ciudad_Juarez',
    'America/Hermosillo',
    'America/Matamoros',
    'America/Mazatlan',
    'America/Merida',
    'America/Mexico_City',
    'America/Monterrey',
    'America/Ojinaga',
    'America/Tijuana',
  ],
  MY: ['Asia/Kuala_Lumpur', 'Asia/Kuching'],
  MZ: ['Africa/Maputo'],
  NA: ['Africa/Windhoek'],
  NC: ['Pacific/Noumea'],
  NE: ['Africa/Niamey'],
  NF: ['Pacific/Norfolk'],
  NG: ['Africa/Lagos'],
  NI: ['America/Managua'],
  NL: ['Europe/Amsterdam'],
  NO: ['Europe/Oslo'],
  NP: ['Asia/Kathmandu'],
  NR: ['Pacific/Nauru'],
  NU: ['Pacific/Niue'],
  NZ: ['Pacific/Auckland', 'Pacific/Chatham'],
  OM: ['Asia/Muscat'],
  PA: ['America/Panama'],
  PE: ['America/Lima'],
  PF: ['Pacific/Gambier', 'Pacific/Marquesas', 'Pacific/Tahiti'],
  PG: ['Pacific/Bougainville', 'Pacific/Port_Moresby'],
  PH: ['Asia/Manila'],
  PK: ['Asia/Karachi'],
  PL: ['Europe/Warsaw'],
  PM: ['America/Miquelon'],
  PN: ['Pacific/Pitcairn'],
  PR: ['America/Puerto_Rico'],
  PS: ['Asia/Gaza', 'Asia/Hebron'],
  PT: ['Atlantic/Azores', 'Atlantic/Madeira', 'Europe/Lisbon'],
  PW: ['Pacific/Palau'],
  PY: ['America/Asuncion'],
  QA: ['Asia/Qatar'],
  RE: ['Indian/Reunion'],
  RO: ['Europe/Bucharest'],
  RS: ['Europe/Belgrade'],
  RU: [
    'Asia/Anadyr',
    'Asia/Barnaul',
    'Asia/Chita',
    'Asia/Irkutsk',
    'Asia/Kamchatka',
    'Asia/Khandyga',
    'Asia/Krasnoyarsk',
    'Asia/Magadan',
    'Asia/Novokuznetsk',
    'Asia/Novosibirsk',
    'Asia/Omsk',
    'Asia/Sakhalin',
    'Asia/Srednekolymsk',
    'Asia/Tomsk',
    'Asia/Ust-Nera',
    'Asia/Vladivostok',
    'Asia/Yakutsk',
    'Asia/Yekaterinburg',
    'Europe/Astrakhan',
    'Europe/Kaliningrad',
    'Europe/Kirov',
    'Europe/Moscow',
    'Europe/Samara',
    'Europe/Saratov',
    'Europe/Ulyanovsk',
    'Europe/Volgograd',
  ],
  RW: ['Africa/Kigali'],
  SA: ['Asia/Riyadh'],
  SB: ['Pacific/Guadalcanal'],
  SC: ['Indian/Mahe'],
  SD: ['Africa/Khartoum'],
  SE: ['Europe/Stockholm'],
  SG: ['Asia/Singapore'],
  SH: ['Atlantic/St_Helena'],
  SI: ['Europe/Ljubljana'],
  SJ: ['Arctic/Longyearbyen'],
  SK: ['Europe/Bratislava'],
  SL: ['Africa/Freetown'],
  SM: ['Europe/San_Marino'],
  SN: ['Africa/Dakar'],
  SO: ['Africa/Mogadishu'],
  SR: ['America/Paramaribo'],
  SS: ['Africa/Juba'],
  ST: ['Africa/Sao_Tome'],
  SV: ['America/El_Salvador'],
  SX: ['America/Lower_Princes'],
  SY: ['Asia/Damascus'],
  SZ: ['Africa/Mbabane'],
  TC: ['America/Grand_Turk'],
  TD: ['Africa/Ndjamena'],
  TF: ['Indian/Kerguelen'],
  TG: ['Africa/Lome'],
  TH: ['Asia/Bangkok'],
  TJ: ['Asia/Dushanbe'],
  TK: ['Pacific/Fakaofo'],
  TL: ['Asia/Dili'],
  TM: ['Asia/Ashgabat'],
  TN: ['Africa/Tunis'],
  TO: ['Pacific/Tongatapu'],
  TR: ['Europe/Istanbul'],
  TT: ['America/Port_of_Spain'],
  TV: ['Pacific/Funafuti'],
  TW: ['Asia/Taipei'],
  TZ: ['Africa/Dar_es_Salaam'],
  UA: [
    'Europe/Kiev',
    'Europe/Simferopol',
    'Europe/Uzhgorod',
    'Europe/Zaporozhye',
  ],
  UG: ['Africa/Kampala'],
  UM: ['Pacific/Midway', 'Pacific/Wake'],
  US: [
    'America/Adak',
    'America/Anchorage',
    'America/Boise',
    'America/Chicago',
    'America/Denver',
    'America/Detroit',
    'America/Indiana/Indianapolis',
    'America/Indiana/Knox',
    'America/Indiana/Marengo',
    'America/Indiana/Petersburg',
    'America/Indiana/Tell_City',
    'America/Indiana/Vevay',
    'America/Indiana/Vincennes',
    'America/Indiana/Winamac',
    'America/Juneau',
    'America/Kentucky/Louisville',
    'America/Kentucky/Monticello',
    'America/Los_Angeles',
    'America/Menominee',
    'America/Metlakatla',
    'America/New_York',
    'America/Nome',
    'America/North_Dakota/Beulah',
    'America/North_Dakota/Center',
    'America/North_Dakota/New_Salem',
    'America/Phoenix',
    'America/Sitka',
    'America/Yakutat',
    'Pacific/Honolulu',
  ],
  UY: ['America/Montevideo'],
  UZ: ['Asia/Samarkand', 'Asia/Tashkent'],
  VA: ['Europe/Vatican'],
  VC: ['America/St_Vincent'],
  VE: ['America/Caracas'],
  VG: ['America/Tortola'],
  VI: ['America/St_Thomas'],
  VN: ['Asia/Ho_Chi_Minh'],
  VU: ['Pacific/Efate'],
  WF: ['Pacific/Wallis'],
  WS: ['Pacific/Apia'],
  YE: ['Asia/Aden'],
  YT: ['Indian/Mayotte'],
  ZA: ['Africa/Johannesburg'],
  ZM: ['Africa/Lusaka'],
  ZW: ['Africa/Harare'],
};

// Create a flattened array of all timezones
const allTimezones = Object.values(timezoneData)
  .flat()
  .filter((tz, index, self) => self.indexOf(tz) === index)
  .sort();

/**
 * Get timezones for a specific country by alpha2 code
 * @param {string} countryCode - The alpha2 country code
 * @returns {string[]|null} - Array of timezone strings for that country or null if not found
 */
function getTimezonesByCountry(countryCode) {
  if (!countryCode) return null;
  return timezoneData[countryCode.toUpperCase()] || null;
}

/**
 * Get all countries that use a specific timezone
 * @param {string} timezone - The timezone to look for (e.g. "Europe/London")
 * @returns {string[]} - Array of country codes that use this timezone
 */
function getCountriesForTimezone(timezone) {
  if (!timezone) return [];
  return Object.entries(timezoneData)
    .filter(([, timezones]) => timezones.includes(timezone))
    .map(([countryCode]) => countryCode);
}

/**
 * Get current UTC offset for a timezone
 * Europe/London (winter) → +00:00
 * Europe/London (summer) → +01:00
 *
 * Asia/Kolkata → +05:30
 *
 * Invalid timezone → null
 * Use timeZoneName: 'shortOffset' (supported in modern browsers and Node)
 * @param {string} timezone - Timezone string (e.g. "Europe/London")
 * @returns {string} - UTC offset in format "+HH:MM" or "-HH:MM"
 */
function getUtcOffsetV2(timezone) {
  if (!timezone) return null;

  try {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      timeZoneName: 'shortOffset',
    }).formatToParts(new Date());

    const tzValue = parts.find((p) => p.type === 'timeZoneName')?.value;
    if (!tzValue) return null;

    // Case 1: Exact UTC
    if (tzValue === 'GMT') {
      return '+00:00';
    }

    // Case 2: GMT+H or GMT+HH or GMT+HH:MM
    const match = tzValue.match(/^GMT([+-]\d{1,2})(?::(\d{2}))?$/);
    if (!match) return null;

    const sign = match[1][0];
    const hours = match[1].slice(1).padStart(2, '0');
    const minutes = match[2] ?? '00';

    return `${sign}${hours}:${minutes}`;
  } catch {
    return null;
  }
}

/**
 * Get current UTC offset for a timezone
 * @param {string} timezone - Timezone string (e.g. "Europe/London")
 * @returns {string} - UTC offset in format "+HH:MM" or "-HH:MM"
 */
function getUtcOffset(timezone) {
  if (!timezone) return null;
  try {
    const date = new Date();
    const options = { timeZone: timezone, timeZoneName: 'short' };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(
      date
    );
    const matches = formattedDate.match(/GMT([+-]\d{1,2}(?::\d{2})?)/);
    return matches ? matches[1] : null;
  } catch {
    // Handle cases where Intl API might not support the timezone
    // Silently return null without logging errors
    return null;
  }
}

// Collect all data for export
const timezones = {
  all: allTimezones,
  byCountry: timezoneData,
  getTimezonesByCountry,
  getCountriesForTimezone,
  getUtcOffset,
  getUtcOffsetV2,
};

exports.allTimezones = allTimezones;
exports.default = timezoneData;
exports.getCountriesForTimezone = getCountriesForTimezone;
exports.getTimezonesByCountry = getTimezonesByCountry;
exports.getUtcOffset = getUtcOffset;
exports.getUtcOffsetV2 = getUtcOffsetV2;
exports.timezones = timezones;
