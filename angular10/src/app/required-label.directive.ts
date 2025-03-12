import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appRequiredLabel]'
})
export class RequiredLabelDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    const label = this.el.nativeElement;
    const star = this.renderer.createText(' *');
    this.renderer.appendChild(label, star);
    this.renderer.setStyle(label, 'color', 'red'); 
  }
}