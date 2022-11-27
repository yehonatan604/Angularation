import { Component, OnInit } from '@angular/core';
import { CategoryTypes } from 'src/app/enums/category-types.enum';
import { StoreItem } from 'src/app/Interfaces/stroe-item.interface';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnInit {
  albums: StoreItem[] = [];

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.fetchAlbums();
  }

  fetchAlbums() {
    this.storeService.fetchItems()
      .subscribe(items => {
        this.albums = items.filter(item => item.description === "Album")
        console.log(this.albums)
      });
  }
}
