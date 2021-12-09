import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { CartService } from '../services/cart.service';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // date = new Date();
  // hind = 19997.99;
  // protsent = 0.78;
  // lause = "Tere tulemast";
  // nimi = "mihkel peeter joosep vaher";
  //images = [700, 533, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [
    {url: "https://picsum.photos/id/700/900/500", header: "h1", text: "t1", alt: "a1"},
    {url: "https://picsum.photos/id/700/900/533", header: "h2", text: "t2", alt: "a2"},
    {url: "https://picsum.photos/id/700/900/807", header: "h3", text: "t3", alt: "a3"},
    {url: "https://picsum.photos/id/700/900/123", header: "h4", text: "t4", alt: "a4"},
  ]

  items: Item[] = [];
  sortTitleAsc = true;
  sortPriceAsc = true;
  wordCount = 4;

  constructor(private cartService: CartService,
    private itemService: ItemService) { }

  ngOnInit(): void {
    //this.items = [3,2,1,4];
    // this.items = this.itemService.itemsInService;
    //this.items = [{title: "Ese1"},"Ese2",{price: "ese3"}]
    this.itemService.getItemsFromDatabase().subscribe(itemsFromDb => {
      this.items = itemsFromDb;
      this.itemService.updateItems(itemsFromDb);
    })
  }

  // peale klikk - 1 nupp
  // sortTitleAsc = true;

  // sortTitleAsc = false;
  onSortByTitle() {
    if (this.sortTitleAsc) { // if (this.sortTitleAsc == true)
      this.items.sort((currentItem, nextItem)=> currentItem.title.localeCompare(nextItem.title) );
      this.sortTitleAsc = false;
    } else {
      this.items.sort((currentItem, nextItem)=> nextItem.title.localeCompare(currentItem.title) );
      this.sortTitleAsc = true;
    }
  }

  // JS sort array object string
  // onSortByTitleAsc() {
  //   this.items.sort((currentItem, nextItem)=> currentItem.title.localeCompare(nextItem.title) );
  // }

  // onSortByTitleDesc() {
  //   this.items.sort((currentItem, nextItem)=> nextItem.title.localeCompare(currentItem.title) );
  // }

  // JS sort array object number
  // onSortByPriceAsc() {
  //   this.items.sort((currentItem, nextItem)=> currentItem.price - nextItem.price);
  // }

  // onSortByPriceDesc() {
  //   this.items.sort((currentItem, nextItem)=> nextItem.price - currentItem.price);
  // }

  onSortByPrice() {
    if (this.sortPriceAsc) { // if (this.sortTitleAsc == true)
      this.items.sort((currentItem, nextItem)=> currentItem.price - nextItem.price);
      this.sortPriceAsc = false;
    } else {
      this.items.sort((currentItem, nextItem)=> nextItem.price - currentItem.price);
      this.sortPriceAsc = true;
    }
  }
}