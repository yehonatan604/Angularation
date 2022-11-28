import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tour } from 'src/app/Interfaces/tour.interface';
import { DialogBoxService } from 'src/app/services/dialog-box.service';
import { ToursService } from 'src/app/services/tours.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-tour',
  templateUrl: './add-tour.component.html',
  styleUrls: ['./add-tour.component.css']
})
export class AddTourComponent {
  @ViewChild('addTourForm') itemForm!: NgForm;
  tour!: Tour;
  today = new Date();

  constructor(private toursService: ToursService, private dialogBox: DialogBoxService) { }
  
  onSubmit() {
    this.dialogBox.show('Add Tour To Database', 'This will Add the tour to database, proceed?')
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire(`Confirmed!`, `You've Added the tour to the database.`, `success`);
          let tempDate: Date = new Date(this.itemForm.value.formGroup.tourDate);
        this.tour = {
          date: tempDate.toDateString(), 
          location: this.itemForm.value.formGroup.location, 
          arena: this.itemForm.value.formGroup.arena, 
          price: this.itemForm.value.formGroup.price,
          tickets: this.itemForm.value.formGroup.tickets,
          sold: false
        }
        this.toursService.postTour(this.tour);
        }
        else {
          Swal.fire(`Add Tour To Database Was Canceled`, `you can proceed editing.`, `error`);
        }
      });
  }
}
