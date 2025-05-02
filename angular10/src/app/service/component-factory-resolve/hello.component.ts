import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<p>Hello {{name}}!</p>`
})
export class HelloComponent {
  @Input() name: string = 'Angular';
}
