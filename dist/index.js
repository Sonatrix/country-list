"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callingCountries = exports.callingCodes = void 0;
Object.defineProperty(exports, "continents", {
  enumerable: true,
  get: function get() {
    return _continents["default"];
  }
});
exports.currencies = exports.countries = void 0;
Object.defineProperty(exports, "currencySymbolMap", {
  enumerable: true,
  get: function get() {
    return _currencySymbol.currencySymbolMap;
  }
});
Object.defineProperty(exports, "getNameFromCurrency", {
  enumerable: true,
  get: function get() {
    return _currencySymbol.getNameFromCurrency;
  }
});
Object.defineProperty(exports, "getSafeNameFromCurrency", {
  enumerable: true,
  get: function get() {
    return _currencySymbol.getSafeNameFromCurrency;
  }
});
Object.defineProperty(exports, "getSafeSymbolFromCurrency", {
  enumerable: true,
  get: function get() {
    return _currencySymbol.getSafeSymbolFromCurrency;
  }
});
Object.defineProperty(exports, "getSymbolFromCurrency", {
  enumerable: true,
  get: function get() {
    return _currencySymbol.getSymbolFromCurrency;
  }
});
exports.regions = exports.lookup = exports.languages = void 0;
var _currencySymbol = require("./data/currency-symbol");
var _continents = _interopRequireDefault(require("./data/continents"));
var regions = _interopRequireWildcard(require("./data/regions"));
exports.regions = regions;
var _countries = _interopRequireDefault(require("./data/countries"));
var _currencies = _interopRequireDefault(require("./data/currencies"));
var _languages = _interopRequireDefault(require("./data/languages"));
var _lookup = _interopRequireDefault(require("./lookup"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var countries = exports.countries = {
  all: _countries["default"]
};
_countries["default"].forEach(function (country) {
  //   prefer assigned country codes over inactive ones
  var _ref = countries[country.alpha2] || {},
    status = _ref.status;
  if (!status || status === 'deleted') {
    countries[country.alpha2] = country;
  }
  var _ref2 = countries[country.alpha3] || {},
    statusAlpha3 = _ref2.status;
  if (!statusAlpha3 || statusAlpha3 === 'deleted') {
    countries[country.alpha3] = country;
  }
});
var currencies = exports.currencies = {
  all: _currencies["default"]
};
_currencies["default"].forEach(function (currency) {
  //  If the symbol isn't available, default to the currency code

  var symbolCode = (0, _currencySymbol.getSymbolFromCurrency)(currency.code);
  if (symbolCode === '?') {
    symbolCode = currency.code;
  }
  var newCurrency = Object.assign(currency, {
    symbol: symbolCode
  });
  currencies[currency.code] = newCurrency;
});
var languages = exports.languages = {
  all: _languages["default"]
};

//   Note that for the languages there are several entries with the same alpha3 -
//   eg Dutch and Flemish. Not sure how to best deal with that - here whichever
//   comes last wins.
_languages["default"].forEach(function (language) {
  languages[language.alpha2] = language;
  languages[language.bibliographic] = language;
  languages[language.alpha3] = language;
});
var lookup = exports.lookup = (0, _lookup["default"])({
  countries: _countries["default"],
  currencies: _currencies["default"],
  languages: _languages["default"]
});
var callingCountries = exports.callingCountries = {
  all: []
};
var callingCodesAll = _countries["default"].reduce(function (codes, country) {
  var countryCallingCodes = country.countryCallingCodes,
    alpha2 = country.alpha2,
    alpha3 = country.alpha3;
  if (countryCallingCodes && countryCallingCodes.length) {
    callingCountries.all.push(country);
    callingCountries[alpha2] = country;
    callingCountries[alpha3] = country;
    countryCallingCodes.forEach(function (code) {
      if (codes.indexOf(code) === -1) {
        codes.push(code);
      }
    });
  }
  return codes;
}, []);
delete callingCountries['']; //   remove empty alpha3s

callingCodesAll.sort(function (a, b) {
  var parse = function parse(str) {
    return +str;
  };
  var splitA = a.split(' ').map(parse);
  var splitB = b.split(' ').map(parse);
  if (splitA[0] < splitB[0]) {
    return -1;
  }
  if (splitA[0] > splitB[0]) {
    return 1;
  }
  //   Same - check split[1]
  if (splitA[1] === undefined && splitB[1] !== undefined) {
    return -1;
  }
  if (splitA[1] !== undefined && splitB[1] === undefined) {
    return 1;
  }
  if (splitA[1] < splitB[1]) {
    return -1;
  }
  if (splitA[1] > splitB[1]) {
    return 1;
  }
  return 0;
});
var callingCodes = exports.callingCodes = {
  all: callingCodesAll
};