import { copyFileSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
const typeNames = [
  'countries',
  'continents',
  'currencies',
  'languages',
  'regions',
  'currency-symbol',
  'timezones',
];

copyFileSync(join('src', 'types', 'index.d.ts'), join(dist, 'index.d.ts'));
copyFileSync(join('src', 'types', 'index.d.ts'), join(dist, 'index.d.cts'));

for (const name of typeNames) {
  const source = join('src', 'types', 'data', `${name}.d.ts`);
  const declaration = join(dist, 'data', `${name}.d.ts`);
  const commonjsDeclaration = join(dist, 'data', `${name}.d.cts`);
  const types = readFileSync(source, 'utf8');

  writeFileSync(declaration, types);
  writeFileSync(
    commonjsDeclaration,
    types.replace(/\.\.\/index\.js/g, '../index.cjs')
  );
}
