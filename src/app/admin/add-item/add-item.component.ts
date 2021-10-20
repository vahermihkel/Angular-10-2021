import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  // siin ühendus itemService-ga
  constructor() { }

  ngOnInit(): void {
  }

  // siia teeme sisestuse funktsiooni
  // ja pushime service-i sisse uue eseme
}
