import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'population'
})
export class PopulationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const hasLetters = isNaN(+value);

    if (hasLetters) {
      return value;
    }

    value = +value;

    if (value < 1000) {
      return value;
    }

    let exp = Math.floor(Math.log(value) / Math.log(1000));
    const suffixes = ['k', 'm', 'b'];

    if (exp > 3) {
      exp = 3;
    }

    return (value / Math.pow(1000, exp)).toFixed(args) + suffixes[exp - 1];
  }

}
