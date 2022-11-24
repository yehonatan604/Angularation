import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AboutComponent } from '../main/body/about/about.component';
import { HomeComponent } from '../main/body/home/home.component';
import { ToursListComponent } from '../main/body/home/tours-list/tours-list.component';
import { AlbumsListComponent } from '../main/body/store/albums-list/albums-list.component';
import { MerchListComponent } from '../main/body/store/merch-list/merch-list.component';
import { ShoppingListComponent } from '../main/body/store/shopping-list/shopping-list.component';
import { StoreComponent } from '../main/body/store/store.component';
import { ShoppingListTotalComponent } from '../main/body/store/shopping-list/shopping-list-total/shopping-list-total.component';
import { ToursListItemComponent } from '../main/body/home/tours-list/tours-list-item/tours-list-item.component';
import { MerchListItemComponent } from '../main/body/store/merch-list/merch-list-item/merch-list-item.component';
import { AlbumsListItemComponent } from '../main/body/store/albums-list/albums-list-item/albums-list-item.component';
import { ShoppingListItemComponent } from '../main/body/store/shopping-list/shopping-list-item/shopping-list-item.component';
import { CartItemComponent } from '../main/body/cart/cart-item/cart-item.component';
import { CartTotalComponent } from '../main/body/cart/cart-total/cart-total.component';
import { CartComponent } from '../main/body/cart/cart.component';

@NgModule({
  imports: [CommonModule, BrowserModule, HttpClientModule],
  declarations:[
    HomeComponent, 
    StoreComponent, 
    AboutComponent, 
    CartComponent,
    
    CartItemComponent,
    CartTotalComponent,
    ToursListComponent,
    ToursListItemComponent,
    AlbumsListComponent,
    AlbumsListItemComponent,
    MerchListComponent,
    MerchListItemComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
    ShoppingListTotalComponent,
]
})
export class MainAppModule  {
}
