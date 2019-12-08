"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var regions = _interopRequireWildcard(require("./regions"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var asia = {
  name: 'Asia',
  regions: ['centralAsia', 'southernAsia', 'southeastAsia', 'eastAsia', 'westernAsia'],
  countries: [regions.centralAsia.countries, regions.southernAsia.countries, regions.southeastAsia.countries, regions.eastAsia.countries, regions.westernAsia.countries].reduce(function (a, b) {
    return a.concat(b);
  }, []).sort()
};
var africa = {
  name: 'Africa',
  regions: ['centralAfrica', 'northAfrica', 'southernAfrica', 'eastAfrica', 'westAfrica'],
  countries: [regions.centralAfrica.countries, regions.northAfrica.countries, regions.southernAfrica.countries, regions.eastAfrica.countries, regions.westAfrica.countries].reduce(function (a, b) {
    return a.concat(b);
  }, []).sort()
};
var northAmerica = {
  name: 'North America',
  regions: ['centralAmerica', 'northernAmerica', 'caribbean'],
  countries: [regions.centralAmerica.countries, regions.northernAmerica.countries, regions.caribbean.countries].reduce(function (a, b) {
    return a.concat(b);
  }, []).sort()
};
var southAmerica = {
  name: 'South America',
  regions: ['southAmerica'],
  countries: [regions.southAmerica.countries].reduce(function (a, b) {
    return a.concat(b);
  }, []).sort()
};
var antartica = {
  name: 'Antartica',
  regions: ['antartica'],
  countries: [regions.antartica.countries].reduce(function (a, b) {
    return a.concat(b);
  }, []).sort()
};
var europe = {
  name: 'Europe',
  regions: ['northernEurope', 'southernEurope', 'easternEurope', 'westernEurope'],
  countries: [regions.northernEurope.countries, regions.southernEurope.countries, regions.easternEurope.countries, regions.westernEurope.countries].reduce(function (a, b) {
    return a.concat(b);
  }, []).sort()
};
var oceania = {
  name: 'Oceania',
  regions: ['australia', 'melanesia', 'micronesia', 'polynesia'],
  countries: [regions.australia.countries, regions.melanesia.countries, regions.micronesia.countries, regions.polynesia.countries].reduce(function (a, b) {
    return a.concat(b);
  }, []).sort()
};
var _default = {
  asia: asia,
  africa: africa,
  northAmerica: northAmerica,
  southAmerica: southAmerica,
  antartica: antartica,
  europe: europe,
  oceania: oceania
};
exports["default"] = _default;