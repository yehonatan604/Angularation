import { Component, OnInit } from '@angular/core';
import { StoreItem } from 'src/app/Interfaces/stroe-item.interface';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-merch-list',
  templateUrl: './merch-list.component.html',
  styleUrls: ['./merch-list.component.css']
})
export class MerchListComponent implements OnInit {
  merchandise!: StoreItem[];
  imgCollection: Array<object> = [];

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.fetchMerchandise();
  }

  fetchMerchandise() {
    this.storeService.fetchItems()
      .subscribe(items => {
        this.merchandise = items.filter(item => item.description === "Merch");
      });
  }
}