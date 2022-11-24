import { Component, OnInit } from '@angular/core';
import { Tour } from 'src/app/Interfaces/tour.interface';
import { ToursService } from 'src/app/services/tours.service';

@Component({
  selector: 'app-tours-list',
  templateUrl: './tours-list.component.html',
  styleUrls: ['./tours-list.component.css']
})
export class ToursListComponent implements OnInit {
  tours: Tour[] = [];

  constructor(private toursService: ToursService) { }

  ngOnInit(): void {
    this.tours = this.toursService.tours;
  }
}