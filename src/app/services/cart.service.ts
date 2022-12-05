import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { map, Subject } from "rxjs";
import { Cart } from "../Interfaces/cart.interface";
import { UsersService } from "./users.service";

@Injectable({ providedIn: 'root' })
export class CartService {
    itemChanged = new Subject();
    private shoppingCart!: Cart[];

    constructor(private usersService: UsersService, private fireService: AngularFireDatabase) {
        this.fetchCart().subscribe(items => {
            this.shoppingCart = items.filter(e => {
                this.usersService.loggedInUser === undefined ?
                    e.userId === 0 :
                    e.userId === this.usersService.loggedInUser.id;
            });
        });
    }

    fetchCart() {
        return this.fireService.list<Cart>('cart').valueChanges()
            .pipe(map(response => {
            const tempArr: Cart[] = [];
            for (let key in response) {
                if (response.hasOwnProperty(key)) {
                    tempArr.push({...response[key]});
                }
           }
            this.shoppingCart = tempArr;
            return tempArr;
        }));
    }

    updateCart() {
            this.fireService.list<Cart>('cart').remove();
            this.shoppingCart.forEach(item => this.fireService.list<Cart>('cart').push(item));
            this.itemChanged.next(this.shoppingCart);
    }

    addToCart(items: Cart[]) {
        let index = this.usersService.loggedInUser !== undefined ? 
         items.findIndex(e => {e.userId === this.usersService.loggedInUser.id}) :
         0;
        this.fireService.list<Cart>('cart').push(items[index]);
    }

    removeFromCart(cart: Cart) {
        this.shoppingCart = this.shoppingCart.filter(items => items.item.title !== cart.item.title);
        this.updateCart();
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

    purchase() {
        this.fireService.list<Cart[]>('sales').push(this.shoppingCart);
        this.clearCart();
    }
}