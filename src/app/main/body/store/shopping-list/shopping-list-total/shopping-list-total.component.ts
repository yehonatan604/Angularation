import { Component } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-total',
  templateUrl: './shopping-list-total.component.html',
  styleUrls: ['./shopping-list-total.component.css']
})
export class ShoppingListTotalComponent{

  constructor(private shoppingCartService: ShoppingListService) { }

  getCartTotal(): number {
    return this.shoppingCartService.getCartTotal();
  }

}
