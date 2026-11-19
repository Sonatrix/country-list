'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const centralAsia$1 = {
  name: 'Central Asia',
  countries: [
    // source is http://en.wikipedia.org/wiki/Central_Asia
    'KZ', // Kazakhstan
    'KG', // Kyrgyzstan
    'TJ', // Tajikistan
    'TM', // Turkmenistan
    'UZ', // Uzbekistan
  ],
};

const southernAsia$1 = {
  name: 'Southern Asia',
  countries: [
    // source is http://en.wikipedia.org/wiki/South_Asia
    'AF', // Afghanistan
    'BD', // Bangladesh
    'BT', // Bhutan
    'IO', // British Indian Ocean Territory
    'IN', // India
    'IR', // Iran
    'MV', // Maldives
    'NP', // Nepal
    'PK', // Pakistan
    'LK', // Sri Lanka
  ],
};

const southeastAsia$1 = {
  name: 'Southeast Asia',
  countries: [
    // source is http://en.wikipedia.org/wiki/Southeast_Asia
    'BN', // Brunei
    'KH', // Cambodia
    'CX', // Christmas Island
    'CC', // Cocos (Keeling) Islands
    'TL', // East Timor
    'ID', // Indonesia
    'LA', // Laos
    'MY', // Malaysia
    'MM', // Myanmar (Burma)
    'PH', // Philippines
    'SG', // Singapore
    'TH', // Thailand
    'VN', // Vietnam
  ],
};

const eastAsia$1 = {
  name: 'East Asia',
  countries: [
    // source is http://en.wikipedia.org/wiki/East_Asia
    'CN', // China
    'HK', // Hong Kong
    'JP', // Japan
    'KP', // North Korea
    'KR', // South Korea
    'MO', // Macao
    'MN', // Mongolia
    'TW', // Taiwan
  ],
};

const westernAsia$1 = {
  name: 'Western Asia',
  countries: [
    // source is http://en.wikipedia.org/wiki/Western_Asia
    'AM', // Armenia
    'AZ', // Azerbaijan
    'BH', // Bahrain
    'IQ', // Iraq
    'IL', // Israel
    'JO', // Jordan
    'KW', // Kuwait
    'LB', // Lebanon
    'OM', // Oman
    'PS', // Palestinian territories
    'QA', // Qatar
    'SA', // Saudi Arabia
    'SY', // Syria
    'TR', // Turkey
    'AE', // United Arab Emirates
    'YE', // Yemen
  ],
};

const centralAfrica$1 = {
  name: 'Central Aftrica',
  countries: [
    // source is http://en.wikipedia.org/wiki/Central_Africa
    'AO', // Angola
    'CM', // Cameroon
    'CF', // Central African Republic
    'TD', // Chad
    'CG', // Republic of the Congo
    'CD', // Democratic Republic of the Congo
    'GQ', // Equatorial Guinea
    'GA', // Gabon
    'ST', // São Tomé and Príncipe
  ],
};

const northAfrica$1 = {
  name: 'North Africa',
  countries: [
    // source is http://en.wikipedia.org/wiki/North_Africa
    'DZ', // Algeria
    'EG', // Egypt
    'LY', // Libya
    'MA', // Morocco
    'SD', // Sudan
    'TN', // Tunisia
    'EH', // Western Sahara
  ],
};

const southernAfrica$1 = {
  name: 'Southern Africa',
  countries: [
    // source is http://en.wikipedia.org/wiki/Southern_Africa
    'BW', // Botswana
    'LS', // Lesotho
    'NA', // Namibia
    'ZA', // South Africa
    'SZ', // Swaziland
  ],
};

