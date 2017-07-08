import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StfNgSelectComponent } from './stf-ng-select/stf-ng-select.component';
import { StfNgSelectOptionComponent } from "app/stf-ng-select/stf-ng-select/stf-ng-select-option.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StfNgSelectComponent,
    StfNgSelectOptionComponent
  ],
  exports: [
    StfNgSelectComponent,
    StfNgSelectOptionComponent
  ],
})
export class StfNgSelectModule { }
