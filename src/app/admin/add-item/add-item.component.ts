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
    if (form.valid) {
      console.log(form.value);
      console.log(form);
      this.itemService.itemsInService.push(form.value);
    }
    console.log("VAJUTASID NUPPU")
  }
  // siia teeme sisestuse funktsiooni
  // ja pushime service-i sisse uue eseme
}
