import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Interfaces/cart.interface';
import { User } from 'src/app/Interfaces/user.interface';
import { CartService } from 'src/app/services/cart.service';
import { UsersService } from 'src/app/services/users.service';
import { MsgBox } from 'src/app/utilities/msg-box.utility';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  shoppingCart!: Cart[];
  currentUser!: User;

  constructor(private cartService: CartService, private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.currentUser = this.usersService.loggedInUser !== null || undefined ?
      this.usersService.loggedInUser : { id: 0, userName: '', email: '', dob: new Date(), password: '', authLevel: 0 };
    this.fetchCart();
    this.cartService.itemChanged.subscribe(() => this.fetchCart());
  }

  fetchCart() {
    this.cartService.fetchCart().subscribe(items => this.shoppingCart = items);
    this.shoppingCart = this.cartService.getShoppingCart();
  }

  onLogin() {
    this.router.navigate(['/login']);
  }

  onPurchase() {
    if (MsgBox.show(
      'Purchase',
      'Purchase Items',
      'This will delete all items in cart, proceed?',
      `You've purchased the items!`,
      `You can still change your mind...`)) {
      this.cartService.purchase();
      this.fetchCart();
    }
  }

  onClearCart() {
    if (MsgBox.show(
      'Clear',
      'Clear Cart',
      'This will delete all items in cart, proceed?',
      `You've cleared the shopping cart`,
      `No item was removed from shopping cart.`)) {
      this.cartService.clearCart();
      this.fetchCart();
    }
  }
}
