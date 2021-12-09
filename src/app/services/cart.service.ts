import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemsInService: {cartItem: Item, quantity: number}[] = [];
  cartChanged = new Subject();

  constructor() { }

  calculateSumOfCart() {
    let sumOfCart = 0;
    this.cartItemsInService.forEach(item => sumOfCart = sumOfCart + item.cartItem.price * item.quantity);
    return sumOfCart;
  }
}