import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Product } from "../definitions";

@Component({
  selector: "app-products-list",
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.scss"]
})
export class ProductsListComponent {
  @Input() public products: Array<Product> = [];
  @Output() buy = new EventEmitter<Product>();

  public sortDirection: string = "asc";

  addToCart(product: Product): void {
    this.buy.emit(product);
  }
}
