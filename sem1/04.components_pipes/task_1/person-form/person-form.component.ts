import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  public name: string = '';
  public familyName: string = '';

  @Output() fullnameChange = new EventEmitter<string|null>();

  public editing = true;

  constructor() { }

  ngOnInit(): void {
  }

  public submit() {
    this.editing = false;
    this.fullnameChange.emit(this.name + ' ' + this.familyName);
  }

  public edit() {
    this.editing = true;
    this.fullnameChange.emit(null);
  }

}
