import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StoreItem } from 'src/app/Interfaces/stroe-item.interface';
import { LoremIpsumService } from 'src/app/services/lorem-ipsum.service';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { StoreService } from 'src/app/services/store.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-lightbox.component.ts',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit, OnDestroy, StoreItem {
  image!: any;
  title!: any;
  price!: number;
  description: string = this.loremService.lorem;
  subscription = new Subscription();


  constructor(public activatedRoute: ActivatedRoute,
    private storeService: StoreService,
    private loremService: LoremIpsumService,
    private shoppingListService: ShoppingListService,
    private usersService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
    this.subscribeRouteParams();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onBackToStore() {
    this.router.navigate(['/store']);
  }

  onPurchase() {
    this.storeService.fetchItems().subscribe(items => {
      items.forEach(item => {
        if (item.title == this.title) {
          this.description = item.description
        }
      });
      let x = {
        item: {
          price: this.price,
          image: this.image,
          title: this.title,
          description: this.description
        },
        quantity: 1,
        userId: (this.usersService.loggedInUser == null ? 0 : this.usersService.loggedInUser.id)
      }
      this.shoppingListService.addToList(x);
      this.shoppingListService.itemChanged.next(x);
      this.router.navigate(['/store']);
    });
  }

  subscribeRouteParams() {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      this.title = params['img'];
      this.storeService.fetchItems().subscribe(items => {
        items.forEach(item => {
          if (item.title == this.title) {
            this.image = item.image;
            this.price = item.price;
          }
        });
      });
    });
  }

  onClickBack() {
    this.storeService.fetchItems().subscribe(items => {
      for (let i = 1; i < items.length; i++) {
        if (items[i].title == this.title) {
          this.router.navigate(['/lightbox', items[i - 1].title]);
        }
      }
    });
  }

  onClickNext() {
    this.storeService.fetchItems().subscribe(items => {
      for (let i = 0; i < items.length - 1; i++) {
        if (items[i].title == this.title) {
          this.router.navigate(['/lightbox', items[i + 1].title]);
        }
      }
    });
  }
}
