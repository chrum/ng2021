import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgeVerificationComponent } from './age-verification/age-verification.component';
import { FormsModule } from '@angular/forms';
import { CategorySelectorComponent } from './category-selector/category-selector.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AgeVerificationComponent,
    CategorySelectorComponent,
    ProductsListComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
