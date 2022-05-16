import {Component} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {CustomerService} from "../customer.service";
import {ProductsService} from "../products.service";
import {debounceTime} from "rxjs";

@Component({
  selector: 'app-age-verification',
  templateUrl: './age-verification.component.html',
  styleUrls: ['./age-verification.component.scss']
})
export class AgeVerificationComponent {
  public categories$ = this._productsService.categories$;

  public years: Array<number> = [];
  private _currentYear = new Date().getFullYear();

  public ageForm = this._fb.group({
    age: ['', [Validators.required]],
    year: [null, [Validators.required]],
    categoryId: [null, [Validators.required]]
  })

  public ageControlName = 'age';

  public get ageGetter() { return this.ageForm.get('age') as FormControl };
  public get year() { return this.ageForm.get('year') as FormControl };


  public constructor(
    private _router: Router,
    private _customerService: CustomerService,
    private _productsService: ProductsService,
    private _fb: FormBuilder
  ) {
    const minYear = this._currentYear - 100;
    for (let year = this._currentYear; year >= minYear; year--) {
      this.years.push(year);
    }
  }

  ngOnInit () {
    this.ageGetter.valueChanges
      .pipe(
        debounceTime(1000)
      )
      .subscribe((age) => {
        if (age < 18) {
          alert('Bad age!');
        }
      })
  }

  public verify(): void {
    const categoryId = this.ageForm.value.categoryId;

    const age = this.ageForm.value.age;
    if (age < 18) {
      return alert('You need to be over 18 to access this site');
    }

    const year = +this.ageForm.value.year;
    const ageFromYear = this._currentYear - year;
    if (ageFromYear !== age) {
      return alert('Your age and year you were born do not match');
    }

    alert('Success, access granted!');
    this._customerService.setAge(age);

    this._router.navigate(['/shop', categoryId]);
  }

}
