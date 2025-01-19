"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currencySymbolMap = void 0;
exports.getNameFromCurrency = getNameFromCurrency;
exports.getSafeNameFromCurrency = getSafeNameFromCurrency;
exports.getSafeSymbolFromCurrency = getSafeSymbolFromCurrency;
exports.getSymbolFromCurrency = getSymbolFromCurrency;
var currencySymbolMap = exports.currencySymbolMap = [{
  symbol: 'د.إ',
  name: 'UAE Dirham',
  code: 'AED',
  number: '784'
}, {
  symbol: '؋',
  name: 'Afghani',
  code: 'AFN',
  number: '971'
}, {
  symbol: 'L',
  name: 'Lek',
  code: 'ALL',
  number: '008'
}, {
  symbol: '֏',
  name: 'Armenian Dram',
  code: 'AMD',
  number: '051'
}, {
  symbol: 'ƒ',
  name: 'Netherlands Antillean Guilder',
  code: 'ANG',
  number: '532'
}, {
  symbol: 'Kz',
  name: 'Kwanza',
  code: 'AOA',
  number: '973'
}, {
  symbol: '$',
  name: 'Argentine Peso',
  code: 'ARS',
  number: '032'
}, {
  symbol: '$',
  name: 'Australian Dollar',
  code: 'AUD',
  number: '036'
}, {
  symbol: 'ƒ',
  name: 'Aruban Florin',
  code: 'AWG',
  number: '533'
}, {
  symbol: '₼',
  name: 'Azerbaijan Manat',
  code: 'AZN',
  number: '944'
}, {
  symbol: 'KM',
  name: 'Convertible Mark',
  code: 'BAM',
  number: '977'
}, {
  symbol: '$',
  name: 'Barbados Dollar',
  code: 'BBD',
  number: '052'
}, {
  symbol: '৳',
  name: 'Taka',
  code: 'BDT',
  number: '050'
}, {
  symbol: 'лв',
  name: 'Bulgarian Lev',
  code: 'BGN',
  number: '975'
}, {
  symbol: '.د.ب',
  name: 'Bahraini Dinar',
  code: 'BHD',
  number: '048'
}, {
  symbol: 'FBu',
  name: 'Burundi Franc',
  code: 'BIF',
  number: '108'
}, {
  symbol: '$',
  name: 'Bermudian Dollar',
  code: 'BMD',
  number: '060'
}, {
  symbol: '$',
  name: 'Brunei Dollar',
  code: 'BND',
  number: '096'
}, {
  symbol: '$b',
  name: 'Boliviano',
  code: 'BOB',
  number: '068'
}, {
  symbol: 'BOV',
  name: 'Mvdol',
  code: 'BOV',
  number: '984'
}, {
  symbol: 'R$',
  name: 'Brazilian Real',
  code: 'BRL',
  number: '986'
}, {
  symbol: '$',
  name: 'Bahamian Dollar',
  code: 'BSD',
  number: '044'
}, {
  symbol: '₿',
  name: '',
  code: 'BTC',
  number: ''
}, {
  symbol: 'Nu.',
  name: 'Ngultrum',
  code: 'BTN',
  number: '064'
}, {
  symbol: 'P',
  name: 'Pula',
  code: 'BWP',
  number: '072'
}, {
  symbol: 'Br',
  name: 'Belarusian Ruble',
  code: 'BYN',
  number: '933'
}, {
  symbol: 'Br',
  name: '',
  code: 'BYR',
  number: ''
}, {
  symbol: 'BZ$',
  name: 'Belize Dollar',
  code: 'BZD',
  number: '084'
}, {
  symbol: '$',
  name: 'Canadian Dollar',
  code: 'CAD',
  number: '124'
}, {
  symbol: 'FC',
  name: 'Congolese Franc',
  code: 'CDF',
  number: '976'
}, {
  symbol: 'CHE',
  name: 'WIR Euro',
  code: 'CHE',
  number: '947'
}, {
  symbol: '₣',
  name: 'Swiss Franc',
  code: 'CHF',
  number: '756'
}, {
  symbol: 'CHW',
  name: 'WIR Franc',
  code: 'CHW',
  number: '948'
}, {
  symbol: 'CLF',
  name: 'Unidad de Fomento',
  code: 'CLF',
  number: '990'
}, {
  symbol: '$',
  name: 'Chilean Peso',
  code: 'CLP',
  number: '152'
}, {
  symbol: '¥',
  name: '',
  code: 'CNH',
  number: ''
}, {
  symbol: '¥',
  name: 'Yuan Renminbi',
  code: 'CNY',
  number: '156'
}, {
  symbol: '$',
  name: 'Colombian Peso',
  code: 'COP',
  number: '170'
}, {
  symbol: 'COU',
  name: 'Unidad de Valor Real',
  code: 'COU',
  number: '970'
}, {
  symbol: '₡',
  name: 'Costa Rican Colon',
  code: 'CRC',
  number: '188'
}, {
  symbol: '$',
  name: 'Peso Convertible',
  code: 'CUC',
  number: '931'
}, {
  symbol: '₱',
  name: 'Cuban Peso',
  code: 'CUP',
  number: '192'
}, {
  symbol: '$',
  name: 'Cabo Verde Escudo',
  code: 'CVE',
  number: '132'
}, {
  symbol: 'Kč',
  name: 'Czech Koruna',
  code: 'CZK',
  number: '203'
}, {
  symbol: 'Fdj',
  name: 'Djibouti Franc',
  code: 'DJF',
  number: '262'
}, {
  symbol: 'kr',
  name: 'Danish Krone',
  code: 'DKK',
  number: '208'
}, {
  symbol: 'RD$',
  name: 'Dominican Peso',
  code: 'DOP',
  number: '214'
}, {
  symbol: 'دج',
  name: 'Algerian Dinar',
  code: 'DZD',
  number: '012'
}, {
  symbol: 'kr',
  name: '',
  code: 'EEK',
  number: ''
}, {
  symbol: 'E£',
  name: 'Egyptian Pound',
  code: 'EGP',
  number: '818'
}, {
  symbol: 'Nfk',
  name: 'Nakfa',
  code: 'ERN',
  number: '232'
}, {
  symbol: 'Br',
  name: 'Ethiopian Birr',
  code: 'ETB',
  number: '230'
}, {
  symbol: 'Ξ',
  name: '',
  code: 'ETH',
  number: ''
}, {
  symbol: '€',
  name: 'Euro',
  code: 'EUR',
  number: '978'
}, {
  symbol: '$',
  name: 'Fiji Dollar',
  code: 'FJD',
  number: '242'
}, {
  symbol: '£',
  name: 'Falkland Islands Pound',
  code: 'FKP',
  number: '238'
}, {
  symbol: 'E£',
  name: 'Pound Sterling',
  code: 'GBP',
  number: '826'
}, {
  symbol: '₾',
  name: 'Lari',
  code: 'GEL',
  number: '981'
}, {
  symbol: '£',
  name: '',
  code: 'GGP',
  number: ''
}, {
  symbol: '₵',
  name: '',
  code: 'GHC',
  number: ''
}, {
  symbol: 'GH₵',
  name: 'Ghana Cedi',
  code: 'GHS',
  number: '936'
}, {
  symbol: '£',
  name: 'Gibraltar Pound',
  code: 'GIP',
  number: '292'
}, {
  symbol: 'D',
  name: 'Dalasi',
  code: 'GMD',
  number: '270'
}, {
  symbol: 'FG',
  name: 'Guinean Franc',
  code: 'GNF',
  number: '324'
}, {
  symbol: 'Q',
  name: 'Quetzal',
  code: 'GTQ',
  number: '320'
}, {
  symbol: '$',
  name: 'Guyana Dollar',
  code: 'GYD',
  number: '328'
}, {
  symbol: '$',
  name: 'Hong Kong Dollar',
  code: 'HKD',
  number: '344'
}, {
  symbol: 'L',
  name: 'Lempira',
  code: 'HNL',
  number: '340'
}, {
  symbol: 'kn',
  name: '',
  code: 'HRK',
  number: ''
}, {
  symbol: 'G',
  name: 'Gourde',
  code: 'HTG',
  number: '332'
}, {
  symbol: 'Ft',
  name: 'Forint',
  code: 'HUF',
  number: '348'
}, {
  symbol: 'Rp',
  name: 'Rupiah',
  code: 'IDR',
  number: '360'
}, {
  symbol: '₪',
  name: 'New Israeli Sheqel',
  code: 'ILS',
  number: '376'
}, {
  symbol: '£',
  name: '',
  code: 'IMP',
  number: ''
}, {
  symbol: '₹',
  name: 'Indian Rupee',
  code: 'INR',
  number: '356'
}, {
  symbol: 'د.ع',
  name: 'Iraqi Dinar',
  code: 'IQD',
  number: '368'
}, {
  symbol: '﷼',
  name: 'Iranian Rial',
  code: 'IRR',
  number: '364'
}, {
  symbol: 'kr',
  name: 'Iceland Krona',
  code: 'ISK',
  number: '352'
}, {
  symbol: '£',
  name: '',
  code: 'JEP',
  number: ''
}, {
  symbol: 'J$',
  name: 'Jamaican Dollar',
  code: 'JMD',
  number: '388'
}, {
  symbol: 'JD',
  name: 'Jordanian Dinar',
  code: 'JOD',
  number: '400'
}, {
  symbol: '¥',
  name: 'Yen',
  code: 'JPY',
  number: '392'
}, {
  symbol: 'KSh',
  name: 'Kenyan Shilling',
  code: 'KES',
  number: '404'
}, {
  symbol: 'лв',
  name: 'Som',
  code: 'KGS',
  number: '417'
}, {
  symbol: '៛',
  name: 'Riel',
  code: 'KHR',
  number: '116'
}, {
  symbol: 'CF',
  name: 'Comorian Franc',
  code: 'KMF',
  number: '174'
}, {
  symbol: '₩',
  name: 'North Korean Won',
  code: 'KPW',
  number: '408'
}, {
  symbol: '₩',
  name: 'Won',
  code: 'KRW',
  number: '410'
}, {
  symbol: 'KD',
  name: 'Kuwaiti Dinar',
  code: 'KWD',
  number: '414'
}, {
  symbol: '$',
  name: 'Cayman Islands Dollar',
  code: 'KYD',
  number: '136'
}, {
  symbol: '₸',
  name: 'Tenge',
  code: 'KZT',
  number: '398'
}, {
  symbol: '₭',
  name: 'Lao Kip',
  code: 'LAK',
  number: '418'
}, {
  symbol: '£',
  name: 'Lebanese Pound',
  code: 'LBP',
  number: '422'
}, {
  symbol: '₨',
  name: 'Sri Lanka Rupee',
  code: 'LKR',
  number: '144'
}, {
  symbol: '$',
  name: 'Liberian Dollar',
  code: 'LRD',
  number: '430'
}, {
  symbol: 'M',
  name: 'Loti',
  code: 'LSL',
  number: '426'
}, {
  symbol: 'Ł',
  name: '',
  code: 'LTC',
  number: ''
}, {
  symbol: 'Lt',
  name: '',
  code: 'LTL',
  number: ''
}, {
  symbol: 'Ls',
  name: '',
  code: 'LVL',
  number: ''
}, {
  symbol: 'LD',
  name: 'Libyan Dinar',
  code: 'LYD',
  number: '434'
}, {
  symbol: 'MAD',
  name: 'Moroccan Dirham',
  code: 'MAD',
  number: '504'
}, {
  symbol: 'lei',
  name: 'Moldovan Leu',
  code: 'MDL',
  number: '498'
}, {
  symbol: 'Ar',
  name: 'Malagasy Ariary',
  code: 'MGA',
  number: '969'
}, {
  symbol: 'ден',
  name: 'Denar',
  code: 'MKD',
  number: '807'
}, {
  symbol: 'K',
  name: 'Kyat',
  code: 'MMK',
  number: '104'
}, {
  symbol: '₮',
  name: 'Tugrik',
  code: 'MNT',
  number: '496'
}, {
  symbol: 'MOP$',
  name: 'Pataca',
  code: 'MOP',
  number: '446'
}, {
  symbol: 'UM',
  name: '',
  code: 'MRO',
  number: ''
}, {
  symbol: 'UM',
  name: 'Ouguiya',
  code: 'MRU',
  number: '929'
}, {
  symbol: '₨',
  name: 'Mauritius Rupee',
  code: 'MUR',
  number: '480'
}, {
  symbol: 'Rf',
  name: 'Rufiyaa',
  code: 'MVR',
  number: '462'
}, {
  symbol: 'MK',
  name: 'Malawi Kwacha',
  code: 'MWK',
  number: '454'
}, {
  symbol: '$',
  name: 'Mexican Peso',
  code: 'MXN',
  number: '484'
}, {
  symbol: 'MXV',
  name: 'Mexican Unidad de Inversion (UDI)',
  code: 'MXV',
  number: '979'
}, {
  symbol: 'RM',
  name: 'Malaysian Ringgit',
  code: 'MYR',
  number: '458'
}, {
  symbol: 'MT',
  name: 'Mozambique Metical',
  code: 'MZN',
  number: '943'
}, {
  symbol: '$',
  name: 'Namibia Dollar',
  code: 'NAD',
  number: '516'
}, {
  symbol: '₦',
  name: 'Naira',
  code: 'NGN',
  number: '566'
}, {
  symbol: 'C$',
  name: 'Cordoba Oro',
  code: 'NIO',
  number: '558'
}, {
  symbol: 'kr',
  name: 'Norwegian Krone',
  code: 'NOK',
  number: '578'
}, {
  symbol: '₨',
  name: 'Nepalese Rupee',
  code: 'NPR',
  number: '524'
}, {
  symbol: '$',
  name: 'New Zealand Dollar',
  code: 'NZD',
  number: '554'
}, {
  symbol: '﷼',
  name: 'Rial Omani',
  code: 'OMR',
  number: '512'
}, {
  symbol: 'B/.',
  name: 'Balboa',
  code: 'PAB',
  number: '590'
}, {
  symbol: 'S/.',
  name: 'Sol',
  code: 'PEN',
  number: '604'
}, {
  symbol: 'K',
  name: 'Kina',
  code: 'PGK',
  number: '598'
}, {
  symbol: '₱',
  name: 'Philippine Peso',
  code: 'PHP',
  number: '608'
}, {
  symbol: '₨',
  name: 'Pakistan Rupee',
  code: 'PKR',
  number: '586'
}, {
  symbol: 'zł',
  name: 'Zloty',
  code: 'PLN',
  number: '985'
}, {
  symbol: 'Gs',
  name: 'Guarani',
  code: 'PYG',
  number: '600'
}, {
  symbol: '﷼',
  name: 'Qatari Rial',
  code: 'QAR',
  number: '634'
}, {
  symbol: '￥',
  name: '',
  code: 'RMB',
  number: ''
}, {
  symbol: 'lei',
  name: 'Romanian Leu',
  code: 'RON',
  number: '946'
}, {
  symbol: 'Дин.',
  name: 'Serbian Dinar',
  code: 'RSD',
  number: '941'
}, {
  symbol: '₽',
  name: 'Russian Ruble',
  code: 'RUB',
  number: '643'
}, {
  symbol: 'R₣',
  name: 'Rwanda Franc',
  code: 'RWF',
  number: '646'
}, {
  symbol: '﷼',
  name: 'Saudi Riyal',
  code: 'SAR',
  number: '682'
}, {
  symbol: '$',
  name: 'Solomon Islands Dollar',
  code: 'SBD',
  number: '090'
}, {
  symbol: '₨',
  name: 'Seychelles Rupee',
  code: 'SCR',
  number: '690'
}, {
  symbol: 'ج.س.',
  name: 'Sudanese Pound',
  code: 'SDG',
  number: '938'
}, {
  symbol: 'kr',
  name: 'Swedish Krona',
  code: 'SEK',
  number: '752'
}, {
  symbol: 'S$',
  name: 'Singapore Dollar',
  code: 'SGD',
  number: '702'
}, {
  symbol: '£',
  name: 'Saint Helena Pound',
  code: 'SHP',
  number: '654'
}, {
  symbol: 'Le',
  name: '',
  code: 'SLL',
  number: ''
}, {
  symbol: 'S',
  name: 'Somali Shilling',
  code: 'SOS',
  number: '706'
}, {
  symbol: '$',
  name: 'Surinam Dollar',
  code: 'SRD',
  number: '968'
}, {
  symbol: '£',
  name: 'South Sudanese Pound',
  code: 'SSP',
  number: '728'
}, {
  symbol: 'Db',
  name: '',
  code: 'STD',
  number: ''
}, {
  symbol: 'Db',
  name: 'Dobra',
  code: 'STN',
  number: '930'
}, {
  symbol: '$',
  name: 'El Salvador Colon',
  code: 'SVC',
  number: '222'
}, {
  symbol: '£',
  name: 'Syrian Pound',
  code: 'SYP',
  number: '760'
}, {
  symbol: 'E',
  name: 'Lilangeni',
  code: 'SZL',
  number: '748'
}, {
  symbol: '฿',
  name: 'Baht',
  code: 'THB',
  number: '764'
}, {
  symbol: 'SM',
  name: 'Somoni',
  code: 'TJS',
  number: '972'
}, {
  symbol: 'T',
  name: 'Turkmenistan New Manat',
  code: 'TMT',
  number: '934'
}, {
  symbol: 'د.ت',
  name: 'Tunisian Dinar',
  code: 'TND',
  number: '788'
}, {
  symbol: 'T$',
  name: 'Pa’anga',
  code: 'TOP',
  number: '776'
}, {
  symbol: '₤',
  name: '',
  code: 'TRL',
  number: ''
}, {
  symbol: '₺',
  name: 'Turkish Lira',
  code: 'TRY',
  number: '949'
}, {
  symbol: 'TT$',
  name: 'Trinidad and Tobago Dollar',
  code: 'TTD',
  number: '780'
}, {
  symbol: '$',
  name: '',
  code: 'TVD',
  number: ''
}, {
  symbol: 'NT$',
  name: 'New Taiwan Dollar',
  code: 'TWD',
  number: '901'
}, {
  symbol: 'TSh',
  name: 'Tanzanian Shilling',
  code: 'TZS',
  number: '834'
}, {
  symbol: '₴',
  name: 'Hryvnia',
  code: 'UAH',
  number: '980'
}, {
  symbol: 'USh',
  name: 'Uganda Shilling',
  code: 'UGX',
  number: '800'
}, {
  symbol: '$',
  name: 'US Dollar',
  code: 'USD',
  number: '840'
}, {
  symbol: 'UYI',
  name: 'Uruguay Peso en Unidades Indexadas (UI)',
  code: 'UYI',
  number: '940'
}, {
  symbol: '$U',
  name: 'Peso Uruguayo',
  code: 'UYU',
  number: '858'
}, {
  symbol: 'UYW',
  name: 'Unidad Previsional',
  code: 'UYW',
  number: '927'
}, {
  symbol: 'лв',
  name: 'Uzbekistan Sum',
  code: 'UZS',
  number: '860'
}, {
  symbol: 'Bs',
  name: '',
  code: 'VEF',
  number: ''
}, {
  symbol: 'Bs.S',
  name: 'Bolívar Soberano',
  code: 'VES',
  number: '928'
}, {
  symbol: '₫',
  name: 'Dong',
  code: 'VND',
  number: '704'
}, {
  symbol: 'VT',
  name: 'Vatu',
  code: 'VUV',
  number: '548'
}, {
  symbol: 'WS$',
  name: 'Tala',
  code: 'WST',
  number: '882'
}, {
  symbol: 'FCFA',
  name: 'CFA Franc BEAC',
  code: 'XAF',
  number: '950'
}, {
  symbol: 'Ƀ',
  name: '',
  code: 'XBT',
  number: ''
}, {
  symbol: '$',
  name: 'East Caribbean Dollar',
  code: 'XCD',
  number: '951'
}, {
  symbol: 'CFA',
  name: 'CFA Franc BCEAO',
  code: 'XOF',
  number: '952'
}, {
  symbol: '₣',
  name: 'CFP Franc',
  code: 'XPF',
  number: '953'
}, {
  symbol: 'Sucre',
  name: 'Sucre',
  code: 'XSU',
  number: '994'
}, {
  symbol: 'XUA',
  name: 'ADB Unit of Account',
  code: 'XUA',
  number: '965'
}, {
  symbol: '﷼',
  name: 'Yemeni Rial',
  code: 'YER',
  number: '886'
}, {
  symbol: 'R',
  name: 'Rand',
  code: 'ZAR',
  number: '710'
}, {
  symbol: 'ZK',
  name: 'Zambian Kwacha',
  code: 'ZMW',
  number: '967'
}, {
  symbol: 'Z$',
  name: 'Zimbabwean Dollar',
  code: 'ZWD',
  number: ''
}, {
  symbol: '$',
  name: 'Zimbabwean Dollar',
  code: 'ZWL',
  number: ''
}];
function getSymbolFromCurrency(currencyCode) {
  var _currencySymbolMap$fi;
  if (typeof currencyCode !== 'string') {
    return undefined;
  }
  var symbol = (_currencySymbolMap$fi = currencySymbolMap.find(function (x) {
    return x.code === currencyCode.toUpperCase();
  })) === null || _currencySymbolMap$fi === void 0 ? void 0 : _currencySymbolMap$fi.symbol;
  return symbol !== null && symbol !== void 0 ? symbol : undefined;
}
function getSafeSymbolFromCurrency(currencyCode) {
  var _getSymbolFromCurrenc;
  return (_getSymbolFromCurrenc = getSymbolFromCurrency(currencyCode)) !== null && _getSymbolFromCurrenc !== void 0 ? _getSymbolFromCurrenc : currencyCode;
}
function getNameFromCurrency(currencyCode) {
  var _currencySymbolMap$fi2;
  if (typeof currencyCode !== 'string') {
    return currencyCode;
  }
  var name = (_currencySymbolMap$fi2 = currencySymbolMap.find(function (x) {
    return x.code === currencyCode.toUpperCase();
  })) === null || _currencySymbolMap$fi2 === void 0 ? void 0 : _currencySymbolMap$fi2.name;
  return name !== null && name !== void 0 ? name : currencyCode;
}
function getSafeNameFromCurrency(currencyCode) {
  var _getNameFromCurrency;
  return (_getNameFromCurrency = getNameFromCurrency(currencyCode)) !== null && _getNameFromCurrency !== void 0 ? _getNameFromCurrency : currencyCode;
}