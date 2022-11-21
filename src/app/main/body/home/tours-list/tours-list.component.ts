import { Component, OnInit } from '@angular/core';
import { ToursService } from 'src/app/services/tours.service';

@Component({
  selector: 'app-tours-list',
  templateUrl: './tours-list.component.html',
  styleUrls: ['./tours-list.component.css']
})
export class ToursListComponent implements OnInit {

  isHovering: boolean = false;
  tours: { date: string, location: string, arena: string }[] = [];

  constructor(private toursService: ToursService) { }

  ngOnInit(): void {
    this.tours = this.toursService.tours;
  }

  hoverOn(){
    this.isHovering = true;
  }

  hoverOff(){
    this.isHovering = false;
  }

  onBuyTicket(tour: { date: string, location: string, arena: string }) {
    alert(`Thank you!\nWe'll meet at the event -\n
           date: ${tour.date}
           location: ${tour.location}
           arena: ${tour.arena}`);
    this.tours[this.tours.indexOf(tour)] = {date:'SOLD!', location:'', arena: ''};
  }

  countDown(date: string): string {
    let countDownDate = new Date(date).valueOf();

    let now = new Date().valueOf();
    let difference = countDownDate - now;

    let hours = Math.floor(difference  / 1000 / 60 / 60);
    let minutes = Math.round(difference / 6000);

    difference = Math.floor((countDownDate - now) / 86400000);
    return ` ${hours} Hours, & ${minutes} Minutes`;
  }

}
