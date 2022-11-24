import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/Interfaces/cart.interface';
import { StoreItem } from 'src/app/Interfaces/stroe-item.interface';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-merch-list-item',
  templateUrl: './merch-list-item.component.html',
  styleUrls: ['./merch-list-item.component.css']
})
export class MerchListItemComponent {
  @Input() merchandise : StoreItem[] = [];
  @Input() merch!: StoreItem;

  constructor(private shoppingCartService: ShoppingListService) { }

  addToList(item: Cart) {
    this.shoppingCartService.addToList(item);
  }
}
