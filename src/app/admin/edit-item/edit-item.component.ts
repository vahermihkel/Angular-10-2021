import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  editItemForm: any; // FormGroup (+ import üles)
  categories: any[] = [];
  item: any;

  constructor(private route: ActivatedRoute,
    private itemService: ItemService,
    private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categories = this.categoryService.categoriesInService;

    let itemId = this.route.snapshot.paramMap.get("itemId");
    this.item = this.itemService.itemsInService.find(toode => toode.title == itemId);
    console.log(this.item);
    this.editItemForm = new FormGroup({
      title: new FormControl(this.item.title),
      imgSrc: new FormControl(this.item.imgSrc),
      price: new FormControl(this.item.price),
      category: new FormControl(this.item.category),
      isActive: new FormControl(this.item.isActive),
    })    
  }

  onSubmit() {
    //{pealkiri: "INPUTISISESTUS", price: "input"}
    if (this.editItemForm.valid) {
      console.log(this.editItemForm);
      console.log(this.editItemForm.value);
      let index = this.itemService.itemsInService.indexOf(this.item);
      this.itemService.itemsInService[index] = this.editItemForm.value;
    }
  }
}
