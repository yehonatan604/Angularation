import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { StoreItem } from "../Interfaces/stroe-item.interface";

@Injectable({ providedIn: 'root' })
export class StoreService {
    private itemList: StoreItem[] = [];
    
    constructor(private http: HttpClient) {
    }

    getAlbums(): StoreItem[] {
        return [...this.itemList.filter(item => item.description === 'Album')];
    }

    getMerchandise(): StoreItem[] {
        return [...this.itemList.filter(item => item.description === 'Merch')];
    }

    postItems() {
        this.http.put('https://band-project-864cf-default-rtdb.firebaseio.com/items.json', this.itemList)
        .subscribe();
    }

    fetchItems() {
        return this.http.get<StoreItem[]>('https://band-project-864cf-default-rtdb.firebaseio.com/items.json')
        ;
    }
}