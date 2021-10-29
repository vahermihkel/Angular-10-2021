import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  //1. Tee muutuja categoriesInService
  // CategoryService sisse - 
  // kui jätan tühja massiivi, pean panema
  // ka tüübi
  categories: any[] = [];

  // 2. Ühendus CategoryService-ga (import)
  constructor(private categoryService: CategoryService) { }

  // 3. Täida categories muutuja service seest
  ngOnInit(): void {
    this.categories = this.categoryService.categoriesInService;
  }

  onRemoveCategory(category: any) {
    let index = this.categoryService.categoriesInService.indexOf(category);
    this.categoryService.categoriesInService.splice(index,1);
  }

  onSubmit(form:any) {
    console.log(form);
    console.log(form.value);
    console.log(form.value.category);
    this.categoryService.categoriesInService.push(form.value.category)
  }

}
