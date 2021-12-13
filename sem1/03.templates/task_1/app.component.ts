import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public name: string = '';
  public familyName: string = '';

  public welcome() {
    alert('Welcome ' + this.name + ' ' + this.familyName);
  }

  public byebye() {
    alert('Bye ' + this.name + ' ' + this.familyName);
    this.name = '';
  }

}
