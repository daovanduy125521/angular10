import { Component } from "@angular/core";
import { AlertComponent } from "../alert.component";

@Component({
    selector: 'app-component-outlet',
    template: `
      <button (click)="loadComponent()">Tải Component</button>
      <ng-container *ngComponentOutlet="currentComponent"></ng-container>
    `
})
export class ComponentOutletComponent {
    currentComponent: any = null;

    loadComponent() {
        this.currentComponent = AlertComponent;
    }
}
