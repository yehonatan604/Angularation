import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Cart } from "../Interfaces/cart.interface";
import { CartService } from "./cart.service";

@Injectable()
export class ShoppingListService {
    itemChanged = new Subject();
    private shoppingList: Cart[] = [];

    constructor(private cartService: CartService) { 
        console.log(this.shoppingList);
    }

    getShoppingCart(): Cart[] {
        return this.shoppingList;
    }

    addToList(item: Cart) {
        let index = this.shoppingList.findIndex(e => e.item.title === item.item.title);
        
        this.shoppingList.filter( e => e.item.title === item.item.title).length !> 0 ? 
        this.shoppingList[index].quantity += item.quantity:
        this.shoppingList.push(item);
        
        this.itemChanged.next(item);
    }

    removeFromList(item: Cart) {
        this.shoppingList = this.shoppingList.filter(x => x != item);
        this.itemChanged.next(item);
    }
    
    changeQuantity(quantity: number, item: Cart) {
        let index = this.shoppingList.findIndex(e => e.item.title === item.item.title);
        this.shoppingList[index].quantity = quantity;
        let arr = [...this.shoppingList];
        this.shoppingList = arr;
        this.itemChanged.next(item);
    }

    addToCart() {
        this.cartService.addToCart(this.shoppingList);
        this.shoppingList = [];
    }
}