import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../gurads/auth-guard.guard';

import { AboutComponent } from '../main/body/about/about.component';
import { AdminComponent } from '../main/body/admin/admin.component';
import { CartComponent } from '../main/body/cart/cart.component';
import { HomeComponent } from '../main/body/home/home.component';
import { LoginFormComponent } from '../main/body/login-form/login-form.component';
import { LightboxComponent } from '../main/body/shared-components/lightbox/lightbox.component';
import { StoreComponent } from '../main/body/store/store.component';

@NgModule({
  imports: [CommonModule, BrowserModule]
})
export class RoutingModule  {
  public static routeIT = RouterModule.forRoot([
  { path: 'home', component: HomeComponent},
  { path: 'store', component: StoreComponent},
  { path: 'lightbox/:img', component: LightboxComponent},
  { path: 'cart', component: CartComponent},
  { path: 'login', component: LoginFormComponent},
  { path: 'about', component: AboutComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'home' },
  ]);
}
