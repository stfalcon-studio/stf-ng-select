import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StfNgSelectComponent } from './stf-ng-select/stf-ng-select.component';
import { StfNgSelectOptionComponent } from './stf-ng-select/stf-ng-select-option.component';
import { StfNgSelectButtonComponent } from './stf-ng-select/stf-ng-select-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StfNgSelectComponent,
    StfNgSelectOptionComponent,
    StfNgSelectButtonComponent
  ],
  exports: [
    StfNgSelectComponent,
    StfNgSelectOptionComponent,
    StfNgSelectButtonComponent
  ],
})
export class StfNgSelectModule { }
