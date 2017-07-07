import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StfNgSelectModule } from './stf-ng-select/stf-ng-select.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StfNgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
