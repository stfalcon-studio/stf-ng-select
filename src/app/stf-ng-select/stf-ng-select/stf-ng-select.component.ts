import { Component, OnInit, ElementRef, Input, Output, EventEmitter, forwardRef, ViewEncapsulation, OnDestroy } from '@angular/core';
import { eventHub } from './even-hub';
import { getPosition, hasPositioFixedAncestor, isMob, addClass, findAncestor } from './dom-lib';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'stf-ng-select',
  templateUrl: './stf-ng-select.component.html',
  styleUrls: ['./stf-ng-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StfNgSelectComponent),
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class StfNgSelectComponent implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() more = false;
  @Input() needFocusInpOnTab = false;
  @Input() optionsWrapClass = '';
  @Input() pending = false;
  @Input() _selected: any;
  @Output() loadMore: EventEmitter<any> = new EventEmitter();

  isFocusSearh = false;
  isOpened = false;
  isNeedHideOption = false;
  hasAncesroFixed = false;
  options: any[] = [];
  selectId = '';

  get elN() {
    return this.el.nativeElement;
  }

  get selected() {
    return this._selected;
  }

  set selected(val) {
    this._selected = val;
    this.propagateChange(this._selected);
  }

  private beforeSetValueFocus = true;
  private selectContainerEl: HTMLElement;
  private inputEl: any;
  private isMob: boolean;
  private onOptionDestroyed: any;
  private onOptionMounted: any;
  private onOpenedSelect: any;
  private optionSelectedCallback: any;
  private runOnResize: any;
  private runOnWindowClick: any;
  private selectOptionsEl: HTMLElement;
  private selectOptionsWrapEl: HTMLElement;

  constructor(private el: ElementRef) { }

  blurSearch() {
    this.isFocusSearh = false;
  }

  focusSearch() {
    this.isFocusSearh = true;
  }

  keyDown(event) {
    switch (event.keyCode) {
      case 40:
        this.keyArrowDown(event);
        break;
      case 38:
        this.keyArrowUp(event);
        break;
      case 27:
        this.close();
        const searchInpitEl = this.elN.querySelector('.stf-select__search-input');
        searchInpitEl && searchInpitEl.focus();
        break;
      case 13:
        if (!this.isOpened) {
          this.makeOpen();
        } else if (!this.selected) {
          const option: any = document.querySelector(`#${this.selectId} .stf-select-option`);
          if (option) {
            option.click();
          }
        } else {
          this.close();
        }

        break;
      case 9:
        setTimeout(() => this.close(), 100);

        break;
      default: {
        if (this.inputEl && (this.inputEl !== document.activeElement)) {

        }
      }
    }
  }

  keyPress(event) {
    if (
      event.keyCode !== 40 && event.keyCode !== 38 &&
      event.keyCode !== 27 && event.keyCode !== 13 && event.keyCode !== 9 &&
      this.inputEl && this.inputEl !== document.activeElement

    ) {
      this.isOpened = true;
      // addClass(this.elN, 'stf-select_opened');

      this.hasAncesroFixed = hasPositioFixedAncestor(this.elN);
      eventHub.$emit('stf-select-option.opened', {
        selectId: this.selectId
      });

      setTimeout(() => {
        this.inputEl && this.inputEl.focus();
      }, 100);

      this.calculatePositionAnsSize();

      event = event || window.event;
      const charCode = event.which || event.keyCode;
      const charTyped = String.fromCharCode(charCode);
      if ((/[\wА-Яа-яїєЇЄь]/).test(charTyped)) {
        this.inputEl.selected = charTyped;
      } else {
        this.inputEl.selected = '';
      }

      const eventntInput = new Event('input');
      this.inputEl.dispatchEvent(eventntInput);

      eventHub.$emit('stf-select.opened', { idSelect: this.selectId });
    }
  }

  ngOnDestroy() {
    document.body.removeChild(this.selectOptionsWrapEl);
    window.removeEventListener('resize', this.runOnResize);
    window.removeEventListener('click', this.runOnWindowClick);
    eventHub.$off('stf-select-option.selected', this.optionSelectedCallback);
    eventHub.$off('stf-select-option.mounted', this.onOptionMounted);
    eventHub.$off('stf-select-option.destroyed', this.onOptionDestroyed);
    eventHub.$off('stf-select.opened', this.onOpenedSelect);
  }

  ngOnInit() {
    this.selectContainerEl = this.elN.querySelector('.stf-select__container');
    this.optToBody();
    this.isMob = isMob();
    this.inputEl = this.elN.querySelector('input');
    this.addwidowResizeListener();
    this.addOutClickListener();

    this.selectId = 's' + (Date.now() * Math.random()).toString().replace('.', '_');

    this.optionSelectedCallback = (event) => {
      if (event.selectId === this.selectId) {
        this.close();
        this.selected = event.value;
        const searchInpitEl = this.elN.querySelector('.stf-select__search-input');
        this.beforeSetValueFocus = true;
        searchInpitEl && searchInpitEl.focus();
        this.beforeSetValueFocus = false;
      }

      if (event.selectId !== this.selectId) {
        this.close();
      }
    };

    this.onOptionMounted = (event) => {
      if (event.selectId === this.selectId) {
        this.options.push(event.option);
      }
    };

    this.onOptionDestroyed = (event) => {
      if (event.selectId === this.selectId) {
        const index = this.options.indexOf(event.option);

        if (index !== -1) {
          this.options.splice(index, 1);
        }
      }
    };

    this.onOpenedSelect = (event) => {
      if (event.selectId !== this.selectId) {
        this.close();
      }
    };

    eventHub.$on('stf-select-option.selected', this.optionSelectedCallback);
    eventHub.$on('stf-select-option.mounted', this.onOptionMounted);
    eventHub.$on('stf-select-option.destroyed', this.onOptionDestroyed);
    eventHub.$on('stf-select.opened', this.onOpenedSelect);

    setTimeout(() => this.selectOptionsEl = <any>this.selectOptionsWrapEl.querySelector('.stf-select__options'), 0);
  }

  makeLoadMore() {
    if (!this.pending && this.more &&
      this.selectOptionsEl.scrollTop
      > ((this.selectOptionsEl.scrollHeight - this.selectOptionsEl.offsetHeight) * 0.66)
    ) {
      this.loadMore.emit({});
    }
  }

  onMouseWheal(event) {
    if ((this.selectOptionsEl.scrollTop >= (this.selectOptionsEl.scrollHeight - this.selectOptionsEl.offsetHeight) &&
      event.deltaY > 0) || ((this.selectOptionsEl.scrollTop === 0) && event.deltaY < 0)
    ) {
      event.preventDefault();
    }

    this.makeLoadMore();
  }
  onSelectFocus(event) {
    if (this.needFocusInpOnTab && !this.beforeSetValueFocus) {
      this.makeOpen();
    }
  }
  open(event) {
    this.makeOpen();
    event.stopPropagation();
  }

  openClose(event) {
    this.isOpened = !this.isOpened;
    if (this.isOpened) {
      this.makeOpen();
    } else {
      this.close();
    }
    event.preventDefault();
    event.stopPropagation();
  }

  private addwidowResizeListener() {
    const vm = this;
    this.runOnResize = function (evt) {
      if (!vm.isMob) {
        vm.close();
      }
    };

    window.addEventListener('resize', this.runOnResize);
  }

  private addOutClickListener() {
    const vm = this;
    this.runOnWindowClick = function (evt) {
      if (!findAncestor(evt.target, '.stf-select')) {
        vm.close();
      }
    };

    window.addEventListener('click', this.runOnWindowClick);
  }

  calculatePositionAnsSize() {
    if (!this.isOpened) {
      return;
    }

    this.hasAncesroFixed = hasPositioFixedAncestor(this.elN);
    this.selectOptionsEl.style.position = this.hasAncesroFixed ? 'fixed' : 'absolute';
    const containerOffset = getPosition(this.selectContainerEl);
    this.selectOptionsEl.style.top = containerOffset.top + this.selectContainerEl.offsetHeight + 'px';
    this.selectOptionsEl.style.left = containerOffset.left + 'px';
    this.selectOptionsEl.style.width = this.selectContainerEl.offsetWidth + 'px';
  }

  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  waraperClick(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  writeValue(value: any) {
    this.selected = value;
  }

  private close() {
    this.isOpened = false;
    this.isFocusSearh = false;
    this.inputEl = this.elN.querySelector('input');
  }

  private keyArrowDown(event) {
    const elements = this.getArrayElementForFocus();
    console.log(elements);
    const currentFocusedIndex = this.getCurentFocuseIndex(elements);
    let next = currentFocusedIndex === undefined ? 0 : (currentFocusedIndex + 1);

    if (next >= (elements && elements.length)) {
      next = 0;
    }

    setTimeout(() => elements[next] && elements[next].focus(), 100);

    event.stopPropagation();
    event.preventDefault();
  }

  private getArrayElementForFocus() {
    const elements = [];
    elements.push(...this.elN.querySelectorAll('input'));
    elements.push(...<any>document.querySelectorAll(`#${this.selectId} .stf-select-option`));

    return elements;
  }
  private getCurentFocuseIndex(elements) {
    for (const key in elements) {
      if (elements[key] === document.activeElement) {
        return +key;
      }
    }

    return undefined;
  }

  private keyArrowUp(event) {
    const elements = this.getArrayElementForFocus();
    const currentFocusedIndex = this.getCurentFocuseIndex(elements);
    let prev = currentFocusedIndex === undefined ? -1 : (currentFocusedIndex - 1);

    if (prev < 0) {
      if (elements.length) {
        prev = elements.length - 1;
      }
    }

    setTimeout(() => elements[prev] && elements[prev].focus(), 100);

    event.stopPropagation();
    event.preventDefault();
  }

  private makeOpen() {
    this.isOpened = true;
    eventHub.$emit('stf-select-option.opened', {
      selectId: this.selectId
    });

    addClass(this.elN.querySelector('.stf-select'), 'stf-select_opened');
    const inputEl = this.elN.querySelector('input');
    if (inputEl !== document.activeElement) {
      if (inputEl) {
        inputEl.focus();
        inputEl.select();
      } else {
        const searchInpitEl = this.elN.querySelector('.stf-select__search-input')
        if (searchInpitEl && searchInpitEl !== document.activeElement) {
          searchInpitEl.focus();
        }
      }
    }

    this.calculatePositionAnsSize();
    this.inputEl = this.elN.querySelector('input');
    eventHub.$emit('stf-select.opened', { selectId: this.selectId });
  }

  private optToBody() {
    this.selectOptionsWrapEl = this.elN.querySelector('.stf-select__options-wraped');
    document.body.appendChild(this.selectOptionsWrapEl);
  }
}

StfNgSelectComponent.prototype.makeLoadMore = throttle(StfNgSelectComponent.prototype.makeLoadMore, 200);

function throttle(callback, limit) {
  let wait = false;
  return function () {
    if (!wait) {
      callback.call();
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  }
}

