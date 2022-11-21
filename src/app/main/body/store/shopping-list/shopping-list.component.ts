import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/Interfaces/cart.interface';
import { ShoppingListService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  cartItems: Cart[] = [];
  constructor(private shoppingCartService: ShoppingListService) {}

  ngOnInit(): void {
    this.fetchItems();
    this.shoppingCartService.itemAdded.subscribe(()=> this.fetchItems());
  }
  
  onRemoveFromCart(item:Cart) {
    this.shoppingCartService.removeFromCart(item);
    this.fetchItems();
  }
  
  onChangeQuantityInCart(item:Cart, num: number) {
    this.shoppingCartService.changeQuantityInCart(item,num);
    this.fetchItems();
  }
  
  onPurchase() {
    this.shoppingCartService.purchase();
    this.fetchItems();
  }
  
  fetchItems() {
    this.cartItems = this.shoppingCartService.getShoppingCart();
  }

  getCartTotal(): number {
    return this.shoppingCartService.getCartTotal();
  }
}
