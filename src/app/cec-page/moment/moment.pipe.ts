import { Pipe, PipeTransform, Inject } from '@angular/core';

@Pipe({
  name: 'bcMoment'
})
export class MomentPipe implements PipeTransform {
  constructor (@Inject('moment') private moment: any) {}

  transform(value: any, format: string): any {
    return value && format ? this.moment(value).format(format) : '';
  }
}
