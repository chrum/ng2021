import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public limit: number = 16;
  public current: number = 6;
  public color: string = 'white';

  public addPeople() {
    if (this.current < this.limit) {
      this.current = this.current + 1;
      this._updateColor();
    } else {
      alert('Max reached');
    }
  }

  public substractPeople() {
    if (this.current > 0) {
      this.current = this.current - 1;
      this._updateColor();
    } else {
      alert('Noone left');
    }
  }

  private _updateColor() {
    if (this.current >= this.limit) {
      this.color = 'red';
    } else if (this.limit - this.current <= 3) {
      this.color = 'orange';

    } else {
      this.color = 'white';

    }
  }

}
