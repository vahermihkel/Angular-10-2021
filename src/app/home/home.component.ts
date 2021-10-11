import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  esemed = [
    {pealkiri: 'ese1', hind: '100'},  // 0
    {pealkiri: 'ese2', hind: '200'}   // 1
  ];
  lisatud = false;

  constructor() { }

  ngOnInit(): void {
  }

  ostukorviLisamine(){
    console.log("töötab");
    console.log(this.esemed);
    this.esemed[1].hind = "150"; 
    this.lisatud = true;
  }
}
