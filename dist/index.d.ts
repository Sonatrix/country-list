import continents from './data/continents';
import * as regions from './data/regions';
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
import { currencySymbolMap } from './data/currency-symbol';
import { getSymbolFromCurrency } from './data/currency-symbol';
import { getNameFromCurrency } from './data/currency-symbol';
import { getSafeSymbolFromCurrency } from './data/currency-symbol';
import { getSafeNameFromCurrency } from './data/currency-symbol';
import countriesAll from './data/countries';
import currenciesAll from './data/currencies';
import languagesAll from './data/languages';
declare const callingCodesAll: any[];
export { continents, regions, currencySymbolMap, getSymbolFromCurrency, getNameFromCurrency, getSafeSymbolFromCurrency, getSafeNameFromCurrency };
//# sourceMappingURL=index.d.ts.map