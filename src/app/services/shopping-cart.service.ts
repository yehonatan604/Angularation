import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Cart } from "../Interfaces/cart.interface";

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
    itemAdded = new Subject();

    private shoppingCart: Cart[] = []

    constructor(private http: HttpClient) { }

    getShoppingCart(): Cart[] {
        return [...this.shoppingCart]
    }

    addToCart(item: Cart) {
        this.shoppingCart.push(item);
        this.itemAdded.next(item);
    }

    getCartTotal(): number {
        let total: number = 0;
        for (let item of this.shoppingCart) {
            total += item.item.price;
        }
        return total;
    }

    removeFromCart(item: Cart) {
        this.shoppingCart = this.shoppingCart.filter(x => x != item);
    }

    changeQuantityInCart(item: Cart, num: number) {
        this.shoppingCart.map(x => {
            return x == item ? item.quantity = num : item.quantity
        })
    }

    purchase() {
        this.http.put<Cart[]>('https://band-project-864cf-default-rtdb.firebaseio.com/cart.json', this.shoppingCart)
        .subscribe();
        this.shoppingCart = [];
    }
}