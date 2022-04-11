import { Component } from '@angular/core';
import {Category, CategoryWithProducts, Product} from "../definitions";
import {ProductsService} from "../products.service";
import {CustomerService} from "../customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {tap} from "rxjs";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  public allCategories$ = this._productsService.categoriesWithProducts$
    .pipe(
      tap((data) => {
        const categoryId = this._route.snapshot.params['categoryId'];

        const selected = data.find((item) => +item.id === Number(categoryId));
        if (selected) {
          this.onCategorySelected(selected);
        }

      })
    );
  public productsToDisplay: Array<Product> = [];
  public productsInCart: Array<Product> = [];

  constructor(
    private _productsService: ProductsService,
    private _customerService: CustomerService,
    private _router: Router,
    private _route: ActivatedRoute
    ) {
    // if (!this._customerService.isOfAge) {
    //   this._router.navigate(['/age-verification']);
    // }
  }

  public onCategorySelected(category: CategoryWithProducts): void {
    this.productsToDisplay = category.products;
  }

  public addToCart(product: Product): void {
    console.log("Adding to cart: " + product.name);
    this.productsInCart.push(product);
  }

}
