import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {Location} from '@angular/common';
import {Product} from "../definitions";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cartItems$ = this._cart.items$;

  constructor(
    private _cart: CartService,
    private _location: Location
  ) { }

  ngOnInit(): void {
  }

  public back() {
    this._location.back();
  }

  public remove(product: Product) {
    this._cart.remove(product);
  }
}
