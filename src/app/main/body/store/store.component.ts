import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/Interfaces/cart.interface';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { MsgBox } from 'src/app/utilities/msg-box.utility';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) { }
  cartItems!: Cart[];

  ngOnInit(): void {
    this.shoppingListService.itemChanged.subscribe(() => {
      this.cartItems = this.shoppingListService.getShoppingCart()
    });
  }

  onAddToCart() {
    if (MsgBox.show(
      'Add To Cart',
      'Add To Cart',
      'Add items To Cart?\nthis will empty the shopping list & add the items to the shopping cart',
      `You've Add items To shopping cart`,
      `You can still change your mind....`)) {
      this.shoppingListService.itemChanged.subscribe();
      this.shoppingListService.addToCart()
      this.cartItems = [];
    }
  }
}