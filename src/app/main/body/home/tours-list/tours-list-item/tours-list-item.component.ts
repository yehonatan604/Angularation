import { Component, Input } from '@angular/core';
import { Tour } from 'src/app/Interfaces/tour.interface';
import { ToursService } from 'src/app/services/tours.service';
import { MsgBox } from 'src/app/utilities/msg-box.utility';

@Component({
  selector: 'app-tours-list-item',
  templateUrl: './tours-list-item.component.html',
  styleUrls: ['./tours-list-item.component.css']
})
export class ToursListItemComponent {
  constructor(private toursService: ToursService) { }

  isHovering: boolean = false;
  @Input() tours: Tour[] = [];
  @Input() currentTour: Tour = { date: '', arena: '', location: '', sold: false };

  hoverOn() {
    this.isHovering = true;
  }

  hoverOff() {
    this.isHovering = false;
  }

  onBuyTicket(tour: Tour) {
    if (MsgBox.show(
      'Purchase',
      'Purchase Ticket',
      'proceed to purchase ticket?',
      `You've purchased a ticket:\ndate: ${tour.date}\nlocation: ${tour.location}\narena: ${tour.arena}`,
      `You can still change your mind....`)) {
      this.tours[this.tours.indexOf(tour)].date = 'SOLD OUT!!!';
      this.tours[this.tours.indexOf(tour)].sold = true;
      this.toursService.updateTours(this.tours);
    }
  }

  countDown(date: string): string {
    let countDownDate = new Date(date).getTime();
    let now = new Date().getTime();
    let difference = countDownDate - now;
    let days = Math.floor(difference / 1000 / 60 / 60 / 24);
    return `${days} Days`;
  }
}
