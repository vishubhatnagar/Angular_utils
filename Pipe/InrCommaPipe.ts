import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyINR'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: any): any {
    if (value && !isNaN(value)) {
      const currencySymbol = '₹';
      // var output = Number(input).toLocaleString('en-IN');   <-- This method is not working fine in all browsers!
      let result = value.toString().split('.');

      let lastThree = result[0].substring(result[0].length - 3);
      let otherNumbers = result[0].substring(0, result[0].length - 3);
      if (otherNumbers != '') {
        lastThree = ',' + lastThree;
      }
      let output = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree;

      if (result.length > 1) {
        output += '.' + result[1].substring(0, 2);
      }

      return currencySymbol + output;
    }
  }

}
