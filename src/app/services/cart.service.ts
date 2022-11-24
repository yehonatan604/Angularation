import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Cart } from "../Interfaces/cart.interface";

@Injectable({ providedIn: 'root' })
export class CartService {
    itemAdded = new Subject();
    private cartURL = 'https://band-project-864cf-default-rtdb.firebaseio.com/cart.json';
    private shoppingCart!: Cart[];

    constructor(private http: HttpClient) {
        this.fetchCart().subscribe(items => this.shoppingCart = items);
    }

    fetchCart() {
        return this.http.get<Cart[]>(this.cartURL);
    }

    updateCart() {
        this.http.put<Cart[]>(this.cartURL, this.shoppingCart)
            .subscribe(items => this.itemAdded.next(items));
    }

    getShoppingCart(): Cart[] {
        return this.shoppingCart;
    }

    addToCart(items: Cart[]) {
        this.shoppingCart = items;
        this.updateCart();
    }

    removeFromCart(cart: Cart) {
        this.shoppingCart = this.shoppingCart.filter(item => item != cart);
        this.ClearCart(cart);
        this.updateCart();
    }
    ClearCart(cart: Cart) {
        this.shoppingCart = [];
        this.updateCart();
    }

    getCartTotal(): number {
        let total: number = 0;
        for (let item of this.shoppingCart) {
            total += item.item.price;
        }
        return total;
    }

    purchase() {
        this.http.put<Cart[]>(this.cartURL, this.shoppingCart).subscribe();
    }
}