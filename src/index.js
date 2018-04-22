import { _ } from 'underscore';
import continents from './data/continents';
import regions from './data/regions';
import countriesAll from './data/countries';
import currenciesAll from './data/currencies';
import languagesAll from './data/languages';
import lookup from './lookup';

const getSymbol = require('currency-symbol-map');

exports.continents = continents;
exports.regions = regions;

exports.countries = {
  all: countriesAll,
};

_.each(countriesAll, country => {
  //   prefer assigned country codes over inactive ones
  const exportedAlpha2 = exports.countries[country.alpha2];
  if (!exportedAlpha2 || exportedAlpha2.status === 'deleted') {
    exports.countries[country.alpha2] = country;
  }

  const exportedAlpha3 = exports.countries[country.alpha3];
  if (!exportedAlpha3 || exportedAlpha3.status === 'deleted') {
    exports.countries[country.alpha3] = country;
  }
});

exports.currencies = {
  all: currenciesAll,
};

_.each(currenciesAll, currency => {
  //  If the symbol isn't available, default to the currency code

  let symbolCode = getSymbol(currency.code);
  if (symbolCode === '?') {
    symbolCode = currency.code;
  }

  const newCurrency = Object.assign(currency, { symbol: symbolCode });
  exports.currencies[currency.code] = newCurrency;
});

exports.languages = {
  all: languagesAll,
};

//   Note that for the languages there are several entries with the same alpha3 -
//   eg Dutch and Flemish. Not sure how to best deal with that - here whichever
//   comes last wins.
_.each(languagesAll, language => {
  exports.languages[language.alpha2] = language;
  exports.languages[language.bibliographic] = language;
  exports.languages[language.alpha3] = language;
});

exports.lookup = lookup({
  countries: countriesAll,
  currencies: currenciesAll,
  languages: languagesAll,
});

const callingCountries = { all: [] };

const callingCodesAll = _.reduce(
  countriesAll,
  (codes, country) => {
    if (country.countryCallingCodes && country.countryCallingCodes.length) {
      callingCountries.all.push(country);

      callingCountries[country.alpha2] = country;
      callingCountries[country.alpha3] = country;

      _.each(country.countryCallingCodes, code => {
        if (codes.indexOf(code) === -1) {
          codes.push(code);
        }
      });
    }
    return codes;
  },
  []
);

delete callingCountries['']; //   remove empty alpha3s
exports.callingCountries = callingCountries;

callingCodesAll.sort((a, b) => {
  const parse = str => +str;
  const splitA = _.map(a.split(' '), parse);
  const splitB = _.map(b.split(' '), parse);

  if (splitA[0] < splitB[0]) {
    return -1;
  } else if (splitA[0] > splitB[0]) {
    return 1;
  }
  //   Same - check split[1]
  if (splitA[1] === undefined && splitB[1] !== undefined) {
    return -1;
  } else if (splitA[1] !== undefined && splitB[1] === undefined) {
    return 1;
  } else if (splitA[1] < splitB[1]) {
    return -1;
  } else if (splitA[1] > splitB[1]) {
    return 1;
  }
  return 0;
});

exports.callingCodes = {
  all: callingCodesAll,
};
