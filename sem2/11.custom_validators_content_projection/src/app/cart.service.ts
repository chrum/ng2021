import { Injectable } from '@angular/core';
import {Product} from './definitions';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _data: Array<Product> = [];
  private _items$ = new BehaviorSubject<Array<Product>>([]);
  public items$ = this._items$.asObservable();

  public get items() {
    return this._data;
  }

  constructor() { }

  public add(item: Product) {
    this._data.push(item);
    this._items$.next([...this._data]);
  }

  public remove(item: Product) {
    this._data = this._data.filter((p) => {
      return p !== item;
    })

    this._items$.next(this._data);
  }
}
