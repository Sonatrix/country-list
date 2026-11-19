import type { CurrencySymbolMap } from '../index.js';

export const currencySymbolMap: CurrencySymbolMap;
export function getSymbolFromCurrency(currencyCode: string): string;
export function getNameFromCurrency(currencyCode: string): string;
export function getSafeSymbolFromCurrency(currencyCode: string): string;
export function getSafeNameFromCurrency(currencyCode: string): string;
