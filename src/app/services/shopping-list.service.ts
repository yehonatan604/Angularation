import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Cart } from "../Interfaces/cart.interface";
import { CartService } from "./cart.service";

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
    itemAdded = new Subject();
    itemRemoved = new Subject();
    private shoppingList: Cart[] = []

    constructor(private cartService: CartService) { }

    getShoppingCart(): Cart[] {
        return [...this.shoppingList]
    }

    addToList(item: Cart) {
        this.shoppingList.push(item);
        this.itemAdded.next(item);
    }

    removeFromCart(item: Cart) {
        this.shoppingList = this.shoppingList.filter(x => x != item);
        this.itemAdded.next(item);
    }
    
    getCartTotal(): number {
        let total: number = 0;
        for (let item of this.shoppingList) {
            total += item.item.price;
        }
        return total;
    }

    addToCart() {
        this.cartService.addToCart(this.shoppingList);
        this.shoppingList = [];
    }
}