import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/Interfaces/cart.interface';
import { CartService } from 'src/app/services/cart.service';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {

  
  @Input() cartItems: Cart[] = [];
  @Input() cart!: Cart;
  constructor(private cartService: CartService) {}

  onRemoveFromCart(item:Cart) {
    this.cartService.removeFromCart(item);
  }

}