const eastAfrica$1 = {
  name: 'East Africa',
  countries: [
    // source is http://en.wikipedia.org/wiki/East_Africa
    'BI', // Burundi
    'KM', // Comoros
    'DJ', // Djibouti
    'ER', // Eritrea
    'ET', // Ethiopia
    'KE', // Kenya
    'MG', // Madagascar
    'MW', // Malawi
    'MU', // Mauritius
    'YT', // Mayotte (France)
    'MZ', // Mozambique
    'RE', // Réunion (France)
    'RW', // Rwanda
    'SC', // Seychelles
    'SO', // Somalia
    'SS', // South Sudan
    'TZ', // Tanzania
    'UG', // Uganda
    'ZM', // Zambia
    'ZW', // Zimbabwe
  ],
};

const westAfrica$1 = {
  name: 'West Africa',
  countries: [
    // source is http://en.wikipedia.org/wiki/West_Africa
    'BJ', // Benin
    'BF', // Burkina Faso
    'CV', // Cabo Verde
    'CI', // Côte d'Ivoire
    'GM', // Gambia
    'GH', // Ghana
    'GN', // Guinea
    'GW', // Guinea-Bissau
    'LR', // Liberia
    'ML', // Mali
    'MR', // Mauritania
    'NE', // Niger
    'NG', // Nigeria
    'SH', // Saint Helena, Ascension and Tristan da Cunha (United Kingdom)
    'SN', // Senegal
    'SL', // Sierra Leone
    'TG', // Togo
  ],
};

const centralAmerica$1 = {
  name: 'Central America',
  countries: [
    // source is http://en.wikipedia.org/wiki/Central_America
    'BZ', // Belize
    'CR', // Costa Rica
    'SV', // El Salvador
    'GT', // Guatemala
    'HN', // Honduras
    'NI', // Nicaragua
    'PA', // Panama
  ],
};

const northernAmerica$1 = {
  name: 'Northern America',
  countries: [
    // source is http://en.wikipedia.org/wiki/Northern_America
    'BM', // Bermuda
    'CA', // Canada
    'GL', // Greenland
    'MX', // Mexico
    'PM', // Saint Pierre and Miquelon
    'US', // United States
  ],
};

const caribbean$1 = {
  name: 'Caribbean',
  countries: [
    // source is http://en.wikipedia.org/wiki/Caribbean
    'AI', // Anguilla
    'AG', // Antigua and Barbuda
    'AW', // Aruba
    'BS', // Bahamas
    'BB', // Barbados
    'BQ', // Bonaire, Sint Eustatius & Saba
    'VG', // British Virgin Islands
    'KY', // Cayman Islands
    'CU', // Cuba
    'CW', // Curaçao
    'DM', // Dominica
    'DO', // Dominican Republic
    'GD', // Grenada
    'GP', // Guadeloupe
    'HT', // Haiti
    'JM', // Jamaica
    'MQ', // Martinique
    'MS', // Montserrat
    'PR', // Puerto Rico
    'BL', // Saint Barthélemy
    'KN', // St. Kitts & Nevis
    'LC', // Saint Lucia
    'MF', // Saint Martin
    'VC', // Saint Vincent and the Grenadines
    'SX', // Sint Maarten
    'TT', // Trinidad and Tobago
    'TC', // Turks & Caicos
    'VI', // United States Virgin Islands
  ],
};

const southAmerica$1 = {
  name: 'South America',
  countries: [
    // source is http://en.wikipedia.org/wiki/South_America
    'AR', // Argentina
    'BO', // Bolivia
    'BR', // Brazil
    'CL', // Chile
    'CO', // Colombia
    'EC', // Ecuador
    'FK', // Falkland Islands
    'GF', // French Guiana
    'GY', // Guyana
    'PY', // Paraguay
    'PE', // Peru
    'SR', // Suriname
    'UY', // Uruguay
    'VE', // Venezuela
  ],
};

const antartica$1 = {
  name: 'Antartica',
  countries: [
    // source is http://en.wikipedia.org/wiki/Antarctica
    'AQ', // Antarctica
    'BV', // Bouvet Island
    'TF', // French Southern Territories
    'HM', // Heard Island and McDonald Islands
    'GS', // South Georgia and the South Sandwich Islands
  ],
};

