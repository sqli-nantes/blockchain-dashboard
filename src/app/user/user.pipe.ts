/*

    Filtre monétique qui parse un nombre en monaie Wei, Ether, ou Sonantes
    @author : Joël CHRABIE

*/

import { Pipe, PipeTransform } from '@angular/core';
import { CURRENCIES } from '../utils/currencies.const';

let Numeral = require('numeral');

@Pipe({
  name: 'numeralFormat',
  pure: false
})

export class NumeralFormatPipe implements PipeTransform {
  transform(value: any, currency: string): number {
    Numeral.language(currency, CURRENCIES[currency]);
    Numeral.language(currency);
    let v = Numeral().unformat(value);
    return Numeral(v).format('0[.]00 a $');
  }
}
