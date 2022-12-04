import { Component, Input } from '@angular/core';
import { ShoppingListTypes } from 'src/app/enums/shopping-list-types.enum';
import { Cart } from 'src/app/Interfaces/cart.interface';
import { CartService } from 'src/app/services/cart.service';
import { DialogBoxService } from 'src/app/services/dialog-box.service';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent {
  @Input() cartItems: Cart[] = [];
  @Input() cart!: Cart;
  @Input() sender: string;

  constructor(private shoppingListService: ShoppingListService, private cartService: CartService, private dialogBox: DialogBoxService) {
    this.sender = `${ShoppingListTypes.Store}`;
  }

  onRemoveFromCart(item: Cart) {
    this.dialogBox.show('Remove Item', 'This will remove this item/s from the shopping list, proceed?')
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire(`Confirmed!`, `You've Removed item${item.quantity > 1 ? 's' : ''}: ${item.quantity}${item.quantity > 1 ? ' units of' : ''} ${item.item.title}`, `success`);
          this.sender == `${ShoppingListTypes.Store}` ?
            this.cartService.removeFromCart(item) :
            this.cartService.removeFromCart(item);
        }
        else {
          Swal.fire(`Remove Item/s Was Canceled`, `No item was removed from the shopping list.`, `error`);
        }
      });
  }

  onQuantityChange(quantity: number) {
    this.sender === `${ShoppingListTypes.Store}` ?
      quantity > 0 ? this.shoppingListService.changeQuantity(quantity, this.cart) : this.cart.quantity = 1 :
      quantity > 0 ? this.cartService.changeQuantity(quantity, this.cart) : this.cart.quantity = 1;
  }
}