const northernEurope$1 = {
  name: 'Northern Europe',
  countries: [
    // source is http://en.wikipedia.org/wiki/Northern_Europe
    'AX', // Åland
    'DK', // Denmark
    'EE', // Estonia
    'FO', // Faroe Islands
    'FI', // Finland
    'GG', // Guernsey
    'IS', // Iceland
    'IE', // Republic of Ireland
    'JE', // Jersey (UK)
    'IM', // Isle of Man
    'LV', // Latvia
    'LT', // Lithuania
    'NO', // Norway
    'SJ', // Svalbard and Jan Mayen
    'SE', // Sweden
    'GB', // United Kingdom
  ],
};

const southernEurope$1 = {
  name: 'Southern Europe',
  countries: [
    // source is http://en.wikipedia.org/wiki/Southern_Europe
    'AL', // Albania
    'AD', // Andorra
    'BA', // Bosnia and Herzegovina
    'HR', // Croatia
    'CY', // Cyprus
    'GI', // Gibraltar
    'GR', // Greece
    'IT', // Italy
    'MK', // Republic of Macedonia
    'VA', // Vatican City
    'MT', // Malta
    'ME', // Montenegro
    'PT', // Portugal
    'SM', // San Marino
    'RS', // Serbia
    'SI', // Slovenia
    'ES', // Spain
  ],
};

const easternEurope$1 = {
  name: 'Eastern Europe',
  countries: [
    // source is http://en.wikipedia.org/wiki/Eastern_Europe
    'BY', // Belarus
    'BG', // Bulgaria
    'CZ', // Czech Republic
    'GE', // Georgia
    'HU', // Hungary
    'MD', // Moldova
    'PL', // Poland
    'RO', // Romania
    'RU', // Russia
    'SK', // Slovakia
    'UA', // Ukraine
  ],
};

const westernEurope$1 = {
  name: 'Western Europe',
  countries: [
    // source is http://en.wikipedia.org/wiki/Western_Europe
    'AT', // Austria
    'BE', // Belgium
    'FR', // France
    'DE', // Germany
    'LI', // Liechtenstein
    'LU', // Luxembourg
    'MC', // Monaco
    'NL', // Netherlands
    'CH', // Switzerland
  ],
};

const australia$1 = {
  name: 'Australia',
  countries: [
    // source is http://en.wikipedia.org/wiki/Oceania
    'AU', // Australia
    'NF', // Norfolk Island
  ],
};

const melanesia$1 = {
  name: 'Melanesia',
  countries: [
    // source is http://en.wikipedia.org/wiki/Oceania
    'FJ', // Fiji
    'NC', //  New Caledonia
    'PG', // Papua New Guinea
    'SB', // Solomon Islands
    'VU', // Vanuatu
  ],
};

const micronesia$1 = {
  name: 'Micronesia',
  countries: [
    // source is http://en.wikipedia.org/wiki/Oceania
    'GU', // Guam
    'KI', // Kiribati
    'MH', // Marshall Islands
    'FM', // Micronesia, Fed. Sts.
    'NR', // Nauru
    'MP', // Northern Mariana Islands
    'PW', // Palau
    'UM', // United States Minor Outlying Islands
  ],
};

const polynesia$1 = {
  name: 'Polynesia',
  countries: [
    // source is http://en.wikipedia.org/wiki/Oceania
    'AS', // American Samoa
    'CK', // Cook Islands
    'PF', // French Polynesia
    'NU', // Niue
    'PN', // Pitcairn Islands
    'WS', // Samoa
    'TK', // Tokelau
    'TO', // Tonga
    'TV', // Tuvalu
    'WF', // Wallis and Futuna
    'NZ', // New Zealand https://worldpopulationreview.com/country-rankings/polynesian-countries
  ],
};

