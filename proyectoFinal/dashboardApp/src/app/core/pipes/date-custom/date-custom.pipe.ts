import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCustom'
})
export class DateCustomPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
