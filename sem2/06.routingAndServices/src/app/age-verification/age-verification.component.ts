import {Component, EventEmitter, Output} from '@angular/core';
import {FormGroup, NgModel} from '@angular/forms';
import {OutletContext} from '@angular/router';

@Component({
  selector: 'app-age-verification',
  templateUrl: './age-verification.component.html',
  styleUrls: ['./age-verification.component.scss']
})
export class AgeVerificationComponent {
  public years: Array<number> = [];
  private _currentYear = new Date().getFullYear();

  public constructor() {
    const minYear = this._currentYear - 100;
    for (let year = this._currentYear; year >= minYear; year--) {
      this.years.push(year);
    }
  }

  public verify(form: FormGroup, ageElelemnt: HTMLElement, yearElement: HTMLElement, ageModel: NgModel, yearModel: NgModel): void {
    console.log(form);
    console.log(ageElelemnt, ageModel);
    console.log(yearElement, yearModel);

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
  }

}
