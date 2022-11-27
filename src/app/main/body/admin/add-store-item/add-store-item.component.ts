import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StoreItem } from 'src/app/Interfaces/stroe-item.interface';
import { StoreService } from 'src/app/services/store.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-store-item',
  templateUrl: './add-store-item.component.html',
  styleUrls: ['./add-store-item.component.css']
})
export class AddStoreItemComponent {
  @ViewChild('addStoreItemForm') itemForm!: NgForm;
  item!: StoreItem;

  constructor(private storeService: StoreService) { }

  onSubmit() {
    Swal.fire({
      title: 'Add Item To Database',
      text: 'This will Add the item to database, proceed?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#C64EB2',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(`Confirmed!`, `You've Added the item to the database.`, `success`);
        this.item = {
          title: this.itemForm.value.formGroup.itemTitle, 
          image: this.itemForm.value.formGroup.picture, 
          description: this.itemForm.value.formGroup.description, 
          price: this.itemForm.value.formGroup.price
        }
        this.storeService.postItem(this.item);
      }
      else {
        Swal.fire(`Add Item To Database Was Canceled`, `you can proceed editing.`, `error`);
      }
    });
  }
}
