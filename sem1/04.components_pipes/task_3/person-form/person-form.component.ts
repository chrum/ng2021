import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {stringify} from "@angular/compiler/src/util";

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  public name3: string = '';
  @Input() public workspaces: Array<string> = [];
  public chosenWorkspace = 'Angular';

  @Output() userReady = new EventEmitter<{
    name: string,
    choosenWorkspace: string
  }>()


  constructor() { }

  ngOnInit(): void {
  }

  public addPerson() {
    if (this.name3.trim()) {
      this.userReady.emit({
        name: this.name3,
        choosenWorkspace: this.chosenWorkspace
      })
    }
  }

}
