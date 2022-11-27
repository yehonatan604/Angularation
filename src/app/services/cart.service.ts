import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Subject } from "rxjs";
import { Cart } from "../Interfaces/cart.interface";

@Injectable({ providedIn: 'root' })
export class CartService {
    itemChanged = new Subject();
    private cartURL = 'https://band-project-864cf-default-rtdb.firebaseio.com/cart.json';
    private salesURL = 'https://band-project-864cf-default-rtdb.firebaseio.com/sales.json';
    private shoppingCart!: Cart[];

    constructor(private http: HttpClient) {
        this.fetchCart().subscribe(items => this.shoppingCart = items);
    }

    fetchCart() {
        return this.http.get<Cart[]>(this.cartURL)
            .pipe(map(response => {
                const tempArr: Cart[] = [];
                for (let key in response) {
                    if (response.hasOwnProperty(key)) {
                        tempArr.push({...response[key]});
                    }
                }
                return tempArr;
            }));
    }

    updateCart() {
        this.http.put<Cart[]>(this.cartURL, this.shoppingCart).subscribe(() => {
            this.itemChanged.next(this.shoppingCart)
        });
    }

    getShoppingCart(): Cart[] {
        return this.shoppingCart;
    }

    addToCart(items: Cart[]) {
        this.shoppingCart.push(...items);
        this.updateCart();
    }

    removeFromCart(cart: Cart) {
        this.shoppingCart = this.shoppingCart.filter(items => items.item.title !== cart.item.title);
        this.updateCart();
        this.itemChanged.next(cart);
    }

    changeQuantity(quantity: number, item: Cart) {
        let index = this.shoppingCart.findIndex(e => e.item.title === item.item.title);
        this.shoppingCart[index].quantity = quantity;
        this.updateCart();
        this.itemChanged.next(item);
    }

    clearCart() {
        this.shoppingCart = [];
        this.updateCart();
        this.itemChanged.next(this.shoppingCart);
    }

    getCartTotal(): number {
        let total: number = 0;
        for (let item of this.shoppingCart) {
            total += item.item.price;
        }
        return total;
    }

    purchase() {
        this.http.post<Cart[]>(this.salesURL, this.shoppingCart)
            .subscribe(() => this.http.delete<Cart[]>(this.cartURL)
                .subscribe(() => this.clearCart()));
    }
}