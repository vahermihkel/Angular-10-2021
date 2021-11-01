import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  categories: any[] = [];

  constructor(private itemService: ItemService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categories = this.categoryService.categoriesInService;
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
