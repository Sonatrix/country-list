# Country List


There are lots of little bits of data that you often need relating to countries,
and I couldn't find any easy to use source of it. So I compiled it all here.

## Work in Progress

feel free to use it, but be sure to check between upgrades.

I suspect that many of the `currencies` entries on the countries may be wrong. Help checking them would be appreciated.


## Countries

The data currently provided for each country is:

  * `name` The english name for the country 
  * `alpha2` The [ISO 3166-1 alpha 2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code
  * `alpha3` The [ISO 3166-1 alpha 3](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-3) code
  * `status`: The ISO status of the entry - see below.
  * `currencies` An array of [ISO 4217 currency codes](http://en.wikipedia.org/wiki/ISO_4217) with the primary one first
  * `languages` An array of [ISO 639-2](http://en.wikipedia.org/wiki/ISO_639-2) codes for languages (may not be complete).
  * `countryCallingCodes` An array of the international call prefixes for this country.
  * `ioc` The [International Olympic Committee country code](http://en.wikipedia.org/wiki/List_of_IOC_country_codes)
  * `emoji` The emoji of country's flag.
  * `subunits` Geographically disjoint components like Alaska in the USA, administratively distinct regions such as the countries of Great Britain, or overseas islands for many European nations.
  
### Status notes

The `status` can be one of 'assigned', 'reserved', 'user assigned' or 'deleted'.

Assigned means that the code is properly in the ISO 3166 standard. Reserved means that the code is being prevented from being used. Deleted means that it has been deleted. User Assigned means that for some use cases it is required. Deleted means that it used to be in the standard but is now not.

See https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 for full details, especially the "User-assigned code elements" and "Reserved code elements" sections.

## Regions

Countries are ofter grouped into regions. The list of regions is by no means exhaustive, pull requests very welcome for additions.

  * `countries` An array of `alpha2` codes for the countries in this region.

## Currencies

It is not that useful to just have the currency code(s) for a country, so included is currency data too:

  * `name` The english name for the currency
  * `code` The [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) code
  * `number` The [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) number
  * `decimals` The number of decimal digits conventionally shown
  * `symbol` The currency symbol for the currency (e.g. ¥, $ etc.). Some symbols are not available, in which case
    `symbol` contains the ISO 4217 code.  Credit to [bengourley/currency-symbol-map](https://github.com/bengourley/currency-symbol-map)
    for the symbol database.

## Languages

A list of languages provided by [ISO 639-2](http://en.wikipedia.org/wiki/ISO_639-2);

  * `name` The english name for the language
  * `alpha2` The two letter [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) code for the language (may be blank).
  * `alpha3` The three letter terminological [ISO 639-2](http://en.wikipedia.org/wiki/ISO_639-2) code for the language (may be blank).
  * `bibliograpic` The three letter bibliographic [ISO 639-2](http://en.wikipedia.org/wiki/ISO_639-2) code for the language (may be blank).

## Lookup

To make finding easier there are utility methods that can search the countries and currencies. See examples below.


## Installing

``` bash
npm install country-data-list
```


## Example usage
* es5
``` javascript
var countries        = require('country-data-list').countries,
    currencies       = require('country-data-list').currencies,
    regions          = require('country-data-list').regions,
    languages        = require('country-data-list').languages,
    callingCountries = require('country-data-list').callingCountries;

// .all gives you an array of all entries
console.log( countries.all );
console.log( currencies.all );

// countries are found using alpha2 or alpha3 (both uppercase)
console.log( countries.BE.name );        // 'Belgium'
console.log( countries.FRA.currencies ); // ['EUR']

// callingCountries is like countries but only has entries with dialing codes.

// currencies are accessed by their code (uppercase)
console.log( currencies.USD.name ); // 'United States dollar'

// regions are accessed using a camel case name
console.log( regions.europe.countries )
```

``` javascript
var lookup = require('country-data-list').lookup;

// Match a value (grab first from array) case insensitive
var france = lookup.countries({name: 'France'})[0];
 
// Or match one of several possible values.
var eurozone_countries = lookup.countries({currencies: 'EUR'});
```

* es6
```
import {countries} from 'country-data-list';

console.log(countries.all);

// You can also use
import {lookup} from 'country-data-list';

// Match a value (grab first from array) case insensitive
const france = lookup.countries({name: 'France'})[0];
```

It is very simple for now - feel free to contribute more helpful accessors.


## Possible future additions

More data for each country is most welcome. Obvious things that it might be nice
to add are:

### Countries

  * Wikipedia links
  * Coordinates (centroid, bounding box, etc)

### Currencies

  * other currency that it is [pegged](http://en.wikipedia.org/wiki/Fixed_exchange_rate) to


## Other similar bits of code

* [libphonenumber](https://code.google.com/p/libphonenumber/) "Google's common Java, C++ and Javascript library for parsing, formatting, storing and validating international phone numbers."


## How to contribute

You can change on JSON.

These are the steps required:

``` bash
# Clone the repo (or better your fork of it)
git clone https://github.com/Sonatrix/country-list.git
cd country-list

# install the dependencies
npm install .

# Edit the countries.js
open data/countries.js


# Run the tests
mocha

# If all is ok commit and push
git add .
git commit
git push

# Then send a pull request with your changes. Ideally use several small commits,
# and reference a source that backs up the change.
```


## Sources

The currency data was copied from the [Wikipedia ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) page.

The country calling codes came from the  [Wikipedia country calling codes](http://en.wikipedia.org/wiki/List_of_country_calling_codes) page.


## Added typescript definations