import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AdminComponent } from '../main/body/admin/admin.component';
import { AddStoreItemComponent } from '../main/body/admin/add-store-item/add-store-item.component';
import { AddTourComponent } from '../main/body/admin/add-tour/add-tour.component';
import { StringifyDatePipe } from '../pipes/stringify-date.pipe';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  declarations: [
    AdminComponent,
    AddTourComponent,
    AddStoreItemComponent,
    StringifyDatePipe
  ],
  exports: [
    StringifyDatePipe
  ]
})
export class AdminModule { }
