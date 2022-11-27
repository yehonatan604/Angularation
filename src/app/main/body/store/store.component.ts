import { Component, OnInit } from '@angular/core';
import { ShoppingListTypes } from 'src/app/enums/shopping-list-types.enum';
import { Cart } from 'src/app/Interfaces/cart.interface';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  cartItems!: Cart[];
  shoppingListType = `${ShoppingListTypes.Store}`;

  constructor(private shoppingListService: ShoppingListService) {
  }
  
  ngOnInit(): void {
    this.shoppingListService.itemChanged.subscribe(() => {
      this.cartItems = this.shoppingListService.getShoppingCart()
    });
  }

  onAddToCart() {
    Swal.fire({
      title: 'Add Items To Cart',
      text: 'This will empty the shopping list & add the items to the shopping cart, proceed?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#C64EB2',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(`Confirmed!`, `You've Added the items To the shopping cart.`, `success`);
        this.shoppingListService.itemChanged.subscribe();
        this.shoppingListService.addToCart()
        this.cartItems = [];
      }
      else {
        Swal.fire(`Add To Cart Was Canceled`, `You can still change your mind....`, `error`);
      }
    });
  }
}