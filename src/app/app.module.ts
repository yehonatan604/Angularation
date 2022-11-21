import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './modules/routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './main/header/header.component';
import { NavBarComponent } from './main/nav-bar/nav-bar.component';
import { FooterComponent } from './main/footer/footer.component';
import { MainAppModule } from './modules/main-app.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    NavBarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule, MainAppModule, RoutingModule.routeIT
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
