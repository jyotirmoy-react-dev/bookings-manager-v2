import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterResult'
})
export class FilterResultPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let results = value.filter(item => item.value == args);
    return results[0].fitting_type + ' - ' + results[0].fitting_subtype;
  }

}
