import { Injectable } from "@angular/core";
import { StoreItem } from "../Interfaces/stroe-item.interface";
import { AngularFireDatabase } from "@angular/fire/compat/database";

@Injectable({ providedIn: 'root' })
export class StoreService {
    itemList: StoreItem[] = [];

    constructor(private fireService: AngularFireDatabase) { }

    fetchItems() {
        return this.fireService.list<StoreItem>('items').valueChanges();
    }

    postItem(item: StoreItem) {
        this.fireService.list<StoreItem>('items').push(item);
    }
}