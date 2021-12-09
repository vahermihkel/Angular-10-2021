import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  categories: string[] = [];

  constructor(private itemService: ItemService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categories = this.categoryService.categoriesInService;
    this.itemService.getItemsFromDatabase().subscribe(itemsFromDb => {
      this.itemService.updateItems(itemsFromDb);
    })
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      console.log(form);
      this.itemService.addItem(form.value);
      this.itemService.addItemsToDatabase().subscribe();
    }
    console.log("VAJUTASID NUPPU")
  }
}
