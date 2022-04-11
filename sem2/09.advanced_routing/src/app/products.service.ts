import { Injectable } from '@angular/core';
import {Category, CategoryWithProducts, Product} from "./definitions";
import {HttpClient} from "@angular/common/http";
import {delay, forkJoin, map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _products$ = this._http.get<Array<Product>>('https://edu.chrum.it/data/clean_products.json');
  public categories$ = this._http.get<Array<Category>>('https://edu.chrum.it/data/categories.json');

  public categoriesWithProducts$ = forkJoin([
    this._products$,
    this.categories$
  ]).pipe(
    map(([products, categories]) => {
      return this._mergeCategoriesWithProducts(products, categories);
    }),
    delay(500)
  );

  constructor(private _http: HttpClient) { }

  private _mergeCategoriesWithProducts(
    products:Array<Product>, categories:Array<Category>
  ): Array<CategoryWithProducts> {
    const categoriesWithProducts: Array<CategoryWithProducts> = [];

    for (let category of categories) {
      const productsFromCategory = products
        .filter((p) => p.category === category.id);

      categoriesWithProducts.push({
        id: category.id,
        name: category.name,
        products: productsFromCategory
      })
    }

    return categoriesWithProducts;
  }
}
