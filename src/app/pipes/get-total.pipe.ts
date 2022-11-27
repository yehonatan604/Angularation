import { Pipe, PipeTransform } from '@angular/core';
import { Cart } from '../Interfaces/cart.interface';

@Pipe({
  name: 'getTotal'
})
export class GetTotalPipe implements PipeTransform {

  transform(value: Cart[]): number {
    return value != null && value != undefined ?
    value.reduce((res, curr) => { return res + (curr.item.price * curr.quantity) }, 0) : 0;
  }
}
