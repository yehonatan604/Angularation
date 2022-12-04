import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Interfaces/cart.interface';
import { StoreItem } from 'src/app/Interfaces/stroe-item.interface';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-merch-list-item',
  templateUrl: './merch-list-item.component.html',
  styleUrls: ['./merch-list-item.component.css']
})
export class MerchListItemComponent {
  @Input() merchandise!: StoreItem[];
  @Input() merch!: StoreItem;
  currentUserId!: number;

  constructor(private shoppingCartService: ShoppingListService, private usersService: UsersService, private router: Router) {
    this.currentUserId = this.usersService.loggedInUser === undefined ?
      0 : this.usersService.loggedInUser.id;
  }

  onImageClick() {
    this.router.navigate(['/lightbox', this.merch.title]);
  }
  
  addToList(item: Cart) {
    this.shoppingCartService.addToList(item);
  }
}
