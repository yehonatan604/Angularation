import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/Interfaces/cart.interface';
import { StoreItem } from 'src/app/Interfaces/stroe-item.interface';
import { ShoppingListService } from 'src/app/services/shopping-cart.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-merch-list',
  templateUrl: './merch-list.component.html',
  styleUrls: ['./merch-list.component.css']
})
export class MerchListComponent implements OnInit {
  merchandise : StoreItem[] = [];

  constructor(private storeService: StoreService, private shoppingCartService: ShoppingListService) { }

  ngOnInit(): void {
    this.fetchMerchandise();
  }

  fetchMerchandise() {
    this.storeService.fetchItems().subscribe(items => this.merchandise = items.filter(item => item.description === "Merch"));
  }
  addToCart(item: Cart) {
    this.shoppingCartService.addToCart(item);
  }
}