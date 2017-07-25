import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { eventHub } from './even-hub';
import { findAncestor } from './dom-lib'

@Component({
  selector: 'stf-ng-select-button',
  templateUrl: './stf-ng-select-button.component.html',
  styleUrls: ['./stf-ng-select-button.component.css']
})
export class StfNgSelectButtonComponent implements OnInit, OnDestroy {
  selectId: string;

  constructor(private el: ElementRef) { }

  ngOnDestroy() {
    eventHub.$emit('stf-select-option.destroyed',
      {
        option: this,
        selectId: this.selectId,
      }
    );
  }

  ngOnInit() {
    setTimeout(
      () => {
        const el = findAncestor(this.el.nativeElement, '.stf-select__options-wraped');
        if (el) {
          this.selectId = el.getAttribute('id');
        }


        eventHub.$emit('stf-select-option.mounted',
          {
            option: this,
            selectId: this.selectId,
          }
        );

        this.el.nativeElement
          .querySelector('button')
          .addEventListener('click', () => {
            eventHub.$emit('stf-select-button.clicked',
              {
                selectId: this.selectId,
              }
            );
          });
      }, 0);
  }

  onEnter(event) {
    this.el.nativeElement
      .querySelector('button')
      .click()
    ;

    return true;
  }

}
