import { Component, Input } from '@angular/core';
import { Tour } from 'src/app/Interfaces/tour.interface';
import { DialogBoxService } from 'src/app/services/dialog-box.service';
import { ToursService } from 'src/app/services/tours.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tours-list-item',
  templateUrl: './tours-list-item.component.html',
  styleUrls: ['./tours-list-item.component.css']
})
export class ToursListItemComponent {
  constructor(private toursService: ToursService, private dialogBoxService: DialogBoxService) { }

  isHovering: boolean = false;
  @Input() tours: Tour[] = [];
  @Input() currentTour: Tour = { date: '', arena: '', location: '', price: 0, tickets: 500, sold: false };

  hoverOn() {
    this.isHovering = true;
  }

  hoverOff() {
    this.isHovering = false;
  }

  onBuyTicket(tour: Tour) {
    this.dialogBoxService.show('Purchase Ticket', 'proceed to purchase ticket?')
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire(`Confirmed!`, `You've purchased a ticket:\ndate: ${tour.date}\nlocation: ${tour.location}\narena: ${tour.arena}`, `success`);
          
          if (this.tours[this.tours.indexOf(tour)].tickets === 0) {
            this.tours[this.tours.indexOf(tour)].arena += ' SOLD OUT!!!';
            this.tours[this.tours.indexOf(tour)].sold = true;
          }
          else {
            this.tours[this.tours.indexOf(tour)].tickets--;
          }

          this.toursService.updateTours(this.tours);
        }
        else {
          Swal.fire(`Purchase Ticket Was Canceled`, `You can still change your mind....`, `error`);
        }
      });
  }

  countDown(date: string): string {
    let countDownDate = new Date(date).getTime();
    let now = new Date().getTime();
    let difference = countDownDate - now;
    let days = Math.floor(difference / 1000 / 60 / 60 / 24);
    return `${days} Days`;
  }
}
