import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingListTypes } from 'src/app/enums/shopping-list-types.enum';
import { Cart } from 'src/app/Interfaces/cart.interface';
import { User } from 'src/app/Interfaces/user.interface';
import { CartService } from 'src/app/services/cart.service';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  shoppingCart!: Cart[];
  currentUser!: User;
  shoppingListType!: string;

  constructor(public cartService: CartService, private usersService: UsersService, private router: Router) {
    this.shoppingListType = `${ShoppingListTypes.Store}`;
  }

  ngOnInit(): void {
    this.currentUser = this.usersService.loggedInUser !== null || undefined ?
      this.usersService.loggedInUser :
      { id: 0, userName: '', email: '', dob: new Date(), password: '', authLevel: 0 };

    this.cartService.itemChanged.subscribe(() => this.fetchCart());
    this.fetchCart();
  }

  fetchCart() {
    this.cartService.fetchCart().subscribe(() => {
      this.shoppingCart = this.cartService.getShoppingCart();
    });
  }

  onLogin() {
    this.router.navigate(['/login']);
  }

  onPurchase() {
    Swal.fire({
      title: 'Purchase',
      text: 'This will purchase & remove all items from the shopping cart, proceed?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#C64EB2',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(`Confirmed!`, `You've purchased the items!`, `success`);
      }
      else {
        Swal.fire(`Purchase Items Was Canceled`, `You can still change your mind...`, `error`);
      }
    });
  }

  onClearCart() {
    Swal.fire({
      title: 'Clear',
      text: 'This will clear all items in the shopping cart, proceed?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#C64EB2',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(`Confirmed!`, `You've cleared the shopping cart`, `success`);
      }
      else {
        Swal.fire(`Clear Cart Was Canceled`, `No item was removed from shopping cart.`, `error`);
      }
    });
  }
}
