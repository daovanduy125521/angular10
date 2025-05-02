import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit } from '@angular/core';
import { HelloComponent } from '../hello.component';


@Component({
  selector: 'app-host',
  templateUrl: './host.component.html'
})
export class HostComponent implements AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    const factory = this.resolver.resolveComponentFactory(HelloComponent);
    const componentRef = this.container.createComponent(factory);
    componentRef.instance.name = 'Từ Duy';
  }
}
