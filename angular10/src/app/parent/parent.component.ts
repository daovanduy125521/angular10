import { Component, DoCheck, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ChildrenComponent } from '../children/children.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, DoCheck {
  @ViewChildren('element') elements: QueryList<ElementRef>;
  number: Number = 1;

  constructor() { }
  ngDoCheck(): void {
    console.log("number", this.number);
  }

  ngAfterViewInit() {
    // Sử dụng children để làm việc với các component con
    console.log(this.elements.toArray());  // In ra danh sách các child component
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.number = 2;
    }, 10000);
  }

}
