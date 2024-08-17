"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var regions = _interopRequireWildcard(require("./regions.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
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
var _default = exports["default"] = {
  asia: asia,
  africa: africa,
  northAmerica: northAmerica,
  southAmerica: southAmerica,
  antartica: antartica,
  europe: europe,
  oceania: oceania
};