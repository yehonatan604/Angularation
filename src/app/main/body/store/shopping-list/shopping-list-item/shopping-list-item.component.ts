import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/Interfaces/cart.interface';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent {
  @Input() cartItems: Cart[] = [];
  @Input() cart!: Cart;
  constructor(private shoppingCartService: ShoppingListService) {}

  onRemoveFromCart(item:Cart) {
    this.shoppingCartService.removeFromCart(item);
  }
}
