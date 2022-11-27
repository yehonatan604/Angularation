import { Component, Input } from '@angular/core';
import { ShoppingListTypes } from 'src/app/enums/shopping-list-types.enum';
import { Cart } from 'src/app/Interfaces/cart.interface';
import { CartService } from 'src/app/services/cart.service';
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
  @Input() sender!: string;
  constructor(private shoppingListService: ShoppingListService, private cartService: CartService) { }

  onRemoveFromCart(item: Cart) {
    Swal.fire({
      title: 'Remove Item',
      text: 'This will remove this item/s from the shopping list, proceed?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#C64EB2',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(`Confirmed!`, `You've Removed item${item.quantity > 1 ? 's' : ''}: ${item.quantity}${item.quantity > 1 ? ' units of' : ''} ${item.item.title}`, `success`);
        this.sender == 'STORE' ?
          this.shoppingListService.removeFromList(item) :
          this.cartService.removeFromCart(item);
      }
      else {
        Swal.fire(`Remove Item/s Was Canceled`, `No item was removed from the shopping list.`, `error`);
      }
    });
  }

  onQuantityChange(quantity: number) {
    this.sender == `${ShoppingListTypes.Store}` ?
      quantity > 0 ? this.shoppingListService.changeQuantity(quantity, this.cart) : this.cart.quantity = 1 :
      quantity > 0 ? this.cartService.changeQuantity(quantity, this.cart) : this.cart.quantity = 1;
  }
}
