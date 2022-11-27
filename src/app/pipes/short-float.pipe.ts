import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortFloat'
})
export class ShortFloatPipe implements PipeTransform {
  transform(value: number): unknown {
    return value.toFixed(2);
  }
}
