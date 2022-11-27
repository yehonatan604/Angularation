import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/Interfaces/cart.interface';
import { CartService } from 'src/app/services/cart.service';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { MsgBox } from 'src/app/utilities/msg-box.utility';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent {
  @Input() cartItems: Cart[] = [];
  @Input() cart!: Cart;
  @Input() sender!: string;
  constructor(private shoppingListService: ShoppingListService, private cartService: CartService) { }

  onRemoveFromCart(item: Cart) {
    if (MsgBox.show(
      'Remove Item',
      'Remove Item',
      'This will remove this item from the shopping list, proceed?',
      `You've Removed item${item.quantity > 1 ? 's' : ''}: ${item.quantity}${item.quantity > 1 ? ' units of' : ''} ${item.item.title},`,
      `No item was removed from the shopping list.`)) {
      this.sender == 'STORE' ?
        this.shoppingListService.removeFromList(item) :
        this.cartService.removeFromCart(item);
    }
  }

  onQuantityChange(quantity: number) {
    this.sender == 'STORE' ?
      quantity > 0 ? this.shoppingListService.changeQuantity(quantity, this.cart) : this.cart.quantity = 1 :
      quantity > 0 ? this.cartService.changeQuantity(quantity, this.cart) : this.cart.quantity = 1;
  }
}
