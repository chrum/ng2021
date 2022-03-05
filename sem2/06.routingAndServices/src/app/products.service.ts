import { Injectable } from '@angular/core';
import {categories} from "./data";
import {Category} from "./definitions";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _allCategories: Array<Category> = categories;

  constructor() { }

  getCategories(): Array<Category> {
    return this._allCategories;
  }
}
