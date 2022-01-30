import { Pipe, PipeTransform } from '@angular/core';
import {Person} from "./app.component";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(personList: Array<Person>, workspace: string, arrLength?: number): Array<Person> {
    console.log('pipe');

    if (workspace === 'All') {
      return personList;
    }

    const filteredList: Array<Person> = [];

    personList.forEach((person) => {
      if (person.workspace === workspace) {
        filteredList.push(person);
      }
    })

    return filteredList;

  }

}
