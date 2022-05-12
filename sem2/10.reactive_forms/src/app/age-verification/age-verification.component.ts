import {Component} from '@angular/core';
import {FormGroup, NgModel} from '@angular/forms';
import {Router} from "@angular/router";
import {CustomerService} from "../customer.service";
import {ProductsService} from "../products.service";

@Component({
  selector: 'app-age-verification',
  templateUrl: './age-verification.component.html',
  styleUrls: ['./age-verification.component.scss']
})
export class AgeVerificationComponent {
  public categories$ = this._productsService.categories$;

  public years: Array<number> = [];
  private _currentYear = new Date().getFullYear();

  public constructor(
    private _router: Router,
    private _customerService: CustomerService,
    private _productsService: ProductsService
  ) {
    const minYear = this._currentYear - 100;
    for (let year = this._currentYear; year >= minYear; year--) {
      this.years.push(year);
    }
  }

  public verify(form: FormGroup, ageElelemnt: HTMLElement, yearElement: HTMLElement, ageModel: NgModel, yearModel: NgModel): void {
    const categoryId = form.value.categoryId;

    const age = form.value.age;
    if (age < 18) {
      return alert('You need to be over 18 to access this site');
    }

    const year = +form.value.year;
    const ageFromYear = this._currentYear - year;
    if (ageFromYear !== age) {
      return alert('Your age and year you were born do not match');
    }

    alert('Success, access granted!');
    this._customerService.setAge(age);

    this._router.navigate(['/shop', categoryId]);
  }

}
