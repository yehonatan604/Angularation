import { Component, Input } from '@angular/core';
import { Tour } from 'src/app/Interfaces/tour.interface';

@Component({
  selector: 'app-tours-list-item',
  templateUrl: './tours-list-item.component.html',
  styleUrls: ['./tours-list-item.component.css']
})
export class ToursListItemComponent {
  isHovering: boolean = false;
  @Input() tours: Tour[] = [];
  @Input() currentTour: Tour = {date:'', arena:'', location:''};

  hoverOn(){
    this.isHovering = true;
  }

  hoverOff(){
    this.isHovering = false;
  }

  onBuyTicket(tour: Tour) {
    alert(`Thank you!\nWe'll meet at the event -\n
           date: ${tour.date}
           location: ${tour.location}
           arena: ${tour.arena}`);
    this.tours[this.tours.indexOf(tour)] = {date:'SOLD!', location:tour.location, arena: tour.arena};
  }

  countDown(date: string): string {
    let countDownDate = new Date(date).getTime();
    let now = new Date().getTime();
    let difference = countDownDate - now;
    let days = Math.floor(difference  / 1000 / 60 / 60 / 24);
    return `${days} Days`;
  }
}
