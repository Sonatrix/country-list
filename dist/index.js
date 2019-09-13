"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "continents", {
  enumerable: true,
  get: function get() {
    return _continents["default"];
  }
});
exports.regions = exports.callingCodes = exports.callingCountries = exports.lookup = exports.languages = exports.currencies = exports.countries = void 0;

var _currencySymbolMap = _interopRequireDefault(require("currency-symbol-map"));

var _continents = _interopRequireDefault(require("./data/continents"));

var regions = _interopRequireWildcard(require("./data/regions"));

exports.regions = regions;

var _countries = _interopRequireDefault(require("./data/countries"));

var _currencies = _interopRequireDefault(require("./data/currencies"));

var _languages = _interopRequireDefault(require("./data/languages"));

var _lookup = _interopRequireDefault(require("./lookup"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var countries = {
  all: _countries["default"]
};
exports.countries = countries;

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

var currencies = {
  all: _currencies["default"]
};
exports.currencies = currencies;

_currencies["default"].forEach(function (currency) {
  //  If the symbol isn't available, default to the currency code
  var symbolCode = (0, _currencySymbolMap["default"])(currency.code);

  if (symbolCode === '?') {
    symbolCode = currency.code;
  }

  var newCurrency = Object.assign(currency, {
    symbol: symbolCode
  });
  currencies[currency.code] = newCurrency;
});

var languages = {
  all: _languages["default"]
}; //   Note that for the languages there are several entries with the same alpha3 -
//   eg Dutch and Flemish. Not sure how to best deal with that - here whichever
//   comes last wins.

exports.languages = languages;

_languages["default"].forEach(function (language) {
  languages[language.alpha2] = language;
  languages[language.bibliographic] = language;
  languages[language.alpha3] = language;
});

var lookup = (0, _lookup["default"])({
  countries: _countries["default"],
  currencies: _currencies["default"],
  languages: _languages["default"]
});
exports.lookup = lookup;
var callingCountries = {
  all: []
};
exports.callingCountries = callingCountries;

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
  } //   Same - check split[1]


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
var callingCodes = {
  all: callingCodesAll
};
exports.callingCodes = callingCodes;