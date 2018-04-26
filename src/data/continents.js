import * as regions from './regions';

const asia = {
  name: 'Asia',
  regions: [
    'centralAsia',
    'southernAsia',
    'southeastAsia',
    'eastAsia',
    'westernAsia',
  ],
  countries: [
    regions.centralAsia.countries,
    regions.southernAsia.countries,
    regions.southeastAsia.countries,
    regions.eastAsia.countries,
    regions.westernAsia.countries,
  ]
    .reduce((a, b) => a.concat(b), [])
    .sort(),
};

const africa = {
  name: 'Africa',
  regions: [
    'centralAfrica',
    'northAfrica',
    'southernAfrica',
    'eastAfrica',
    'westAfrica',
  ],
  countries: [
    regions.centralAfrica.countries,
    regions.northAfrica.countries,
    regions.southernAfrica.countries,
    regions.eastAfrica.countries,
    regions.westAfrica.countries,
  ]
    .reduce((a, b) => a.concat(b), [])
    .sort(),
};

const northAmerica = {
  name: 'North America',
  regions: ['centralAmerica', 'northernAmerica', 'caribbean'],
  countries: [
    regions.centralAmerica.countries,
    regions.northernAmerica.countries,
    regions.caribbean.countries,
  ]
    .reduce((a, b) => a.concat(b), [])
    .sort(),
};

const southAmerica = {
  name: 'South America',
  regions: ['southAmerica'],
  countries: [regions.southAmerica.countries]
    .reduce((a, b) => a.concat(b), [])
    .sort(),
};

const antartica = {
  name: 'Antartica',
  regions: ['antartica'],
  countries: [regions.antartica.countries]
    .reduce((a, b) => a.concat(b), [])
    .sort(),
};

const europe = {
  name: 'Europe',
  regions: [
    'northernEurope',
    'southernEurope',
    'easternEurope',
    'westernEurope',
  ],
  countries: [
    regions.northernEurope.countries,
    regions.southernEurope.countries,
    regions.easternEurope.countries,
    regions.westernEurope.countries,
  ]
    .reduce((a, b) => a.concat(b), [])
    .sort(),
};

const oceania = {
  name: 'Oceania',
  regions: ['australia', 'melanesia', 'micronesia', 'polynesia'],
  countries: [
    regions.australia.countries,
    regions.melanesia.countries,
    regions.micronesia.countries,
    regions.polynesia.countries,
  ]
    .reduce((a, b) => a.concat(b), [])
    .sort(),
};

export default {
  asia,
  africa,
  northAmerica,
  southAmerica,
  antartica,
  europe,
  oceania,
};
