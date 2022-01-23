import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Person} from "../app.component";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() public personList: Array<Person> = [];
  @Output() public removeAtIndex = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  public delete(idx: number) {
    this.removeAtIndex.emit(idx);
  }

}
