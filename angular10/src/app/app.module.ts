import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildrenComponent } from './children/children.component';
import { RequiredLabelDirective } from './required-label.directive';
import { CurrencyVndPipe } from './pipe/currency.pipe';
import { DecimalPipe } from '@angular/common';
import { HostComponent } from './service/component-factory-resolve/host/host.component';
import { HelloComponent } from './service/component-factory-resolve/hello.component';
import { TemplateRefComponent } from './service/view-container-ref/template-ref/template-ref.component';
import { ComponentOutletComponent } from './service/view-container-ref/component-outlet/component-outlet.component';
import { AlertComponent } from './service/view-container-ref/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildrenComponent,
    RequiredLabelDirective,
    CurrencyVndPipe,
    HostComponent,
    HelloComponent,
    TemplateRefComponent,
    ComponentOutletComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
