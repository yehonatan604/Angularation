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

@NgModule({
  imports: [CommonModule, BrowserModule, HttpClientModule],
  declarations:[
    HomeComponent, 
    StoreComponent, 
    AboutComponent, 
    ToursListComponent,
    AlbumsListComponent,
    MerchListComponent,
    ShoppingListComponent,
]
})
export class MainAppModule  {
}
