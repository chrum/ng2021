import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {Category, CategoryWithProducts} from "../definitions";

@Component({
  selector: "app-category-selector",
  templateUrl: "./category-selector.component.html",
  styleUrls: ["./category-selector.component.scss"]
})
export class CategorySelectorComponent {
  @Input() public categories: Array<CategoryWithProducts> = [];
  @Output() public selected = new EventEmitter<CategoryWithProducts>();

  public onCategoryClicked(category: CategoryWithProducts): void {
    this.selected.emit(category);
  }
}
