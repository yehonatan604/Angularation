import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/Interfaces/cart.interface';
import { StoreItem } from 'src/app/Interfaces/stroe-item.interface';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-albums-list-item',
  templateUrl: './albums-list-item.component.html',
  styleUrls: ['./albums-list-item.component.css']
})
export class AlbumsListItemComponent {
  @Input() albums: StoreItem[] = [];
  @Input() album!: StoreItem;
  currentUserId!: number;

  constructor(private shoppingService: ShoppingListService, private usersService: UsersService) {
    this.currentUserId = this.usersService.loggedInUser === undefined ?
      0 : this.usersService.loggedInUser.id;
  }

  addToList(item: Cart) {
    this.shoppingService.addToList(item);
  }
}
