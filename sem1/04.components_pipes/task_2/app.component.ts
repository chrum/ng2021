import {Component} from '@angular/core';

export class Person {
  name: string;
  workspace: string;

  constructor(name: string, workspace: string) {
    this.name = name;
    this.workspace = workspace;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public maxPeople: number = 16;
  public currentPeople: number = 3;
  public colorClass: string = "basic";

  public personList: Array<Person> = [
    {
      name: "Ciri",
      workspace: "Angular"
    },
    {
      name: "Triss",
      workspace: "Vue"
    },
    {
      name: "Yennefer",
      workspace: "React"
    },
  ];

  public addPerson(data: { name: string, chosenWorkspace: string}) {
    if (this.increasePeople()) {
      this.personList.push({name: data.name, workspace: data.chosenWorkspace,});
    }
  }


  public increasePeople() {
    if (this.currentPeople < this.maxPeople) {
      this.currentPeople++;
      this._updateColor();
      return true; //line neded in addPerson() to prevent adding people when counter is maxed.
    } else {
      alert("Can't let any more people in");
      return false; //same as above.
    }
  }

  public decreasePeople() {
    if (this.currentPeople > 0) {
      this.currentPeople--;
      this._updateColor();
    } else alert("Room is already empty")
  }


  private _updateColor() {
    if (this.currentPeople === this.maxPeople) {
      this.colorClass = "max";
    } else if (this.currentPeople + 3 >= this.maxPeople) {
      this.colorClass = "warning";
    } else {
      this.colorClass = "basic"
    }
  }


  public clearPersonList() {
    this.personList = [];
    this.currentPeople = 0;
    this._updateColor();
  }

  public removePersonAtIndex(index: number) {
    this.personList.splice(index, 1);
    this.decreasePeople();
  }

}
