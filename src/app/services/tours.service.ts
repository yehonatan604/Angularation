import { Injectable } from "@angular/core";
import { Tour } from "../Interfaces/tour.interface";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ToursService {
    constructor(private http: HttpClient) { }
    toursChanged = new Subject();
    private url: string = 'https://band-project-864cf-default-rtdb.firebaseio.com/tours.json';
    tours!: Tour[];

    fetchItems() {
        return this.http.get<Tour[]>(this.url);
    }

    postTour(tour: Tour) {
        this.fetchItems().subscribe(items => {
            this.tours = items;
            this.tours.push(tour);
            this.updateTours(this.tours);
        })
    }

    updateTours(tours: Tour[]) {
        this.http.put<Tour[]>(this.url, tours).subscribe((items) => this.toursChanged.next(items));
    }
}