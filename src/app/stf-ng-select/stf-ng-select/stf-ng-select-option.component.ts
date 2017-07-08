import { Component, OnInit, ElementRef, Input, OnDestroy } from '@angular/core';
import { eventHub } from './even-hub';
import { findAncestor } from './dom-lib'

@Component({
  selector: 'stf-option',
  templateUrl: './stf-select-option.html',
})
export class StfNgSelectOptionComponent implements OnInit, OnDestroy {
  @Input() value;
  isSelected: boolean;
  selectId: string;

  constructor(private el: ElementRef) { }

  keyDown(event) {
    switch (event.keyCode) {
      case 13:
        this.selectValue();
        event.preventDefault();
        event.stopPropagation();
        break;
    }
  }

  ngOnDestroy() {
    eventHub.$emit("stf-select-option.destroyed",
      {
        option: this,
        selectId: this.selectId,
      }
    );
  }

  ngOnInit() {
    const el = findAncestor(this.el.nativeElement, '.stf-select__options-wraped');
    if (el) {
      this.selectId = el.getAttribute("id");
    }

    eventHub.$emit("stf-select-option.mounted",
      {
        option: this,
        selectId: this.selectId,
      }
    );

    console.log(this);
  }

  selectValue() {
    eventHub.$emit("stf-select-option.selected",
      {
        value: this.value,
        selectId: this.selectId,
      }
    );
    this.isSelected = true;
  }
}

