import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoriesInService = ['Kat1','Kat2','Kat3','Kat4'];

  constructor() { }
}
