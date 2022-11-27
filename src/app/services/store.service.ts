import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { StoreItem } from "../Interfaces/stroe-item.interface";
import { CategoryTypes } from "../enums/category-types.enum";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class StoreService {
    itemList: StoreItem[] = [];
    private url: string = 'https://band-project-864cf-default-rtdb.firebaseio.com/items.json';
    
    constructor(private http: HttpClient) { }

    getAlbums(): StoreItem[] {
        return [...this.itemList.filter(item => item.description === `${CategoryTypes.Album}`)];
    }

    getMerchandise(): StoreItem[] {
        return [...this.itemList.filter(item => item.description === `${CategoryTypes.Merch}`)];
    }

    // postItems() {
    //     this.http.put(this.url, this.itemList).subscribe();
    // }

    fetchItems() {
        return this.http.get<StoreItem[]>(this.url);
    }
}