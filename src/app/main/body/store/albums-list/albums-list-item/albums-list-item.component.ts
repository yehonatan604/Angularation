import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/Interfaces/cart.interface';
import { StoreItem } from 'src/app/Interfaces/stroe-item.interface';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-albums-list-item',
  templateUrl: './albums-list-item.component.html',
  styleUrls: ['./albums-list-item.component.css']
})
export class AlbumsListItemComponent {
  @Input() albums : StoreItem[] = [];
  @Input() album!: StoreItem;

  constructor(private shoppingService: ShoppingListService) { }

  addToList(item:Cart){
    this.shoppingService.addToList(item);
  }
}
