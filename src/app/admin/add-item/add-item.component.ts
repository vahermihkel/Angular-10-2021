import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  // siin ühendus itemService-ga
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log(form.value);
    this.itemService.itemsInService.push(form.value);
  }
  // siia teeme sisestuse funktsiooni
  // ja pushime service-i sisse uue eseme
}
