import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AboutComponent } from '../main/body/about/about.component';
import { CartComponent } from '../main/body/cart/cart.component';
import { HomeComponent } from '../main/body/home/home.component';
import { StoreComponent } from '../main/body/store/store.component';

@NgModule({
  imports: [CommonModule, BrowserModule]
})
export class RoutingModule  {
  public static routeIT = RouterModule.forRoot([
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'store', component: StoreComponent},
  { path: 'cart', component: CartComponent},
  { path: '**', redirectTo: 'home' },
  ]);
}
