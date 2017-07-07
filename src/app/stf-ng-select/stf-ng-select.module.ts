import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StfNgSelectComponent } from './stf-ng-select/stf-ng-select.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StfNgSelectComponent],
  exports: [StfNgSelectComponent],
})
export class StfNgSelectModule { }
