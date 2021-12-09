import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoriesInService: string[] = [];

  constructor(private http: HttpClient) { }

  addCategoriesToDatabase() {
    return this.http.put("https://webshop-10-2021-e7e86-default-rtdb.europe-west1.firebasedatabase.app/categories.json", this.categoriesInService);
  }

  getCategoriesFromDatabase() {
    return this.http.get<string[]>("https://webshop-10-2021-e7e86-default-rtdb.europe-west1.firebasedatabase.app/categories.json");
  }
}
