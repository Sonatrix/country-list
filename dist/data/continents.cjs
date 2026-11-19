'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const centralAsia = {
  countries: [
    // source is http://en.wikipedia.org/wiki/Central_Asia
    'KZ', // Kazakhstan
    'KG', // Kyrgyzstan
    'TJ', // Tajikistan
    'TM', // Turkmenistan
    'UZ', // Uzbekistan
  ],
};

const southernAsia = {
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

const southeastAsia = {
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

const eastAsia = {
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

const westernAsia = {
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

const centralAfrica = {
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

const northAfrica = {
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

const southernAfrica = {
  countries: [
    // source is http://en.wikipedia.org/wiki/Southern_Africa
    'BW', // Botswana
    'LS', // Lesotho
    'NA', // Namibia
    'ZA', // South Africa
    'SZ', // Swaziland
  ],
};

const eastAfrica = {
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

const westAfrica = {
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

const centralAmerica = {
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

const northernAmerica = {
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

const caribbean = {
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

const southAmerica$2 = {
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
  countries: [
    // source is http://en.wikipedia.org/wiki/Antarctica
    'AQ', // Antarctica
    'BV', // Bouvet Island
    'TF', // French Southern Territories
    'HM', // Heard Island and McDonald Islands
    'GS', // South Georgia and the South Sandwich Islands
  ],
};

const northernEurope = {
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

const southernEurope = {
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

const easternEurope = {
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

const westernEurope = {
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

const australia = {
  countries: [
    // source is http://en.wikipedia.org/wiki/Oceania
    'AU', // Australia
    'NF', // Norfolk Island
  ],
};

const melanesia = {
  countries: [
    // source is http://en.wikipedia.org/wiki/Oceania
    'FJ', // Fiji
    'NC', //  New Caledonia
    'PG', // Papua New Guinea
    'SB', // Solomon Islands
    'VU', // Vanuatu
  ],
};

const micronesia = {
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

const polynesia = {
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

const asia$1 = {
  name: 'Asia',
  regions: [
    'centralAsia',
    'southernAsia',
    'southeastAsia',
    'eastAsia',
    'westernAsia',
  ],
  countries: [
    centralAsia.countries,
    southernAsia.countries,
    southeastAsia.countries,
    eastAsia.countries,
    westernAsia.countries,
  ]
    .reduce((a, b) => a.concat(b), [])
    .sort(),
};

const africa$1 = {
  name: 'Africa',
  regions: [
    'centralAfrica',
    'northAfrica',
    'southernAfrica',
    'eastAfrica',
    'westAfrica',
  ],
  countries: [
    centralAfrica.countries,
    northAfrica.countries,
    southernAfrica.countries,
    eastAfrica.countries,
    westAfrica.countries,
  ]
    .reduce((a, b) => a.concat(b), [])
    .sort(),
};

const northAmerica$1 = {
  name: 'North America',
  regions: ['centralAmerica', 'northernAmerica', 'caribbean'],
  countries: [
    centralAmerica.countries,
    northernAmerica.countries,
    caribbean.countries,
  ]
    .reduce((a, b) => a.concat(b), [])
    .sort(),
};

const southAmerica$1 = {
  name: 'South America',
  regions: ['southAmerica'],
  countries: [southAmerica$2.countries]
    .reduce((a, b) => a.concat(b), [])
    .sort(),
};

const antartica = {
  name: 'Antartica',
  regions: ['antartica'],
  countries: [antartica$1.countries]
    .reduce((a, b) => a.concat(b), [])
    .sort(),
};

const europe$1 = {
  name: 'Europe',
  regions: [
    'northernEurope',
    'southernEurope',
    'easternEurope',
    'westernEurope',
  ],
  countries: [
    northernEurope.countries,
    southernEurope.countries,
    easternEurope.countries,
    westernEurope.countries,
  ]
    .reduce((a, b) => a.concat(b), [])
    .sort(),
};

const oceania$1 = {
  name: 'Oceania',
  regions: ['australia', 'melanesia', 'micronesia', 'polynesia'],
  countries: [
    australia.countries,
    melanesia.countries,
    micronesia.countries,
    polynesia.countries,
  ]
    .reduce((a, b) => a.concat(b), [])
    .sort(),
};

var continentsData = {
  asia: asia$1,
  africa: africa$1,
  northAmerica: northAmerica$1,
  southAmerica: southAmerica$1,
  antartica,
  europe: europe$1,
  oceania: oceania$1,
};

// Export individual continents for selective imports
const {
  asia,
  africa,
  northAmerica,
  southAmerica,
  antarctica,
  europe,
  oceania,
} = continentsData;

// Create a consolidated export for all continents
const continents = {
  asia,
  africa,
  northAmerica,
  southAmerica,
  antarctica,
  europe,
  oceania,
};

// Get all countries from all continents
const allContinentCountries = Object.values(continentsData)
  .flatMap((continent) => continent.countries)
  .filter((country, index, self) => self.indexOf(country) === index)
  .sort();

/**
 * Find which continent a country belongs to
 * @param {string} countryCode - The alpha2 country code
 * @returns {string|null} - The continent name or null if not found
 */
function getContinentForCountry(countryCode) {
  if (!countryCode) return null;

  const continent = Object.values(continentsData).find((cont) =>
    cont.countries.includes(countryCode.toUpperCase())
  );

  return continent ? continent.name : null;
}

/**
 * Get all countries in a specific continent by continent name
 * @param {string} continentName - The name of the continent
 * @returns {string[]|null} - Array of country codes in the continent or null if not found
 */
function getCountriesInContinent(continentName) {
  if (!continentName) return null;

  const continent = Object.values(continentsData).find(
    (cont) => cont.name.toLowerCase() === continentName.toLowerCase()
  );

  return continent ? continent.countries : null;
}

exports.africa = africa;
exports.allContinentCountries = allContinentCountries;
exports.antarctica = antarctica;
exports.asia = asia;
exports.continents = continents;
exports.default = continentsData;
exports.europe = europe;
exports.getContinentForCountry = getContinentForCountry;
exports.getCountriesInContinent = getCountriesInContinent;
exports.northAmerica = northAmerica;
exports.oceania = oceania;
exports.southAmerica = southAmerica;
