import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/Interfaces/cart.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  shoppingCart: Cart[] = []

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.fetchCart();
  }

  onPurchase() {
    this.cartService.purchase();
    this.fetchCart();
  }

  fetchCart() {
    this.cartService.fetchCart().subscribe(items => this.shoppingCart = items);
    this.shoppingCart = this.cartService.getShoppingCart();
  }
}
