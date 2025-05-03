import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from "@angular/core";
import { AlertComponent } from "../alert.component";

@Component({
    selector: 'app-component-outlet',
    template: `
      <button (click)="loadComponent()">Tải Component</button>
      <ng-container *ngComponentOutlet="currentComponent"></ng-container>
      <button (click)="loadComponent2()">Tải Component 2</button>
      <ng-container #container></ng-container>
      <button (click)="removeComponent()">Xoá Component 2</button>
    `
})
export class ComponentOutletComponent {
    @ViewChild('container', { read: ViewContainerRef }) containerRef!: ViewContainerRef;
    currentComponent: any = null;
    constructor(private resolver: ComponentFactoryResolver) {}

    loadComponent() {
        this.currentComponent = AlertComponent;
    }
    loadComponent2() {
        const factory = this.resolver.resolveComponentFactory(AlertComponent);
        this.containerRef.createComponent(factory)
    }
    removeComponent() {
        this.containerRef.clear()
    }
}
