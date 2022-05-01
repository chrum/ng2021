import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DOCUMENT} from "@angular/common";

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

  constructor(
    private _route: ActivatedRoute,
    private _renderer: Renderer2,
    @Inject(DOCUMENT) private _document: Document
    ) {
  }

  public ngOnInit() {
    if (this._route.snapshot.params.dark) {
      this._renderer.addClass(this._document.body, 'dark');
    }
  }


  public onClick(num: number) {
    console.log(num);
  }


}
