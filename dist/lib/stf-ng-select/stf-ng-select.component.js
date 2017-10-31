"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var event_hub_1 = require("./event-hub");
var dom_lib_1 = require("./dom-lib");
var forms_1 = require("@angular/forms");
var StfNgSelectComponent = StfNgSelectComponent_1 = (function () {
    function StfNgSelectComponent(el, cd) {
        var _this = this;
        this.el = el;
        this.cd = cd;
        this.more = false;
        this.needFocusInpOnTab = false;
        this.optionsWrapClass = '';
        this.pending = false;
        this.loadMore = new core_1.EventEmitter();
        this.change = new core_1.EventEmitter();
        this.isFocusSearh = false;
        this.isOpened = false;
        this.isNeedHideOption = false;
        this.hasAncesroFixed = false;
        this.options = [];
        this.selectId = '';
        this.selectDisabled = false;
        this.beforeSetValueFocus = true;
        this.optionsHeightBefore = 0;
        this.makeLoadMore = function () {
            if (!_this.pending &&
                _this.more &&
                _this.selectOptionsoContainerEl.scrollTop >
                    (_this.selectOptionsoContainerEl.scrollHeight -
                        _this.selectOptionsoContainerEl.offsetHeight) *
                        0.66) {
                _this.loadMore.emit({});
            }
        };
        this.propagateChange = function (_) { };
    }
    Object.defineProperty(StfNgSelectComponent.prototype, "elN", {
        get: function () {
            return this.el.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StfNgSelectComponent.prototype, "selected", {
        get: function () {
            return this.value;
        },
        set: function (val) {
            this.value = val;
            this.propagateChange(this.value);
            this.change.emit(val);
        },
        enumerable: true,
        configurable: true
    });
    StfNgSelectComponent.prototype.onClick = function ($event) {
        var el = this.elN.querySelector('.stf-select__search-input');
        el.focus();
    };
    StfNgSelectComponent.prototype.blurSearch = function () {
        this.isFocusSearh = false;
    };
    StfNgSelectComponent.prototype.keyDown = function (event) {
        var _this = this;
        switch (event.keyCode) {
            case 40:
                this.keyArrowDown(event);
                break;
            case 38:
                this.keyArrowUp(event);
                break;
            case 27:
                this.close();
                var searchInpitEl = this.elN.querySelector('.stf-select__search-input');
                searchInpitEl && searchInpitEl.focus();
                break;
            case 13:
                if (!this.isOpened) {
                    this.makeOpen();
                }
                else if (!this.selected) {
                    var option = document.querySelector("#" + this.selectId + " .stf-select-option");
                    if (option) {
                        option.click();
                    }
                }
                else {
                    this.close();
                }
                event.preventDefault();
                break;
            case 9:
                setTimeout(function () { return _this.close(); }, 100);
                break;
            default: {
                if (this.inputEl && this.inputEl !== document.activeElement) {
                }
            }
        }
    };
    StfNgSelectComponent.prototype.keyPress = function (event) {
        var _this = this;
        if (event.keyCode !== 40 &&
            event.keyCode !== 38 &&
            event.keyCode !== 27 &&
            event.keyCode !== 13 &&
            event.keyCode !== 9 &&
            this.inputEl &&
            this.inputEl !== document.activeElement) {
            this.isOpened = true;
            // addClass(this.elN, 'stf-select_opened');
            this.hasAncesroFixed = dom_lib_1.hasPositioFixedAncestor(this.elN);
            event_hub_1.eventHub.$emit('stf-select-option.opened', {
                selectId: this.selectId
            });
            setTimeout(function () {
                _this.inputEl && _this.inputEl.focus();
            }, 100);
            this.calculatePositionAnsSize();
            event = event || window.event;
            var charCode = event.which || event.keyCode;
            var charTyped = String.fromCharCode(charCode);
            if (/[\wА-Яа-яїєЇЄь]/.test(charTyped)) {
                this.inputEl.selected = charTyped;
            }
            else {
                this.inputEl.selected = '';
            }
            var eventntInput = new Event('input');
            this.inputEl.dispatchEvent(eventntInput);
            event_hub_1.eventHub.$emit('stf-select.opened', { idSelect: this.selectId });
        }
    };
    StfNgSelectComponent.prototype.ngOnDestroy = function () {
        document.body.removeChild(this.selectOptionsWrapEl);
        document.removeEventListener('scroll', this.onScroll, true);
        window.removeEventListener('click', this.runOnWindowClick);
        window.removeEventListener('resize', this.runOnResize);
        event_hub_1.eventHub.$off('stf-select-option.selected', this.optionSelectedCallback);
        event_hub_1.eventHub.$off('stf-select-option.mounted', this.onOptionMounted);
        event_hub_1.eventHub.$off('stf-select-option.destroyed', this.onOptionDestroyed);
        event_hub_1.eventHub.$off('stf-select.opened', this.onOpenedSelect);
        event_hub_1.eventHub.$off('stf-select-button.clicked', this.onButtonClick);
        if (this.optionsMutationObserver) {
            this.optionsMutationObserver.disconnect();
        }
    };
    StfNgSelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectContainerEl = this.elN.querySelector('.stf-select__container');
        this.optToBody();
        this.isMob = dom_lib_1.isMob();
        this.inputEl = this.elN.querySelector('input');
        this.addwidowResizeListener();
        this.addOutClickListener();
        this.addOnBlurInputListener();
        setTimeout(function () {
            _this.initOnChangeDetection();
        }, 500);
        this.selectId =
            's' + (Date.now() * Math.random()).toString().replace('.', '_');
        this.optionSelectedCallback = function (event) {
            if (event.selectId === _this.selectId) {
                _this.close();
                _this.selected = event.value;
                var searchInpitEl = _this.elN.querySelector('.stf-select__search-input');
                _this.beforeSetValueFocus = true;
                searchInpitEl && searchInpitEl.focus();
                _this.beforeSetValueFocus = false;
            }
            if (event.selectId !== _this.selectId) {
                _this.close();
                _this.cd.markForCheck();
            }
        };
        this.onOptionMounted = function (event) {
            if (event.selectId === _this.selectId) {
                _this.options.push(event.option);
            }
        };
        this.onOptionDestroyed = function (event) {
            if (event.selectId === _this.selectId) {
                var index = _this.options.indexOf(event.option);
                if (index !== -1) {
                    _this.options.splice(index, 1);
                }
            }
        };
        this.onOpenedSelect = function (event) {
            if (event.selectId !== _this.selectId) {
                _this.close();
                _this.cd.markForCheck();
            }
        };
        this.onButtonClick = function (event) {
            if (event.selectId === _this.selectId) {
                _this.close();
                var searchInpitEl = _this.elN.querySelector('.stf-select__search-input');
                _this.beforeSetValueFocus = true;
                searchInpitEl && searchInpitEl.focus();
                _this.beforeSetValueFocus = false;
            }
        };
        this.onScroll = function () {
            if (_this.isOpened) {
                _this.calculatePositionAnsSize();
            }
        };
        event_hub_1.eventHub.$on('stf-select-option.selected', this.optionSelectedCallback);
        event_hub_1.eventHub.$on('stf-select-option.mounted', this.onOptionMounted);
        event_hub_1.eventHub.$on('stf-select-option.destroyed', this.onOptionDestroyed);
        event_hub_1.eventHub.$on('stf-select.opened', this.onOpenedSelect);
        event_hub_1.eventHub.$on('stf-select-button.clicked', this.onButtonClick);
        setTimeout(function () {
            return (_this.selectOptionsEl = _this.selectOptionsWrapEl.querySelector('.stf-select__options'));
        }, 0);
        setTimeout(function () {
            return (_this.selectOptionsoContainerEl = _this.selectOptionsWrapEl.querySelector('.stf-select__options-container'));
        }, 0);
        document.addEventListener('scroll', this.onScroll, true);
    };
    StfNgSelectComponent.prototype.onMouseWheal = function (event) {
        if (this.selectOptionsoContainerEl.scrollTop >=
            this.selectOptionsoContainerEl.scrollHeight -
                this.selectOptionsoContainerEl.offsetHeight &&
            event.deltaY > 0) {
            event.preventDefault();
        }
    };
    StfNgSelectComponent.prototype.onSelectFocus = function (event) {
        this.isFocusSearh = true;
        if (this.needFocusInpOnTab && !this.beforeSetValueFocus) {
            this.makeOpen();
            this.cd.markForCheck();
        }
    };
    StfNgSelectComponent.prototype.open = function (event) {
        this.makeOpen();
    };
    StfNgSelectComponent.prototype.openClose = function (event) {
        this.isOpened = !this.isOpened;
        if (this.isOpened) {
            this.makeOpen();
        }
        else {
            this.close();
        }
        event.preventDefault();
        event.stopPropagation();
    };
    StfNgSelectComponent.prototype.addOnBlurInputListener = function () {
        var _this = this;
        var el = this.elN.querySelector('.stf-select__search-input');
        el.addEventListener('blur', function (event) {
            setTimeout(function () {
                if (event.target !== document.activeElement &&
                    _this.elN.querySelector('.stf-select__search-input input') !==
                        document.activeElement &&
                    !dom_lib_1.hasClass(document.activeElement, 'stf-select__fixed-option') &&
                    !dom_lib_1.hasClass(document.activeElement, 'stf-select-option') &&
                    !dom_lib_1.findAncestor(document.activeElement, '.stf-select__fixed-option')) {
                    _this.close();
                    _this.cd.markForCheck();
                }
            });
        }, 20);
        el = this.elN.querySelector('.stf-select__search-input input');
        if (el) {
            el.addEventListener('blur', function (event) {
                setTimeout(function () {
                    if (event.target !== document.activeElement &&
                        !dom_lib_1.hasClass(document.activeElement, 'stf-select__fixed-option') &&
                        !dom_lib_1.hasClass(document.activeElement, 'stf-select-option') &&
                        !dom_lib_1.findAncestor(document.activeElement, '.stf-select__fixed-option')) {
                        _this.close();
                        _this.cd.markForCheck();
                    }
                });
            });
        }
    };
    StfNgSelectComponent.prototype.addwidowResizeListener = function () {
        var vm = this;
        this.runOnResize = function (evt) {
            if (!vm.isMob && vm.isOpened) {
                vm.close();
                vm.cd.markForCheck();
            }
        };
        window.addEventListener('resize', this.runOnResize);
    };
    StfNgSelectComponent.prototype.addOutClickListener = function () {
        var vm = this;
        this.runOnWindowClick = function (evt) {
            if (vm.isOpened && !dom_lib_1.findAncestor(evt.target, '.stf-select')) {
                vm.close();
                vm.cd.markForCheck();
            }
        };
        window.addEventListener('click', this.runOnWindowClick);
    };
    StfNgSelectComponent.prototype.calculatePositionAnsSize = function () {
        if (!this.isOpened) {
            return;
        }
        var optionsHeight = (this.selectOptionsEl &&
            this.selectOptionsEl.getBoundingClientRect &&
            this.selectOptionsEl.getBoundingClientRect().height) ||
            0;
        this.optionsHeightBefore = optionsHeight;
        this.hasAncesroFixed = dom_lib_1.hasPositioFixedAncestor(this.elN);
        this.selectOptionsEl.style.position = this.hasAncesroFixed
            ? 'fixed'
            : 'absolute';
        var containerOffset = dom_lib_1.getOffset(this.selectContainerEl);
        if ((window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight) +
            window.pageYOffset >
            containerOffset.top +
                this.selectContainerEl.clientHeight +
                optionsHeight +
                18) {
            this.selectOptionsEl.style.top =
                containerOffset.top + this.selectContainerEl.offsetHeight + 'px';
            this.selectOptionsEl.style.left = containerOffset.left + 'px';
            this.selectOptionsEl.style.width =
                this.selectContainerEl.offsetWidth + 'px';
            dom_lib_1.removeClass(this.selectOptionsEl, 'stf-select__options_top');
            dom_lib_1.removeClass(this.elN, 'stf-select__options_top');
        }
        else {
            this.selectOptionsEl.style.top =
                containerOffset.top - optionsHeight - 20 + 'px';
            this.selectOptionsEl.style.left = containerOffset.left + 'px';
            this.selectOptionsEl.style.width =
                this.selectContainerEl.offsetWidth + 'px';
            dom_lib_1.addClass(this.selectOptionsEl, 'stf-select__options_top');
            dom_lib_1.addClass(this.elN, 'stf-select__options_top');
        }
    };
    StfNgSelectComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    StfNgSelectComponent.prototype.registerOnTouched = function () { };
    StfNgSelectComponent.prototype.waraperClick = function (event) {
        event.stopPropagation();
        event.preventDefault();
    };
    StfNgSelectComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    StfNgSelectComponent.prototype.close = function () {
        this.isOpened = false;
        this.isFocusSearh = false;
        this.inputEl = this.elN.querySelector('input');
    };
    StfNgSelectComponent.prototype.keyArrowDown = function (event) {
        var elements = this.getArrayElementForFocus();
        var currentFocusedIndex = this.getCurentFocuseIndex(elements);
        var next = currentFocusedIndex === undefined ? 0 : currentFocusedIndex + 1;
        if (next >= (elements && elements.length)) {
            next = 0;
        }
        setTimeout(function () { return elements[next] && elements[next].focus(); }, 100);
        event.stopPropagation();
        event.preventDefault();
    };
    StfNgSelectComponent.prototype.getArrayElementForFocus = function () {
        var elements = [];
        elements.push.apply(elements, this.elN.querySelectorAll('input'));
        elements.push.apply(elements, document.querySelectorAll("#" + this.selectId + " .stf-select-option"));
        elements.push.apply(elements, document.querySelectorAll("#" + this.selectId + " .stf-select__fixed-option"));
        return elements;
    };
    StfNgSelectComponent.prototype.getCurentFocuseIndex = function (elements) {
        for (var key in elements) {
            if (elements[key] === document.activeElement) {
                return +key;
            }
        }
        return undefined;
    };
    StfNgSelectComponent.prototype.initOnChangeDetection = function () {
        var _this = this;
        if (!MutationObserver) {
            return;
        }
        this.optionsMutationObserver = new MutationObserver(throttle(function () {
            _this.calculatePositionAnsSize();
        }, 100));
        var config = { subtree: true, childList: true };
        this.optionsMutationObserver.observe(this.selectOptionsEl, config);
    };
    StfNgSelectComponent.prototype.keyArrowUp = function (event) {
        var elements = this.getArrayElementForFocus();
        var currentFocusedIndex = this.getCurentFocuseIndex(elements);
        var prev = currentFocusedIndex === undefined ? -1 : currentFocusedIndex - 1;
        if (prev < 0) {
            if (elements.length) {
                prev = elements.length - 1;
            }
        }
        setTimeout(function () { return elements[prev] && elements[prev].focus(); }, 100);
        event.stopPropagation();
        event.preventDefault();
    };
    StfNgSelectComponent.prototype.makeOpen = function () {
        this.isOpened = true;
        event_hub_1.eventHub.$emit('stf-select-option.opened', {
            selectId: this.selectId
        });
        dom_lib_1.addClass(this.elN.querySelector('.stf-select'), 'stf-select_opened');
        var inputEl = this.elN.querySelector('input');
        if (inputEl !== document.activeElement) {
            if (inputEl) {
                inputEl.focus();
                inputEl.select();
            }
            else {
                var searchInpitEl = this.elN.querySelector('.stf-select__search-input');
                if (searchInpitEl && searchInpitEl !== document.activeElement) {
                    searchInpitEl.focus();
                }
            }
        }
        this.calculatePositionAnsSize();
        this.inputEl = this.elN.querySelector('input');
        event_hub_1.eventHub.$emit('stf-select.opened', { selectId: this.selectId });
    };
    StfNgSelectComponent.prototype.optToBody = function () {
        this.selectOptionsWrapEl = this.elN.querySelector('.stf-select__options-wraped');
        document.body.appendChild(this.selectOptionsWrapEl);
    };
    return StfNgSelectComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StfNgSelectComponent.prototype, "more", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StfNgSelectComponent.prototype, "needFocusInpOnTab", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StfNgSelectComponent.prototype, "optionsWrapClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StfNgSelectComponent.prototype, "pending", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], StfNgSelectComponent.prototype, "loadMore", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], StfNgSelectComponent.prototype, "change", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StfNgSelectComponent.prototype, "value", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StfNgSelectComponent.prototype, "selectDisabled", void 0);
__decorate([
    core_1.HostListener('focus', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StfNgSelectComponent.prototype, "onClick", null);
StfNgSelectComponent = StfNgSelectComponent_1 = __decorate([
    core_1.Component({
        selector: 'stf-ng-select',
        template: "\n    <div class=\"stf-select stf-select_sm\"\n        [ngClass]=\"{ 'stf-select_has-value': selected !== null && selected !== undefined ? true : false, \n            'stf-select_opened': isOpened && !selectDisabled, \n            'stf-select_empty': !options || !options.length,\n            'stf-select_focus-searh': isFocusSearh\n            }\"\n        (keydown)=\"keyDown($event)\" \n        (keypress)=\"keyPress($event)\" \n        (click)=\"open($event)\"\n    \n    >\n        <div class=\"stf-select__container\">\n            <div class=\"stf-select__inner-wrapper\">\n                <div class=\"stf-select__value\">\n                  <ng-content select=\"[value-text]\"></ng-content>\n                </div>\n                <div class=\"stf-select__placeholder\">\n                  <ng-content select=\"[label]\"></ng-content>\n                </div>\n                <div (click)=\"openClose($event)\" class=\"stf-select__icon\"></div>\n            </div>\n\n            <div (focus)=\"onSelectFocus($event)\" (blur)=\"blurSearch()\" [tabindex]=\"this.isOpened ? -1 : 0\" class=\"stf-select__search-input\">\n                <ng-content select=\"[search-input]\"></ng-content>\n            </div>\n            <div [id]=\"selectId\" [ngClass]=\"{'stf-select_opened': isOpened, 'stf-select_empty': !options || !options.length}\"\n                class=\"stf-select__options-wraped\">\n                <div *ngIf=\"!isNeedHideOption\"\n                    class=\"stf-select__options stf-select-options\"\n                    role=\"combobox\" aria-haspopup=\"true\" aria-expanded=\"false\"\n                    (keydown)=\"keyDown($event)\" \n                >\n                    <div (mousewheel)=\"onMouseWheal($event)\"\n                    (scroll)=\"makeLoadMore($event)\"\n                        class=\"stf-select__options-container\">\n                        <ng-content></ng-content>\n                    </div>\n                    <ng-content select=\"[button]\"></ng-content>\n                </div>\n            </div>\n        </div>\n    </div>\n  ",
        styles: ["\n    .stf-select {\n      position: relative;\n      margin: 18px 0;\n      height: 52px;\n      padding: 2px 0;\n      box-sizing: border-box;\n      vertical-align: middle; }\n      .stf-select__container {\n        position: relative;\n        height: 33px;\n        padding: 0px 2px 3px 0px;\n        border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n        box-sizing: border-box;\n        cursor: text; }\n      .stf-select__label {\n        display: none; }\n      .stf-select__value {\n        display: none;\n        height: 33px;\n        font-size: 16px;\n        line-height: 26px;\n        padding: 2px 35px 4px 0px;\n        border-bottom: 1px solid transparent;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        box-sizing: border-box; }\n      .stf-select__placeholder {\n        position: absolute;\n        top: 3px;\n        width: 100%;\n        font-size: 16px;\n        line-height: 24px;\n        color: rgba(0, 0, 0, 0.38);\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        box-sizing: border-box;\n        transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n        transform-origin: left top; }\n      .stf-select__icon {\n        display: block;\n        position: absolute;\n        top: 5px;\n        right: -5px;\n        height: 28px;\n        width: 24px;\n        text-align: center;\n        margin: 0 4px;\n        cursor: pointer;\n        z-index: 6; }\n        .stf-select__icon:after {\n          content: '';\n          display: inline-block;\n          position: absolute;\n          top: 10px;\n          right: 5px;\n          width: 0;\n          height: 0;\n          border-style: solid;\n          border-width: 5px 5px 0 5px;\n          border-color: rgba(0, 0, 0, 0.54) transparent transparent transparent; }\n      .stf-select__options {\n        width: 100%;\n        min-width: 136px;\n        min-height: 0;\n        visibility: hidden;\n        position: absolute;\n        top: 50px;\n        z-index: -10;\n        background-color: #fafafa;\n        box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.24), 0 0 8px 0 rgba(0, 0, 0, 0.12); }\n        .stf-select__options_top {\n          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.24), 0 0 8px 0 rgba(0, 0, 0, 0.12); }\n      .stf-select__options-container {\n        display: block;\n        max-height: 200px;\n        overflow-y: auto;\n        overflow-x: hidden;\n        z-index: 1; }\n        .stf-select__options-container::-webkit-scrollbar {\n          width: 8px; }\n        .stf-select__options-container::-webkit-scrollbar-track {\n          background-color: #dddddd; }\n        .stf-select__options-container::-webkit-scrollbar-thumb {\n          background-color: #bdbdbd; }\n      .stf-select__divider {\n        display: block;\n        border-top: 1px solid rgba(0, 0, 0, 0.12);\n        margin: 0; }\n        .stf-select__divider:first-child {\n          padding-top: 8px; }\n        .stf-select__divider:last-child {\n          padding-bottom: 8px; }\n      .stf-select md-divider:first-child {\n        padding-top: 8px; }\n      .stf-select md-divider:last-child {\n        padding-bottom: 8px; }\n      .stf-select stf-select-option {\n        display: block; }\n\n    stf-select-options {\n      display: block;\n      max-height: 200px;\n      overflow-y: auto;\n      overflow-x: hidden; }\n      stf-select-options stf-select-option {\n        display: block; }\n        stf-select-options stf-select-option:first-child {\n          padding-top: 8px; }\n        stf-select-options stf-select-option:last-child {\n          padding-bottom: 8px; }\n\n    .stf-select__fixed-option button {\n      min-height: 48px;\n      position: relative;\n      display: flex;\n      align-items: center;\n      width: 100%;\n      transition: background 0.15s linear;\n      padding: 8px 16px;\n      outline: none;\n      cursor: pointer;\n      border: none;\n      border-top: 1px solid rgba(0, 0, 0, 0.12);\n      box-sizing: border-box;\n      outline: none;\n      margin-bottom: 8px;\n      background: none; }\n      .stf-select__fixed-option button:hover {\n        background: #eeeeee; }\n\n    .stf-select__fixed-option:focus {\n      outline: none; }\n      .stf-select__fixed-option:focus button {\n        background: #eeeeee; }\n\n    .stf-select-option {\n      min-height: 48px;\n      position: relative;\n      display: flex;\n      align-items: center;\n      width: auto;\n      transition: background 0.15s linear;\n      padding: 8px 16px;\n      outline: none;\n      cursor: pointer;\n      box-sizing: border-box; }\n      .stf-select-option:hover, .stf-select-option:focus {\n        background: #eeeeee; }\n      .stf-select-option_error {\n        color: #ec413b; }\n\n    .stf-select__search-input {\n      display: block;\n      opacity: 0;\n      position: absolute;\n      top: 0;\n      z-index: -1;\n      background: transparent;\n      min-height: 1px;\n      min-width: 1px; }\n      .stf-select__search-input input {\n        visibility: hidden; }\n      .stf-select__search-input:focus {\n        outline: none; }\n\n    .stf-select_has-value .stf-select__value {\n      display: block; }\n\n    .stf-select_has-value .stf-select__placeholder {\n      width: auto;\n      transform: translateY(-22px) translateX(0px) scale(0.75);\n      color: rgba(0, 0, 0, 0.54); }\n\n    .stf-select_has-value .stf-select__icon:after {\n      opacity: 1; }\n\n    .stf-select_has-value .stf-select__search-input {\n      background: #ffffff; }\n\n    .stf-select__tab-focus .stf-select__container {\n      border-bottom: 2px solid rgba(0, 0, 0, 0.87); }\n\n    .stf-select_focus-searh .stf-select__icon:after {\n      border-color: rgba(0, 0, 0, 0.87) transparent transparent transparent; }\n\n    .stf-select_focus-searh .stf-select__container {\n      border-bottom: 2px solid rgba(0, 0, 0, 0.87); }\n\n    .stf-select_focus-searh .stf-select__icon:after {\n      opacity: 1; }\n\n    .stf-select_opened .stf-select__placeholder {\n      width: auto;\n      transform: translateY(-22px) translateX(0px) scale(0.75);\n      color: rgba(0, 0, 0, 0.87); }\n\n    .stf-select_opened .stf-select__icon:after {\n      border-color: rgba(0, 0, 0, 0.87) transparent transparent transparent; }\n\n    .stf-select_opened .stf-select__container {\n      border-bottom: 2px solid rgba(0, 0, 0, 0.87); }\n\n    .stf-select_opened .stf-select__options {\n      visibility: visible;\n      z-index: 200; }\n\n    .stf-select_opened .stf-select__icon:after {\n      opacity: 1; }\n\n    .stf-select_opened .stf-select__search-input {\n      display: block;\n      z-index: 5;\n      opacity: 1;\n      width: 100%;\n      padding-right: 35px; }\n      .stf-select_opened .stf-select__search-input input {\n        visibility: visible;\n        font-size: 16px;\n        line-height: 22px;\n        font-weight: 400;\n        background: transparent;\n        border: none;\n        border-bottom: 1px solid #d8d8d8;\n        outline: none;\n        padding: 4px 0 5px 0;\n        width: 100%;\n        font-size: 16px;\n        font-weight: 400;\n        border-bottom: 0; }\n        .stf-select_opened .stf-select__search-input input::-webkit-input-placeholder {\n          font-weight: 400;\n          color: rgba(0, 0, 0, 0.54); }\n        .stf-select_opened .stf-select__search-input input::-moz-placeholder {\n          font-weight: 400;\n          color: rgba(0, 0, 0, 0.54); }\n        .stf-select_opened .stf-select__search-input input:-ms-input-placeholder {\n          font-weight: 400;\n          color: rgba(0, 0, 0, 0.54); }\n\n    .stf-select-root[required] .stf-select__placeholder:after {\n      font-size: 13px;\n      vertical-align: top; }\n\n    .ng-submitted stf-ng-select.ng-invalid .stf-select__container {\n      border-bottom-color: #ec413b; }\n\n    .ng-submitted stf-ng-select.ng-invalid .stf-select__placeholder {\n      color: #ec413b; }\n\n    .ng-submitted stf-ng-select.ng-invalid .stf-select__icon:after {\n      opacity: 1;\n      color: #ec413b;\n      border-color: #ec413b transparent transparent transparent; }\n\n    .ng-submitted stf-ng-select.ng-invalid-required .stf-select__container {\n      border-bottom-color: #ec413b; }\n\n    .ng-submitted stf-ng-select.ng-invalid-required .stf-select__placeholder {\n      color: #ec413b; }\n      .ng-submitted stf-ng-select.ng-invalid-required .stf-select__placeholder:after {\n        color: #ec413b;\n        font-size: 13px;\n        vertical-align: top; }\n\n    .ng-submitted stf-ng-select.ng-invalid-required .stf-select__icon:after {\n      opacity: 1;\n      color: #ec413b;\n      border-color: #ec413b transparent transparent transparent; }\n  "],
        providers: [
            {
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(function () { return StfNgSelectComponent_1; }),
                multi: true
            }
        ],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.ChangeDetectorRef])
], StfNgSelectComponent);
exports.StfNgSelectComponent = StfNgSelectComponent;
StfNgSelectComponent.prototype.makeLoadMore = throttle(StfNgSelectComponent.prototype.makeLoadMore, 200);
function throttle(callback, limit) {
    var wait = false;
    return function () {
        if (!wait) {
            callback.call();
            wait = true;
            setTimeout(function () {
                wait = false;
            }, limit);
        }
    };
}
var StfNgSelectComponent_1;
