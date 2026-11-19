import type { Currency } from '../index.cjs';

declare const currencies: {
  all: Currency[];
  [code: string]: Currency | Currency[];
};

export default currencies;
export const currenciesAll: Currency[];
