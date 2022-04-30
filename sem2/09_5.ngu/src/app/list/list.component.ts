import {ChangeDetectionStrategy, Component, ContentChild, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  @Input() data: Array<any> = [];

  @ContentChild('itemTemplate') itemTemplate!: TemplateRef<any>;
  @ViewChild('defaultItemTemplate') defaultItemTemplate!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }
}
