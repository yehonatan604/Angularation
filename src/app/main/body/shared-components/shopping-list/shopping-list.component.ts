import { Component, OnInit, Input } from '@angular/core';
import { Cart } from 'src/app/Interfaces/cart.interface';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {}
  @Input() currentCart!: Cart[];
  @Input() sender!: string;

  ngOnInit(): void {
    this.shoppingListService.itemChanged.subscribe(()=> {
      this.currentCart = this.shoppingListService.getShoppingCart()
    });
  }
}
