import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgeVerificationComponent } from './age-verification/age-verification.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CategorySelectorComponent } from './category-selector/category-selector.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { SortPipe } from './sort.pipe';
import {RouterModule} from "@angular/router";
import { ShopComponent } from './shop/shop.component';
import {HttpClientModule} from "@angular/common/http";
import {ShopGuardGuard} from "./shop-guard.guard";
import {CartComponent} from "./cart/cart.component";
import {ProductComponent} from "./product/product.component";

@NgModule({
  declarations: [
    AppComponent,
    AgeVerificationComponent,
    CategorySelectorComponent,
    ProductsListComponent,
    SortPipe,
    ShopComponent,
    CartComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'age-verification', component: AgeVerificationComponent },
      {
        path: 'shop/:categoryId',
        component: ShopComponent,
        canActivate: [ShopGuardGuard]
      },
      {
        path: 'shop',
        component: ShopComponent,
        canActivate: [ShopGuardGuard]
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      { path: '**', redirectTo: '/age-verification' }
    ]),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
