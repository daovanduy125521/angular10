import { Component, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-template-ref',
  templateUrl: './template-ref.component.html'
})
export class TemplateRefComponent {
  @ViewChild('myTemplate') templateRef!: TemplateRef<any>;

  constructor() {}

  ngAfterViewInit() {
    // templateRef hiện có thể dùng để render template trong code
    console.log(this.templateRef);
  }
}