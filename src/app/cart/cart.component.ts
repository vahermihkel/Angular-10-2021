import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
          // koolon annab tüübi, ükskõik mis massiiv on tüübiks
          // võrdusmärgiga annan väärtust
  cartItems: any[] = [];
  sumOfCart = 0;
  
  // constructorisse ühenduse CartService-i osas
  // vaadake kuidas Home-s tegime
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.cartItemsInService;
    this.sumOfCart = 0;
    // sumOfCardi väärtuseks 0
    // [{title: "Ese1", price: 100},{title: "Ese2", price: 200},{title: "Ese2", price: 200} ].forEach()
  // this.cartItems.forEach({title: "Ese1", price: 100} => ...)
  // this.cartItems.forEach({title: "Ese2", price: 200} => ...)
  // this.cartItems.forEach({title: "Ese2", price: 200} => ...)

  //this.cartItems.forEach({title: "Ese1", price: 100} =>  100   =  0  + 100 )
  //this.cartItems.forEach({title: "Ese2", price: 200} =>  300   =  100  + 200 )
  //this.cartItems.forEach({title: "Ese2", price: 200} =>  500   =  300  + 200 )

    this.cartItems.forEach(item => this.sumOfCart = this.sumOfCart + item.hind)
  }

  deleteItemFromCart(cartItem: any) {
    let index = this.cartService.cartItemsInService.indexOf(cartItem);
    this.cartService.cartItemsInService.splice(index,1);
    this.cartItems = this.cartService.cartItemsInService;
    this.sumOfCart = 0;
    this.cartItems.forEach(item => this.sumOfCart = this.sumOfCart + item.hind)
  }

  emptyCart() {
    this.cartService.cartItemsInService = [];
    this.cartItems = this.cartService.cartItemsInService;
    this.sumOfCart = 0;
    this.cartItems.forEach(item => this.sumOfCart = this.sumOfCart + item.hind)
  }

}
