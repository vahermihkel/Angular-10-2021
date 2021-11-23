import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { CategoryService } from 'src/app/services/category.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  editItemForm!: FormGroup; // FormGroup (+ import üles)
  categories: string[] = [];
  item!: Item;

  constructor(private route: ActivatedRoute,
    private itemService: ItemService,
    private categoryService: CategoryService,
    private router: Router) { }

// * ülemised muutujad on need mida kasutan HTMLi sees

// * let on muutujad mida kasutan vaid selles funktsioonis

// Kui on vaja kasutada kahes või enamas funktsioonis mingit muutujad, 
//    siis tõstan ta ülemiste juurde

  ngOnInit(): void {
    this.itemService.getItemsFromDatabase().subscribe(itemsFromDb => {
      this.itemService.itemsInService = itemsFromDb;
  //
      this.categories = this.categoryService.categoriesInService;

      let itemId = Number(this.route.snapshot.paramMap.get("itemId"));
      let itemFound = this.itemService.itemsInService.find(toode => toode.id == itemId);
      if (itemFound) {
        this.item = itemFound;
      }
      this.editItemForm = new FormGroup({
        id: new FormControl(this.item.id),
        title: new FormControl(this.item.title),
        imgSrc: new FormControl(this.item.imgSrc),
        price: new FormControl(this.item.price),
        category: new FormControl(this.item.category),
        isActive: new FormControl(this.item.isActive),
      })  
      
    }) // <---
  }

  onSubmit() {
    //{pealkiri: "INPUTISISESTUS", price: "input"}
    if (this.editItemForm.valid) {
      console.log(this.editItemForm);
      console.log(this.editItemForm.value);
      let index = this.itemService.itemsInService.indexOf(this.item);
      this.itemService.itemsInService[index] = this.editItemForm.value;
      this.itemService.addItemsToDatabase().subscribe(()=>{
        this.router.navigateByUrl("/admin/esemed");
      });
    }
  }
}

// routerLink on HTML-s navigeerimiseks
// this.router.navigateByUrl on ts-s navigeerimiseks

// 1. Teha täna uus projekt kus kasutame samu oskusi mida juba teinud
//    oleme aga teises võtmes
// 2. Teha uus projekt, kus harjutame kõiki JavaScripti massiivide
//    manipuleerimisi - .find(), .forEach(), .indexOf(), .splice(),
//        .push(), .split()
// 3. Teha uus projekt Reactis - Angulari konkurent, kus tehakse
//    asju enam-vähem samamoodi