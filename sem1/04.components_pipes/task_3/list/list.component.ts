import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Person} from "../app.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() personList: Array<Person> = [];
  @Input() availableWorkspaces: Array<string> = [];
  @Output() removeAtIndex = new EventEmitter<number>()

  public selectedWorkspace: string = 'All';

  constructor() {
  }

  ngOnInit(): void {
  }

  removePersonAtIndex(event: any, idx: number) {
    this.removeAtIndex.emit(idx);
  }

}
