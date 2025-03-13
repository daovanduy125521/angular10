import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'currencyVND'
})
export class CurrencyVndPipe implements PipeTransform {
  constructor(private decimalPipe: DecimalPipe) { }

  transform(value: number): string {
    const formattedValue = this.decimalPipe.transform(value, '1.0-0').replace(/,/g, '.');
    return formattedValue ? `${formattedValue}đ` : '';
  }
}