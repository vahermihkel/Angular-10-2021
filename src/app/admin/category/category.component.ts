import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: string[] = [];

              // dependency injection
  constructor(private categoryService: CategoryService) { }

  // lifecycle hook
  ngOnInit(): void {
    // this.categories = this.categoryService.categoriesInService;
    // await async promise
    this.categoryService.getCategoriesFromDatabase().subscribe(catFromDb => {
      if (catFromDb) {
        this.categories = catFromDb;
        this.categoryService.categoriesInService = catFromDb;
      }
    })
  }

  onRemoveCategory(category: string) {
    let index = this.categoryService.categoriesInService.indexOf(category);
    this.categoryService.categoriesInService.splice(index,1);
  }

  onSubmit(form:NgForm) {
    this.categoryService.categoriesInService.push(form.value.category);
    this.categoryService.addCategoriesToDatabase().subscribe();
  }

  // ngOnDestroy() {}
}


// constructor(private nimiService: NimiService) - dependency injection /sõltuvuse süstimine
// ngOnInit(), ngOnDestroy() - lifecycle hook   / elutsükli funktsioonid
// htmls: {{ muutuja }} - string interpolation  / väljanäitamine (string kujul)
// [disabled]="muutuja.length == 3" - property binding / html atribuudi muutmine
// (click)="funktsioonMiskÄimaLäheb()", (ngSubmit)="" - event binding / sündmuse sidumine
// *ngFor, *ngIf, [formGroup]="form", ngModel - Angulari direktiivid