/*
    Constante Hashmap de Currencies.
*/

'use strict';
export const CURRENCIES: {[key: string]: any} = {};

CURRENCIES['Nantes'] = {
  delimiters: {
    thousands: ' ',
    decimal: ','
  },
  abbreviations: {
    thousand: 'k',
    million: 'm',
    billion: 'b',
    trillion: 't'
  },
  currency: {
    symbol: 'SoNantes'
  }
};
CURRENCIES['Ether'] = {
  delimiters: {
  thousands: ' ',
  decimal: ','
  },
  abbreviations: {
  thousand: 'k',
  million: 'm',
  billion: 'M',
  trillion: 'T'
  },
  currency: {
    symbol: 'Ether'
  }
};
CURRENCIES['Wei'] = {
  delimiters: {
  thousands: ' ',
  decimal: ','
  },
  abbreviations: {
  thousand: 'k',
  million: 'm',
  billion: 'M',
  trillion: 'T'
  },
  currency: {
    symbol: '₩'
  }
};
