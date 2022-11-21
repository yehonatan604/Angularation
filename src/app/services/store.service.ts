import { Injectable } from "@angular/core";
import { StoreItem } from "../Interfaces/stroe-item.interface";

@Injectable({ providedIn: 'root' })
export class StoreService {
    private albums: StoreItem[] = [
        { title: 'Album 1', image: 'assets/Images/Album 1.png', price: 12.99 },
        { title: 'Album 2', image: 'assets/Images/Album 2.png', price: 14.99 },
        { title: 'Album 3', image: 'assets/Images/Album 3.png', price: 9.99 },
        { title: 'Album 4', image: 'assets/Images/Album 4.png', price: 19.99 }
    ]

    private merchandise: StoreItem[] = [
        { title: 'T-Shirt', image: 'assets/Images/Shirt.png', price: 19.99 },
        { title: 'Coffee Cup', image: 'assets/Images/Cofee.png', price: 6.99 }
    ];

    getAlbums(): StoreItem[] {
        return [...this.albums];
    }

    getMerchandise(): StoreItem[] {
        return [...this.merchandise];
    }
}