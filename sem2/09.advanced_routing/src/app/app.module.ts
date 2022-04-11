import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgeVerificationComponent } from './age-verification/age-verification.component';
import { FormsModule } from '@angular/forms';
import { CategorySelectorComponent } from './category-selector/category-selector.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { SortPipe } from './sort.pipe';
import {RouterModule} from "@angular/router";
import { ShopComponent } from './shop/shop.component';
import {HttpClientModule} from "@angular/common/http";
import {ShopGuardGuard} from "./shop-guard.guard";

@NgModule({
  declarations: [
    AppComponent,
    AgeVerificationComponent,
    CategorySelectorComponent,
    ProductsListComponent,
    SortPipe,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'age-verification', component: AgeVerificationComponent },
      { path: 'shop/:categoryId', component: ShopComponent, canActivate: [ShopGuardGuard] },
      { path: 'shop', component: ShopComponent, canActivate: [ShopGuardGuard]  },
      { path: '**', redirectTo: '/age-verification' }
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
