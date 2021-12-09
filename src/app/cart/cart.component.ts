import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CartItem } from '../models/cart-item.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
          // koolon annab tüübi, ükskõik mis massiiv on tüübiks
          // võrdusmärgiga annan väärtust
// {id: 12, title: "Ese1", price: 5, category: "Kat1"}
// {id: 12, title: "Ese1", price: 5, category: "Kat1"}

// let ese = {cartItem: {id: 12, title: "Ese1", price: 5, category: "Kat1"}, quantity:2}
// jõuda kas string "", number 1, boolean true/false väärtuseni
// ese.cartItem.price




  cartItems: CartItem[] = [];
  sumOfCart = 0;
  
  // constructorisse ühenduse CartService-i osas
  // vaadake kuidas Home-s tegime
  constructor(private cartService: CartService,
    private cookieService: CookieService) { }

  ngOnInit(): void {
    if (this.cookieService.get("products")) {
      this.cartItems = JSON.parse(this.cookieService.get("products"));
    } else {
      this.cartItems = this.cartService.cartItemsInService;
    }
    this.sumOfCart = this.cartService.calculateSumOfCart();
  }

  onDeleteItemFromCart(cartItem: CartItem) {
    let index = this.cartService.cartItemsInService.indexOf(cartItem);
    this.cartService.cartItemsInService.splice(index,1);
    this.cartItems = this.cartService.cartItemsInService;
    this.sumOfCart = this.cartService.calculateSumOfCart();
    this.cartService.cartChanged.next();
    this.cookieService.set("products",JSON.stringify(this.cartService.cartItemsInService));
  }

  onDeleteOneFromCart(cartItem: CartItem) {
    if (cartItem.quantity > 1) {
      let index = this.cartService.cartItemsInService.findIndex(item => item.cartItem.id == cartItem.cartItem.id);
      this.cartService.cartItemsInService[index].quantity--;
      this.cartItems = this.cartService.cartItemsInService;
      this.sumOfCart = this.cartService.calculateSumOfCart();
      this.cartService.cartChanged.next();
    } else {
      this.onDeleteItemFromCart(cartItem);
    }
    this.cookieService.set("products",JSON.stringify(this.cartService.cartItemsInService));
  }

  onAddToCart(cartItem: CartItem){
    let index = this.cartService.cartItemsInService.findIndex(item => item.cartItem.id == cartItem.cartItem.id);
    this.cartService.cartItemsInService[index].quantity++;
    this.cartItems = this.cartService.cartItemsInService;
    this.sumOfCart = this.cartService.calculateSumOfCart();
    this.cartService.cartChanged.next();
    this.cookieService.set("products",JSON.stringify(this.cartService.cartItemsInService));
  }

  onEmptyCart() {
    this.cartService.cartItemsInService = [];
    this.cartItems = this.cartService.cartItemsInService;
    this.sumOfCart = this.cartService.calculateSumOfCart();
    this.cartService.cartChanged.next();
    this.cookieService.set("products",JSON.stringify(this.cartService.cartItemsInService));
  }

   // sumOfCardi väärtuseks 0
    // [{title: "Ese1", price: 100},{title: "Ese2", price: 200},{title: "Ese2", price: 200} ].forEach()
  // this.cartItems.forEach({title: "Ese1", price: 100} => ...)
  // this.cartItems.forEach({title: "Ese2", price: 200} => ...)
  // this.cartItems.forEach({title: "Ese2", price: 200} => ...)

  //this.cartItems.forEach({title: "Ese1", price: 100} =>  100   =  0  + 100 )
  //this.cartItems.forEach({title: "Ese2", price: 200} =>  300   =  100  + 200 )
  //this.cartItems.forEach({title: "Ese2", price: 200} =>  500   =  300  + 200 )


   //this.cartItems.forEach({cartItem: {title: "Ese1", price: 100}, quantity:1} =>  100   =  0  + 100*1 )
  //this.cartItems.forEach({cartItem: {title: "Ese2", price: 200}, quantity:2} =>  300   =  100  + 200*2 )
  //this.cartItems.forEach({cartItem: {title: "Ese2", price: 200}, quantity:3} =>  500   =  300  + 200*3 )
}
