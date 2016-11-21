import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'numberLocale'})
export class NumberLocale implements PipeTransform {
  transform(value: number, locale: string): string {
    return value.toLocaleString(locale);
  }
}