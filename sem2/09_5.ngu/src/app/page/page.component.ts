import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  public data = [
    { name: 'Tea', price: 1 },
    { name: 'Bread', price: 2 },
    { name: 'Milk', price: 3 },
  ]

  constructor(private _route: ActivatedRoute) {
  }

  public ngOnInit() {
    if (this._route.snapshot.params.dark) {
      document.body.className = 'dark';
    }
  }


  public onClick(num: number) {
    console.log(num);
  }


}
