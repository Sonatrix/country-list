import { _ } from 'underscore';
import regions from './regions';

const asia = {
  name: 'Asia',
  regions: [
    'centralAsia',
    'southernAsia',
    'southeastAsia',
    'eastAsia',
    'westernAsia',
  ],
  countries: _.flatten([
    regions.centralAsia.countries,
    regions.southernAsia.countries,
    regions.southeastAsia.countries,
    regions.eastAsia.countries,
    regions.westernAsia.countries,
  ]).sort(),
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
  countries: _.flatten([
    regions.centralAfrica.countries,
    regions.northAfrica.countries,
    regions.southernAfrica.countries,
    regions.eastAfrica.countries,
    regions.westAfrica.countries,
  ]).sort(),
};

const northAmerica = {
  name: 'North America',
  regions: ['centralAmerica', 'northernAmerica', 'caribbean'],
  countries: _.flatten([
    regions.centralAmerica.countries,
    regions.northernAmerica.countries,
    regions.caribbean.countries,
  ]).sort(),
};

const southAmerica = {
  name: 'South America',
  regions: ['southAmerica'],
  countries: _.flatten([regions.southAmerica.countries]).sort(),
};

const antartica = {
  name: 'Antartica',
  regions: ['antartica'],
  countries: _.flatten([regions.antartica.countries]).sort(),
};

const europe = {
  name: 'Europe',
  regions: [
    'northernEurope',
    'southernEurope',
    'easternEurope',
    'westernEurope',
  ],
  countries: _.flatten([
    regions.northernEurope.countries,
    regions.southernEurope.countries,
    regions.easternEurope.countries,
    regions.westernEurope.countries,
  ]).sort(),
};

const oceania = {
  name: 'Oceania',
  regions: ['australia', 'melanesia', 'micronesia', 'polynesia'],
  countries: _.flatten([
    regions.australia.countries,
    regions.melanesia.countries,
    regions.micronesia.countries,
    regions.polynesia.countries,
  ]).sort(),
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
