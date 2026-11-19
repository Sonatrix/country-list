import type { Language } from '../index.cjs';

declare const languages: {
  all: Language[];
  [code: string]: Language | Language[];
};

export default languages;
export const languagesAll: Language[];
