import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/Interfaces/cart.interface';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  cartItems: Cart[] = [];
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.fetchItems();
    this.shoppingListService.itemAdded.subscribe(()=> this.fetchItems());
  }
  
  onPurchase() {
    this.shoppingListService.addToCart();
    this.fetchItems();
  }
  
  fetchItems() {
    this.cartItems = this.shoppingListService.getShoppingCart();
  }
}
