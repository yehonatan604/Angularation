import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingListTypes } from 'src/app/enums/shopping-list-types.enum';
import { Cart } from 'src/app/Interfaces/cart.interface';
import { DialogBoxService } from 'src/app/services/dialog-box.service';
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

  constructor(private shoppingListService: ShoppingListService, 
              private dialogBox: DialogBoxService, 
              private router: Router) {
  }
  
  ngOnInit(): void {
    this.shoppingListService.itemChanged.subscribe(() => {
      this.cartItems = this.shoppingListService.getShoppingCart()
    });
  }

  onAddToCart() {
    this.dialogBox.show('Add To Cart', 'This will empty the shopping list & add the items to the shopping cart, proceed?')
     .then((result) => {
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

  onGoToCart() {
    this.router.navigate(['/cart']);
  }
}