import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ChildrenComponent } from '../children/children.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  @ViewChildren('element') elements: QueryList<ElementRef>;

  constructor() { }

  ngAfterViewInit() {
    // Sử dụng children để làm việc với các component con
    console.log(this.elements.toArray());  // In ra danh sách các child component
  }

  ngOnInit(): void {
  }

}
