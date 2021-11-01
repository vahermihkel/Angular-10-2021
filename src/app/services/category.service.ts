import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoriesInService = ['philips','sony','dell','lg'];

  constructor() { }
}
