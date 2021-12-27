import { Component, OnInit } from '@angular/core';

class Person{
  personName:string;
  constructor(name:string){
    this.personName = name;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  maxPersonsInRoom :number;
  name:string ="";
  personList: Array<Person>=[];
  constructor() {
    this.maxPersonsInRoom =16;
  }

  ngOnInit(): void {
  }
  addPerson(){
    if(!this.name)
      return;
    this.personList.push(new Person(this.name));
    this.name="";
  }
  removePerson(index:number){
    this.personList.splice(index,1)
  }
  clearList(){
    this.personList =[];
  }
}

