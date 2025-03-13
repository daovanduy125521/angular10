import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildrenComponent } from './children/children.component';
import { RequiredLabelDirective } from './required-label.directive';
import { CurrencyVndPipe } from './pipe/currency.pipe';
import { DecimalPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildrenComponent,
    RequiredLabelDirective,
    CurrencyVndPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
