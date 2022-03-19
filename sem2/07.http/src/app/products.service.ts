import { Injectable } from '@angular/core';
import {Category} from "./definitions";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  getCategories() {
    const URL = 'https://edu.chrum.it/ng2021/data/products.json';
    return this._http.get<Array<Category>>(URL);
  }
}
