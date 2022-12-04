import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingListTypes } from 'src/app/enums/shopping-list-types.enum';
import { Cart } from 'src/app/Interfaces/cart.interface';
import { User } from 'src/app/Interfaces/user.interface';
import { CartService } from 'src/app/services/cart.service';
import { DialogBoxService } from 'src/app/services/dialog-box.service';
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

  constructor(public cartService: CartService, private usersService: UsersService,
    private dialogBoxService: DialogBoxService, private router: Router) {
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
    this.cartService.fetchCart().subscribe(items => {
      this.shoppingCart = items;
    });
  }

  onLogin() {
    this.router.navigate(['/login']);
  }

  onPurchase() {
    this.dialogBoxService.show('Purchase Items', 'This will purchase & remove all items from the shopping cart, proceed?')
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire(`Confirmed!`, `You've purchased the items!`, `success`);
        }
        else {
          Swal.fire(`Purchase Items Was Canceled`, `You can still change your mind....`, `error`);
        }
      });
  }

  onClearCart() {
    this.dialogBoxService.show('Clear Cart', 'This will clear all items in the shopping cart, proceed?')
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire(`Confirmed!`, `You've cleared the shopping cart.`, `success`);
        }
        else {
          Swal.fire(`Clear Cart Was Canceled`, `No items were removed from shopping cart.`, `error`);
        }
      });
  }
}
