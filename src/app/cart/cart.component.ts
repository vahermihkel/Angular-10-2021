import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
          // koolon annab tüübi, ükskõik mis massiiv on tüübiks
          // võrdusmärgiga annan väärtust
  cartItems: any[] = [
    {pealkiri: 'ese1', hind: '100'},  // 0
    {pealkiri: 'ese2', hind: '200'}   // 1
  ];

  // kuvage cart.homponenht.HTML-s täpselt samamoodi 
  // nagu home.component.html-s sai tehtud

  // 7 minutit kirjutamiseks
  // 17.00-17.15
  
  // 18.45
  
  constructor() { }

  ngOnInit(): void {
  }

}
