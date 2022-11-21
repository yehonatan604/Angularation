import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/Interfaces/cart.interface';
import { StoreItem } from 'src/app/Interfaces/stroe-item.interface';
import { ShoppingListService } from 'src/app/services/shopping-cart.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {
  albums : StoreItem[] = [];

  constructor(private storeService: StoreService, private shoppingService: ShoppingListService) { }

  ngOnInit(): void {
    this.fetchAlbums();
  }
  
  fetchAlbums(){
    this.albums = this.storeService.getAlbums();
  }

  addToCart(item:Cart){
    this.shoppingService.addToCart(item);
  }
}
