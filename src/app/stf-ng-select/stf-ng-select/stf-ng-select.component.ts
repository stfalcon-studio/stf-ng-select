import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { eventHub } from './even-hub.js';
import { getPosition, hasPositioFixedAncestor, isMob, addClass } from './dom-lib';

@Component({
  selector: 'stf-ng-select',
  templateUrl: './stf-ng-select.component.html',
  styleUrls: ['./stf-ng-select.component.css']
})
export class StfNgSelectComponent implements OnInit {
  @Input() more = false;
  @Input() needFocusInpOnTab = false;
  @Input() optionsWrapClass = '';
  @Input() pending = false;
  @Input() value: any;

  isOpened = false;
  idSelect = '';
  isNeedHideOption = false;
  hasAncesroFixed = false;
  options: any[] = [];

  get elN() {
    return this.el.nativeElement;
  }

  private electContainerEl: HTMLElement;
  private inputEl: HTMLElement;
  private isMob: boolean;
  private runOnResize: any;
  private runOnWindowClick: any;
  private selectOptionsEl: HTMLElement;
  private selectOptionsWrapEl: HTMLElement;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.optToBody();
    this.selectOptionsEl = this.elN.querySelector('.stf-select__options');
    this.electContainerEl = this.elN.querySelector('.stf-select__container');
    this.isMob = isMob();
    this.inputEl = this.elN.querySelector('input');
    this.addwidowResizeListener();
    this.addOutClickListener();
  }

  private optToBody() {
    this.selectOptionsWrapEl = this.elN.querySelector('.stf-select__options-wraped');
    document.body.appendChild(this.selectOptionsWrapEl);
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
      vm.close();
    };

    window.addEventListener('click', this.runOnWindowClick);
  }
  private close() {
    this.isOpened = false;
    this.inputEl = this.elN.querySelector('input');
  }

  private loadMore() {
      if (!this.pending && this.more &&
          this.selectOptionsEl.scrollTop
            > ((this.selectOptionsEl.scrollHeight - this.selectOptionsEl.offsetHeight) * 0.66)
      ) {
          this.$emit('loadMore', {});
      }
  }
}

