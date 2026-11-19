import type { Language } from '../index.js';

declare const languages: {
  all: Language[];
  [code: string]: Language | Language[];
};

export default languages;
export const languagesAll: Language[];
