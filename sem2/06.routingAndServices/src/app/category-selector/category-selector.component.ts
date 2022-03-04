import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Category } from "../definitions";

@Component({
  selector: "app-category-selector",
  templateUrl: "./category-selector.component.html",
  styleUrls: ["./category-selector.component.scss"]
})
export class CategorySelectorComponent {
  @Input() public categories: Array<Category> = [];
  @Output() public selected = new EventEmitter<Category>();

  public onCategoryClicked(category: Category): void {
    this.selected.emit(category);
  }
}