var regionsData = /*#__PURE__*/Object.freeze({
  __proto__: null,
  antartica: antartica$1,
  australia: australia$1,
  caribbean: caribbean$1,
  centralAfrica: centralAfrica$1,
  centralAmerica: centralAmerica$1,
  centralAsia: centralAsia$1,
  eastAfrica: eastAfrica$1,
  eastAsia: eastAsia$1,
  easternEurope: easternEurope$1,
  melanesia: melanesia$1,
  micronesia: micronesia$1,
  northAfrica: northAfrica$1,
  northernAmerica: northernAmerica$1,
  northernEurope: northernEurope$1,
  polynesia: polynesia$1,
  southAmerica: southAmerica$1,
  southeastAsia: southeastAsia$1,
  southernAfrica: southernAfrica$1,
  southernAsia: southernAsia$1,
  southernEurope: southernEurope$1,
  westAfrica: westAfrica$1,
  westernAsia: westernAsia$1,
  westernEurope: westernEurope$1
});

// Export individual regions for selective imports
const {
  centralAsia,
  southernAsia,
  southeastAsia,
  eastAsia,
  westernAsia,
  centralAfrica,
  northAfrica,
  southernAfrica,
  eastAfrica,
  westAfrica,
  centralAmerica,
  northernAmerica,
  southAmerica,
  caribbean,
  antartica,
  northernEurope,
  southernEurope,
  easternEurope,
  westernEurope,
  australia,
  melanesia,
  micronesia,
  polynesia,
} = regionsData;

// Create a consolidated export for all regions
const regions = {
  centralAsia,
  southernAsia,
  southeastAsia,
  eastAsia,
  westernAsia,
  centralAfrica,
  northAfrica,
  southernAfrica,
  eastAfrica,
  westAfrica,
  centralAmerica,
  northernAmerica,
  southAmerica,
  caribbean,
  antartica,
  northernEurope,
  southernEurope,
  easternEurope,
  westernEurope,
  australia,
  melanesia,
  micronesia,
  polynesia,
};

// Get all countries from all regions
const allRegionCountries = Object.values(regionsData)
  .flatMap((region) => region.countries)
  .filter((country, index, self) => self.indexOf(country) === index)
  .sort();

/**
 * Find which region(s) a country belongs to
 * @param {string} countryCode - The alpha2 country code
 * @returns {string[]} - Array of region names that contain this country
 */
function getRegionsForCountry(countryCode) {
  if (!countryCode) return [];

  const regions = [];
  Object.entries(regionsData).forEach(([, regionData]) => {
    if (regionData.countries.includes(countryCode.toUpperCase())) {
      regions.push(regionData.name);
    }
  });

  return regions;
}

/**
 * Get all countries in a specific region by region name
 * @param {string} regionName - The name of the region
 * @returns {string[]|null} - Array of country codes in the region or null if not found
 */
function getCountriesInRegion(regionName) {
  if (!regionName) return null;

  const region = Object.values(regionsData).find(
    (r) => r.name.toLowerCase() === regionName.toLowerCase()
  );

  return region ? region.countries : null;
}

exports.allRegionCountries = allRegionCountries;
exports.antartica = antartica;
exports.australia = australia;
exports.caribbean = caribbean;
exports.centralAfrica = centralAfrica;
exports.centralAmerica = centralAmerica;
exports.centralAsia = centralAsia;
exports.default = regionsData;
exports.eastAfrica = eastAfrica;
exports.eastAsia = eastAsia;
exports.easternEurope = easternEurope;
exports.getCountriesInRegion = getCountriesInRegion;
exports.getRegionsForCountry = getRegionsForCountry;
exports.melanesia = melanesia;
exports.micronesia = micronesia;
exports.northAfrica = northAfrica;
exports.northernAmerica = northernAmerica;
exports.northernEurope = northernEurope;
exports.polynesia = polynesia;
exports.regions = regions;
exports.southAmerica = southAmerica;
exports.southeastAsia = southeastAsia;
exports.southernAfrica = southernAfrica;
exports.southernAsia = southernAsia;
exports.southernEurope = southernEurope;
exports.westAfrica = westAfrica;
exports.westernAsia = westernAsia;
exports.westernEurope = westernEurope;
