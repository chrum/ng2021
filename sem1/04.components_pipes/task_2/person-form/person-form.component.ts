import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  public name3: string = '';
  public workspaces = ['Angular', 'React', 'Vue'];
  public chosenWorkspace = 'Angular';

  @Output() public addPerson = new EventEmitter<{ name: string, chosenWorkspace: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  public submit() {
    if (this.name3.trim()) {
      this.addPerson.emit({
        name: this.name3,
        chosenWorkspace: this.chosenWorkspace
      })
    }
  }

}
