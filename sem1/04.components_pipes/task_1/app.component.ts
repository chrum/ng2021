import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public fullname: string|null = '';


  public welcome() {
    alert('Welcome ' + this.fullname);
  }

  public byebye() {
    alert('Bye ' + this.fullname);
  }

  public onFormChanged(fullName: string|null) {
    this.fullname = fullName;
  }

}
