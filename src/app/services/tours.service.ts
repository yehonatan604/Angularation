import { Injectable } from "@angular/core";
import { Tour } from "../Interfaces/tour.interface";
import { AngularFireDatabase } from "@angular/fire/compat/database";

@Injectable({ providedIn: 'root' })
export class ToursService {
    constructor(private fireService: AngularFireDatabase) { }

    fetchItems() {
        return this.fireService.list<Tour>('tours').valueChanges();
    }

    postTour(tour: Tour) {
        this.fireService.list<Tour>('tours').push(tour);
    }
    
    updateTours(tours: Tour[]) {
        this.fireService.list<Tour>('tours').remove();
        tours.forEach(tour => this.postTour(tour));
    }
}