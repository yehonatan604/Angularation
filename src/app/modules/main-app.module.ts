import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AboutComponent } from '../main/body/about/about.component';
import { HomeComponent } from '../main/body/home/home.component';
import { ToursListComponent } from '../main/body/home/tours-list/tours-list.component';
import { AlbumsListComponent } from '../main/body/store/albums-list/albums-list.component';
import { MerchListComponent } from '../main/body/store/merch-list/merch-list.component';
import { StoreComponent } from '../main/body/store/store.component';
import { ToursListItemComponent } from '../main/body/home/tours-list/tours-list-item/tours-list-item.component';
import { MerchListItemComponent } from '../main/body/store/merch-list/merch-list-item/merch-list-item.component';
import { AlbumsListItemComponent } from '../main/body/store/albums-list/albums-list-item/albums-list-item.component';
import { CartComponent } from '../main/body/cart/cart.component';
import { ShortFloatPipe } from '../pipes/short-float.pipe';
import { GetTotalPipe } from '../pipes/get-total.pipe';
import { LoginFormComponent } from '../main/body/login-form/login-form.component';

import { AdminComponent } from '../main/body/admin/admin.component';
import { AddStoreItemComponent } from '../main/body/admin/add-store-item/add-store-item.component';
import { AddTourComponent } from '../main/body/admin/add-tour/add-tour.component';

import { ShoppingListComponent } from '../main/body/shared-components/shopping-list/shopping-list.component';
import { ShoppingListItemComponent } from '..//main/body/shared-components/shopping-list/shopping-list-item/shopping-list-item.component';
import { ListTotalCalculatorComponent } from '../main/body/shared-components/list-total-calculator/list-total-calculator.component';
@NgModule({
  imports: [FormsModule, BrowserModule, HttpClientModule],
  declarations:[
    HomeComponent, 
    StoreComponent, 
    AboutComponent, 
    CartComponent,
    
    LoginFormComponent,
    ToursListComponent,
    ToursListItemComponent,
    AlbumsListComponent,
    AlbumsListItemComponent,
    MerchListComponent,
    MerchListItemComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
    ListTotalCalculatorComponent,

    AdminComponent,
    AddTourComponent,
    AddStoreItemComponent,

    ShortFloatPipe,
    GetTotalPipe,
]
})
export class MainAppModule  {
}
