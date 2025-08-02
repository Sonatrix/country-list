import continents from './data/continents.js';
import * as regions from './data/regions.js';
export namespace countries {
    export { countriesAll as all };
}
export namespace currencies {
    export { currenciesAll as all };
}
export namespace languages {
    export { languagesAll as all };
}
export const lookup: {
    countries: any;
    currencies: any;
    languages: any;
};
export namespace callingCountries {
    let all: any[];
}
export namespace callingCodes {
    export { callingCodesAll as all };
}
import { currencySymbolMap } from './data/currency-symbol.js';
import { getSymbolFromCurrency } from './data/currency-symbol.js';
import { getNameFromCurrency } from './data/currency-symbol.js';
import { getSafeSymbolFromCurrency } from './data/currency-symbol.js';
import { getSafeNameFromCurrency } from './data/currency-symbol.js';
import countriesAll from './data/countries.js';
import currenciesAll from './data/currencies.js';
import languagesAll from './data/languages.js';
declare const callingCodesAll: any[];
export { continents, regions, currencySymbolMap, getSymbolFromCurrency, getNameFromCurrency, getSafeSymbolFromCurrency, getSafeNameFromCurrency };
//# sourceMappingURL=index.d.ts.map