import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input() pageSize: number;
  @Input() totalResults: number;
  @Input() pageNumber: number;
  @Output() changeSize = new EventEmitter();
  @Output() changePage = new EventEmitter();

  pages = [];

  constructor() { }

  ngOnInit() {
    const pages = Math.floor(this.totalResults / this.pageSize);
    for (let i = 0; i < pages; i++) {
      this.pages.push(i);
    }
  }

  clickPage(page: number) {
    this.changePage.emit(page);
  }

  clickSize(size: number) {
    this.changeSize.emit(size);
  }
}
