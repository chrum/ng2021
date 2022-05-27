import {Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Product} from '../definitions';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() data!: Product;
  @Output() addToCart = new EventEmitter<Product>();
  constructor() {
  }

  toCart() {
    this.addToCart.emit(this.data);
  }
}
