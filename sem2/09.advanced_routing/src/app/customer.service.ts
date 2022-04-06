import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private _customerAge!: number;

  public get isOfAge() { return this._customerAge && this._customerAge > 18 }

  constructor() { }

  public setAge(age: number): void {
    this._customerAge = age;
  }
}
