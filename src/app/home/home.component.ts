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
  items: Item[] = [];

  constructor(private cartService: CartService,
    private itemService: ItemService) { }

  ngOnInit(): void {
    //this.items = [3,2,1,4];
    this.items = this.itemService.itemsInService;
    //this.items = [{title: "Ese1"},"Ese2",{price: "ese3"}]
  }

  onAddToCart(item: Item){
    this.cartService.cartItemsInService.push(item);
  }
}
