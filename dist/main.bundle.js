webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 400px;\">\n\n</div>\n<section style=\"max-width: 200px;\">\n    <stf-ng-select tabindex=\"0\" [(ngModel)]=\"selected\">\n        <div value-text>{{selected.title}}({{selected.category}})</div>\n        <section class=\"options delivery_order__options\">\n            <stf-option *ngFor=\"let option of options\" [value]=\"option\">{{option.category}}: {{option.title}}</stf-option>\n        </section>\n    </stf-ng-select>\n    <section>\n\n\n                <section style=\"max-width: 200px;\">\n                    <stf-ng-select [(ngModel)]=\"selected\">\n                        <section search-input>\n                            <input>\n                        </section>\n                        <div value-text>{{selected.title}}({{selected.category}})</div>\n                        <section class=\"options delivery_order__options\">\n                            <stf-option *ngFor=\"let option of options\" [value]=\"option\">{{option.category}}: {{option.title}}</stf-option>\n                        </section>\n                        <section button>\n                            <stf-ng-select-button>\n                                <button (click)=\"click()\">Press me</button>\n                            </stf-ng-select-button>\n                        </section>\n                    </stf-ng-select>\n                    <section>\n                        <section style=\"max-width: 200px;\">\n                            <stf-ng-select [(ngModel)]=\"selected\">\n                                <section search-input>\n                                    <input>\n                                </section>\n                                <div value-text>{{selected.title}}({{selected.category}})</div>\n                                <section class=\"options delivery_order__options\">\n                                    <stf-option *ngFor=\"let option of options\" [value]=\"option\">{{option.category}}: {{option.title}}</stf-option>\n                                </section>\n                            </stf-ng-select>\n                            <section>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.selected = { title: 'app1', category: 'utitlits' };
        this.options = [
            { title: 'app1', category: 'utitlits' },
            { title: 'app2', category: 'social network' },
            { title: 'Call of dutty', category: 'game' },
            { title: 'Call of dutty1', category: 'game1' },
            { title: 'Call of dutty2', category: 'game' },
            { title: 'Call of dutty3', category: 'game' },
            { title: 'Call of dutty4', category: 'game' },
            { title: 'Call of dutty5', category: 'game' },
            { title: 'Call of dutty6', category: 'game' },
        ];
    }
    AppComponent.prototype.click = function () {
        this.options;
        console.log(555);
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
        // tslint:disable-next-line:component-selector
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stf_ng_select_stf_ng_select_module__ = __webpack_require__("../../../../../src/app/stf-ng-select/stf-ng-select.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__stf_ng_select_stf_ng_select_module__["a" /* StfNgSelectModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/stf-ng-select/stf-ng-select.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StfNgSelectModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stf_ng_select_stf_ng_select_component__ = __webpack_require__("../../../../../src/app/stf-ng-select/stf-ng-select/stf-ng-select.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stf_ng_select_stf_ng_select_option_component__ = __webpack_require__("../../../../../src/app/stf-ng-select/stf-ng-select/stf-ng-select-option.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stf_ng_select_stf_ng_select_button_component__ = __webpack_require__("../../../../../src/app/stf-ng-select/stf-ng-select/stf-ng-select-button.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var StfNgSelectModule = (function () {
    function StfNgSelectModule() {
    }
    return StfNgSelectModule;
}());
StfNgSelectModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__stf_ng_select_stf_ng_select_component__["a" /* StfNgSelectComponent */],
            __WEBPACK_IMPORTED_MODULE_3__stf_ng_select_stf_ng_select_option_component__["a" /* StfNgSelectOptionComponent */],
            __WEBPACK_IMPORTED_MODULE_4__stf_ng_select_stf_ng_select_button_component__["a" /* StfNgSelectButtonComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__stf_ng_select_stf_ng_select_component__["a" /* StfNgSelectComponent */],
            __WEBPACK_IMPORTED_MODULE_3__stf_ng_select_stf_ng_select_option_component__["a" /* StfNgSelectOptionComponent */],
            __WEBPACK_IMPORTED_MODULE_4__stf_ng_select_stf_ng_select_button_component__["a" /* StfNgSelectButtonComponent */]
        ],
    })
], StfNgSelectModule);

//# sourceMappingURL=stf-ng-select.module.js.map

/***/ }),

/***/ "../../../../../src/app/stf-ng-select/stf-ng-select/dom-lib.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = getOffset;
/* harmony export (immutable) */ __webpack_exports__["b"] = findAncestor;
/* harmony export (immutable) */ __webpack_exports__["e"] = hasPositioFixedAncestor;
/* harmony export (immutable) */ __webpack_exports__["f"] = isMob;
/* unused harmony export triggerEvent */
/* harmony export (immutable) */ __webpack_exports__["d"] = hasClass;
/* harmony export (immutable) */ __webpack_exports__["a"] = addClass;
/* harmony export (immutable) */ __webpack_exports__["g"] = removeClass;
function getOffset(obj) {
    var rect;
    var win;
    var elem = obj;
    if (!elem) {
        return;
    }
    // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
    // Support: IE <=11 only
    // Running getBoundingClientRect on a
    // disconnected node in IE throws an error
    if (!elem.getClientRects().length) {
        return { top: 0, left: 0 };
    }
    // Get document-relative position by adding viewport scroll to viewport-relative gBCR
    rect = elem.getBoundingClientRect();
    win = elem.ownerDocument.defaultView;
    return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
    };
}
function findAncestor(el, sel) {
    if (typeof el.closest === 'function') {
        return el.closest(sel) || null;
    }
    while (el) {
        if (el.matches(sel)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
function hasPositioFixedAncestor(el) {
    while (el) {
        if (window.getComputedStyle(el, null).getPropertyValue('position') === 'fixed') {
            return true;
        }
        el = el.parentElement;
    }
    return false;
}
function isMob() {
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)) {
        return true;
    }
    else {
        return false;
    }
}
function triggerEvent(el, eventName, options) {
    var event;
    if (window.CustomEvent) {
        event = new CustomEvent(eventName, options);
    }
    else {
        event = document.createEvent('CustomEvent');
        event.initCustomEvent(eventName, true, true, options);
    }
    el.dispatchEvent(event);
}
function hasClass(el, className) {
    if (el.classList) {
        return el.classList.contains(className);
    }
    else {
        return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }
}
function addClass(el, className) {
    if (el.classList) {
        el.classList.add(className);
    }
    else if (!hasClass(el, className)) {
        el.className += ' ' + className;
    }
}
function removeClass(el, className) {
    if (el.classList) {
        el.classList.remove(className);
    }
    else if (hasClass(el, className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}
if (!Element.prototype.matches) {
    Element.prototype.matches =
        Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function (s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s);
                var i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) { }
                return i > -1;
            };
}
//# sourceMappingURL=dom-lib.js.map

/***/ }),

/***/ "../../../../../src/app/stf-ng-select/stf-ng-select/event-hub.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EventHub */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return eventHub; });
var EventHub = (function () {
    function EventHub() {
        this.eventsCollection = {};
    }
    EventHub.prototype.$emit = function (name, event) {
        if (this.eventsCollection[name] && this.eventsCollection[name][0]) {
            var _loop_1 = function (callback) {
                setTimeout(function () { return callback(event); }, 0);
            };
            for (var _i = 0, _a = this.eventsCollection[name]; _i < _a.length; _i++) {
                var callback = _a[_i];
                _loop_1(callback);
            }
        }
    };
    EventHub.prototype.$on = function (name, callback) {
        if (typeof callback === 'function') {
            if (!this.eventsCollection[name]) {
                this.eventsCollection[name] = [];
            }
            if (this.eventsCollection[name].indexOf(this.eventsCollection[name]) === -1) {
                this.eventsCollection[name].push(callback);
            }
            else {
                throw new ArgumentExceptions("Callback can not be used twice");
            }
        }
        else {
            throw new ArgumentExceptions("Callback can not be " + typeof callback + " event " + name);
        }
    };
    EventHub.prototype.$off = function (name, callback) {
        if (typeof callback === 'function') {
            if (!this.eventsCollection[name]) {
                throw new ArgumentExceptions("You don't have callback on " + name + " event " + name);
            }
            var index = this.eventsCollection[name].indexOf(callback);
            this.eventsCollection[name].splice(index, 1);
        }
        else {
            throw new ArgumentExceptions("Callback can not be " + typeof callback + " event " + name);
        }
    };
    return EventHub;
}());

function ArgumentExceptions(message) {
    this.message = message;
    this.name = 'Argument exception';
}
var eventHub = new EventHub();
//# sourceMappingURL=event-hub.js.map

/***/ }),

/***/ "../../../../../src/app/stf-ng-select/stf-ng-select/stf-ng-select-button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stf-ng-select/stf-ng-select/stf-ng-select-button.component.html":
/***/ (function(module, exports) {

module.exports = "<div tabindex=\"0\" (keydown.enter)=\"onEnter($event)\" class=\"stf-select__fixed-option\">\n   <ng-content></ng-content>\n</div>"

/***/ }),

/***/ "../../../../../src/app/stf-ng-select/stf-ng-select/stf-ng-select-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StfNgSelectButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_hub__ = __webpack_require__("../../../../../src/app/stf-ng-select/stf-ng-select/event-hub.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_lib__ = __webpack_require__("../../../../../src/app/stf-ng-select/stf-ng-select/dom-lib.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StfNgSelectButtonComponent = (function () {
    function StfNgSelectButtonComponent(el) {
        this.el = el;
    }
    StfNgSelectButtonComponent.prototype.ngOnDestroy = function () {
        __WEBPACK_IMPORTED_MODULE_1__event_hub__["a" /* eventHub */].$emit('stf-select-option.destroyed', {
            option: this,
            selectId: this.selectId,
        });
    };
    StfNgSelectButtonComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            var el = Object(__WEBPACK_IMPORTED_MODULE_2__dom_lib__["b" /* findAncestor */])(_this.el.nativeElement, '.stf-select__options-wraped');
            if (el) {
                _this.selectId = el.getAttribute('id');
            }
            __WEBPACK_IMPORTED_MODULE_1__event_hub__["a" /* eventHub */].$emit('stf-select-option.mounted', {
                option: _this,
                selectId: _this.selectId,
            });
            _this.el.nativeElement
                .querySelector('button')
                .addEventListener('click', function () {
                __WEBPACK_IMPORTED_MODULE_1__event_hub__["a" /* eventHub */].$emit('stf-select-button.clicked', {
                    selectId: _this.selectId,
                });
            });
        }, 0);
    };
    StfNgSelectButtonComponent.prototype.onEnter = function (event) {
        this.el.nativeElement
            .querySelector('button')
            .click();
        return true;
    };
    return StfNgSelectButtonComponent;
}());
StfNgSelectButtonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'stf-ng-select-button',
        template: __webpack_require__("../../../../../src/app/stf-ng-select/stf-ng-select/stf-ng-select-button.component.html"),
        styles: [__webpack_require__("../../../../../src/app/stf-ng-select/stf-ng-select/stf-ng-select-button.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object])
], StfNgSelectButtonComponent);

var _a;
//# sourceMappingURL=stf-ng-select-button.component.js.map

/***/ }),

/***/ "../../../../../src/app/stf-ng-select/stf-ng-select/stf-ng-select-option.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StfNgSelectOptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_hub__ = __webpack_require__("../../../../../src/app/stf-ng-select/stf-ng-select/event-hub.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_lib__ = __webpack_require__("../../../../../src/app/stf-ng-select/stf-ng-select/dom-lib.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StfNgSelectOptionComponent = (function () {
    function StfNgSelectOptionComponent(el) {
        this.el = el;
    }
    StfNgSelectOptionComponent.prototype.keyDown = function (event) {
        switch (event.keyCode) {
            case 13:
                this.selectValue(event);
                event.preventDefault();
                event.stopPropagation();
                break;
        }
    };
    StfNgSelectOptionComponent.prototype.ngOnDestroy = function () {
        __WEBPACK_IMPORTED_MODULE_1__event_hub__["a" /* eventHub */].$emit('stf-select-option.destroyed', {
            option: this,
            selectId: this.selectId,
        });
    };
    StfNgSelectOptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            var el = Object(__WEBPACK_IMPORTED_MODULE_2__dom_lib__["b" /* findAncestor */])(_this.el.nativeElement, '.stf-select__options-wraped');
            if (el) {
                _this.selectId = el.getAttribute('id');
            }
            __WEBPACK_IMPORTED_MODULE_1__event_hub__["a" /* eventHub */].$emit('stf-select-option.mounted', {
                option: _this,
                selectId: _this.selectId,
            });
        }, 0);
    };
    StfNgSelectOptionComponent.prototype.selectValue = function (event) {
        __WEBPACK_IMPORTED_MODULE_1__event_hub__["a" /* eventHub */].$emit('stf-select-option.selected', {
            value: this.value,
            selectId: this.selectId,
        });
        this.isSelected = true;
    };
    return StfNgSelectOptionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], StfNgSelectOptionComponent.prototype, "value", void 0);
StfNgSelectOptionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'stf-option',
        template: __webpack_require__("../../../../../src/app/stf-ng-select/stf-ng-select/stf-select-option.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object])
], StfNgSelectOptionComponent);

var _a;
//# sourceMappingURL=stf-ng-select-option.component.js.map

/***/ }),

/***/ "../../../../../src/app/stf-ng-select/stf-ng-select/stf-ng-select.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".stf-select {\n  position: relative;\n  margin: 18px 0;\n  height: 52px;\n  padding: 2px 0;\n  box-sizing: border-box;\n  vertical-align: middle; }\n  .stf-select__container {\n    position: relative;\n    height: 33px;\n    padding: 0px 2px 3px 0px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    box-sizing: border-box;\n    cursor: text; }\n  .stf-select__label {\n    display: none; }\n  .stf-select__value {\n    display: none;\n    height: 33px;\n    font-size: 16px;\n    line-height: 26px;\n    padding: 2px 35px 4px 0px;\n    border-bottom: 1px solid transparent;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    box-sizing: border-box; }\n  .stf-select__placeholder {\n    position: absolute;\n    top: 3px;\n    width: 100%;\n    font-size: 16px;\n    line-height: 24px;\n    color: rgba(0, 0, 0, 0.38);\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    box-sizing: border-box;\n    transition: -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    -webkit-transform-origin: left top;\n            transform-origin: left top; }\n  .stf-select__icon {\n    display: block;\n    position: absolute;\n    top: 5px;\n    right: -5px;\n    height: 28px;\n    width: 24px;\n    text-align: center;\n    margin: 0 4px;\n    cursor: pointer;\n    z-index: 6; }\n    .stf-select__icon:after {\n      content: '';\n      display: inline-block;\n      position: absolute;\n      top: 10px;\n      right: 5px;\n      width: 0;\n      height: 0;\n      border-style: solid;\n      border-width: 5px 5px 0 5px;\n      border-color: rgba(0, 0, 0, 0.54) transparent transparent transparent; }\n  .stf-select__options {\n    width: 100%;\n    min-width: 136px;\n    min-height: 0;\n    visibility: hidden;\n    position: absolute;\n    top: 50px;\n    z-index: -10;\n    background-color: #fafafa;\n    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.24), 0 0 8px 0 rgba(0, 0, 0, 0.12); }\n    .stf-select__options_top {\n      box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.24), 0 0 8px 0 rgba(0, 0, 0, 0.12); }\n  .stf-select__options-container {\n    display: block;\n    max-height: 200px;\n    overflow-y: auto;\n    overflow-x: hidden;\n    z-index: 1; }\n    .stf-select__options-container::-webkit-scrollbar {\n      width: 8px; }\n    .stf-select__options-container::-webkit-scrollbar-track {\n      background-color: #dddddd; }\n    .stf-select__options-container::-webkit-scrollbar-thumb {\n      background-color: #bdbdbd; }\n  .stf-select__divider {\n    display: block;\n    border-top: 1px solid rgba(0, 0, 0, 0.12);\n    margin: 0; }\n    .stf-select__divider:first-child {\n      padding-top: 8px; }\n    .stf-select__divider:last-child {\n      padding-bottom: 8px; }\n  .stf-select md-divider:first-child {\n    padding-top: 8px; }\n  .stf-select md-divider:last-child {\n    padding-bottom: 8px; }\n  .stf-select stf-select-option {\n    display: block; }\n\nstf-select-options {\n  display: block;\n  max-height: 200px;\n  overflow-y: auto;\n  overflow-x: hidden; }\n  stf-select-options stf-select-option {\n    display: block; }\n    stf-select-options stf-select-option:first-child {\n      padding-top: 8px; }\n    stf-select-options stf-select-option:last-child {\n      padding-bottom: 8px; }\n\n.stf-select__fixed-option button {\n  min-height: 48px;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  transition: background 0.15s linear;\n  padding: 8px 16px;\n  outline: none;\n  cursor: pointer;\n  border: none;\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  box-sizing: border-box;\n  outline: none;\n  margin-bottom: 8px;\n  background: none; }\n  .stf-select__fixed-option button:hover {\n    background: #eeeeee; }\n\n.stf-select__fixed-option:focus {\n  outline: none; }\n  .stf-select__fixed-option:focus button {\n    background: #eeeeee; }\n\n.stf-select-option {\n  min-height: 48px;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: auto;\n  transition: background 0.15s linear;\n  padding: 8px 16px;\n  outline: none;\n  cursor: pointer;\n  box-sizing: border-box; }\n  .stf-select-option:hover, .stf-select-option:focus {\n    background: #eeeeee; }\n  .stf-select-option_error {\n    color: #ec413b; }\n\n.stf-select__search-input {\n  display: block;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  z-index: -1;\n  background: transparent;\n  min-height: 1px;\n  min-width: 1px; }\n  .stf-select__search-input input {\n    visibility: hidden; }\n  .stf-select__search-input:focus {\n    outline: none; }\n\n.stf-select_has-value .stf-select__value {\n  display: block; }\n\n.stf-select_has-value .stf-select__placeholder {\n  width: auto;\n  -webkit-transform: translateY(-22px) translateX(0px) scale(0.75);\n          transform: translateY(-22px) translateX(0px) scale(0.75);\n  color: rgba(0, 0, 0, 0.54); }\n\n.stf-select_has-value .stf-select__icon:after {\n  opacity: 1; }\n\n.stf-select_has-value .stf-select__search-input {\n  background: #ffffff; }\n\n.stf-select__tab-focus .stf-select__container {\n  border-bottom: 2px solid rgba(0, 0, 0, 0.87); }\n\n.stf-select_focus-searh .stf-select__icon:after {\n  border-color: rgba(0, 0, 0, 0.87) transparent transparent transparent; }\n\n.stf-select_focus-searh .stf-select__container {\n  border-bottom: 2px solid rgba(0, 0, 0, 0.87); }\n\n.stf-select_focus-searh .stf-select__icon:after {\n  opacity: 1; }\n\n.stf-select_opened .stf-select__placeholder {\n  width: auto;\n  -webkit-transform: translateY(-22px) translateX(0px) scale(0.75);\n          transform: translateY(-22px) translateX(0px) scale(0.75);\n  color: rgba(0, 0, 0, 0.87); }\n\n.stf-select_opened .stf-select__icon:after {\n  border-color: rgba(0, 0, 0, 0.87) transparent transparent transparent; }\n\n.stf-select_opened .stf-select__container {\n  border-bottom: 2px solid rgba(0, 0, 0, 0.87); }\n\n.stf-select_opened .stf-select__options {\n  visibility: visible;\n  z-index: 200; }\n\n.stf-select_opened .stf-select__icon:after {\n  opacity: 1; }\n\n.stf-select_opened .stf-select__search-input {\n  display: block;\n  z-index: 5;\n  opacity: 1;\n  width: 100%;\n  padding-right: 35px; }\n  .stf-select_opened .stf-select__search-input input {\n    visibility: visible;\n    font-size: 16px;\n    line-height: 22px;\n    font-weight: 400;\n    background: transparent;\n    border: none;\n    border-bottom: 1px solid #d8d8d8;\n    outline: none;\n    padding: 4px 0 5px 0;\n    width: 100%;\n    font-size: 16px;\n    font-weight: 400;\n    border-bottom: 0; }\n    .stf-select_opened .stf-select__search-input input::-webkit-input-placeholder {\n      font-weight: 400;\n      color: rgba(0, 0, 0, 0.54); }\n    .stf-select_opened .stf-select__search-input input::-moz-placeholder {\n      font-weight: 400;\n      color: rgba(0, 0, 0, 0.54); }\n    .stf-select_opened .stf-select__search-input input:-ms-input-placeholder {\n      font-weight: 400;\n      color: rgba(0, 0, 0, 0.54); }\n\n.stf-select-root[required] .stf-select__placeholder:after {\n  font-size: 13px;\n  vertical-align: top; }\n\n.ng-submitted stf-ng-select.ng-invalid .stf-select__container {\n  border-bottom-color: #ec413b; }\n\n.ng-submitted stf-ng-select.ng-invalid .stf-select__placeholder {\n  color: #ec413b; }\n\n.ng-submitted stf-ng-select.ng-invalid .stf-select__icon:after {\n  opacity: 1;\n  color: #ec413b;\n  border-color: #ec413b transparent transparent transparent; }\n\n.ng-submitted stf-ng-select.ng-invalid-required .stf-select__container {\n  border-bottom-color: #ec413b; }\n\n.ng-submitted stf-ng-select.ng-invalid-required .stf-select__placeholder {\n  color: #ec413b; }\n  .ng-submitted stf-ng-select.ng-invalid-required .stf-select__placeholder:after {\n    color: #ec413b;\n    font-size: 13px;\n    vertical-align: top; }\n\n.ng-submitted stf-ng-select.ng-invalid-required .stf-select__icon:after {\n  opacity: 1;\n  color: #ec413b;\n  border-color: #ec413b transparent transparent transparent; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stf-ng-select/stf-ng-select/stf-ng-select.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"stf-select stf-select_sm\"\n    [ngClass]=\"{ 'stf-select_has-value': selected !== null && selected !== undefined ? true : false, \n        'stf-select_opened': isOpened, \n        'stf-select_empty': !options || !options.length,\n        'stf-select_focus-searh': isFocusSearh\n        }\"\n    (keydown)=\"keyDown($event)\" \n    (keypress)=\"keyPress($event)\" \n    (click)=\"open($event)\"\n    \n>\n    <div class=\"stf-select__container\">\n        <div class=\"stf-select__inner-wrapper\">\n            <div class=\"stf-select__value\">\n              <ng-content select=\"[value-text]\"></ng-content>\n            </div>\n            <div class=\"stf-select__placeholder\">\n              <ng-content select=\"[label]\"></ng-content>\n            </div>\n            <div (click)=\"openClose($event)\" class=\"stf-select__icon\"></div>\n        </div>\n\n        <div (focus)=\"onSelectFocus($event)\" (blur)=\"blurSearch()\" [tabindex]=\"this.isOpened ? -1 : 0\" class=\"stf-select__search-input\">\n            <ng-content select=\"[search-input]\"></ng-content>\n        </div>\n        <div [id]=\"selectId\" [ngClass]=\"{'stf-select_opened': isOpened, 'stf-select_empty': !options || !options.length}\"\n            class=\"stf-select__options-wraped\">\n            <div *ngIf=\"!isNeedHideOption\"\n                class=\"stf-select__options stf-select-options\"\n                role=\"combobox\" aria-haspopup=\"true\" aria-expanded=\"false\"\n                (keydown)=\"keyDown($event)\" \n            >\n                <div (mousewheel)=\"onMouseWheal($event)\"\n                (scroll)=\"makeLoadMore($event)\"\n                    class=\"stf-select__options-container\">\n                    <ng-content></ng-content>\n                </div>\n                <ng-content select=\"[button]\"></ng-content>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/stf-ng-select/stf-ng-select/stf-ng-select.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StfNgSelectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_hub__ = __webpack_require__("../../../../../src/app/stf-ng-select/stf-ng-select/event-hub.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_lib__ = __webpack_require__("../../../../../src/app/stf-ng-select/stf-ng-select/dom-lib.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StfNgSelectComponent = StfNgSelectComponent_1 = (function () {
    function StfNgSelectComponent(el, cd) {
        var _this = this;
        this.el = el;
        this.cd = cd;
        this.more = false;
        this.needFocusInpOnTab = false;
        this.optionsWrapClass = '';
        this.pending = false;
        this.loadMore = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.isFocusSearh = false;
        this.isOpened = false;
        this.isNeedHideOption = false;
        this.hasAncesroFixed = false;
        this.options = [];
        this.selectId = '';
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
            this.hasAncesroFixed = Object(__WEBPACK_IMPORTED_MODULE_2__dom_lib__["e" /* hasPositioFixedAncestor */])(this.elN);
            __WEBPACK_IMPORTED_MODULE_1__event_hub__["a" /* eventHub */].$emit('stf-select-option.opened', {
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
            __WEBPACK_IMPORTED_MODULE_1__event_hub__["a" /* eventHub */].$emit('stf-select.opened', { idSelect: this.selectId });
        }
    };
    StfNgSelectComponent.prototype.ngOnDestroy = function () {
        document.body.removeChild(this.selectOptionsWrapEl);
        document.removeEventListener('scroll', this.onScroll, true);
        window.removeEventListener('click', this.runOnWindowClick);
        window.removeEventListener('resize', this.runOnResize);
        __WEBPACK_IMPORTED_MODULE_1__event_hub__["a" /* eventHub */].$off('stf-select-option.selected', this.optionSelectedCallback);
        __WEBPACK_IMPORTED_MODULE_1__event_hub__["a" /* eventHub */].$off('stf-select-option.mounted', this.onOptionMounted);
        __WEBPACK_IMPORTED_MODULE_1__event_hub__["a" /* eventHub */].$off('stf-select-option.destroyed', this.onOptionDestroyed);
        __WEBPACK_IMPORTED_MODULE_1__event_hub__["a" /* eventHub */].$off('stf-select.opened', this.onOpenedSelect);
        __WEBPACK_IMPORTED_MODULE_1__event_hub__["a" /* eventHub */].$off('stf-select-button.clicked', this.onButtonClick);
        if (this.optionsMutationObserver) {
            this.optionsMutationObserver.disconnect();
        }
    };
    StfNgSelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectContainerEl = this.elN.querySelector('.stf-select__container');
        this.optToBody();
        this.isMob = Object(__WEBPACK_IMPORTED_MODULE_2__dom_lib__["f" /* isMob */])();
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
        __WEBPACK_IMPORTED_MODULE_1__event_hub__["a" /* eventHub */].$on('stf-select-option.selected', this.optionSelectedCallback);
        __WEBPACK_IMPORTED_MODULE_1__event_hub__["a" /* eventHub */].$on('stf-select-option.mounted', this.onOptionMounted);
        __WEBPACK_IMPORTED_MODULE_1__event_hub__["a" /* eventHub */].$on('stf-select-option.destroyed', this.onOptionDestroyed);
        __WEBPACK_IMPORTED_MODULE_1__event_hub__["a" /* eventHub */].$on('stf-select.opened', this.onOpenedSelect);
        __WEBPACK_IMPORTED_MODULE_1__event_hub__["a" /* eventHub */].$on('stf-select-button.clicked', this.onButtonClick);
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
                    !Object(__WEBPACK_IMPORTED_MODULE_2__dom_lib__["d" /* hasClass */])(document.activeElement, 'stf-select__fixed-option') &&
                    !Object(__WEBPACK_IMPORTED_MODULE_2__dom_lib__["d" /* hasClass */])(document.activeElement, 'stf-select-option') &&
                    !Object(__WEBPACK_IMPORTED_MODULE_2__dom_lib__["b" /* findAncestor */])(document.activeElement, '.stf-select__fixed-option')) {
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
                        !Object(__WEBPACK_IMPORTED_MODULE_2__dom_lib__["d" /* hasClass */])(document.activeElement, 'stf-select__fixed-option') &&
                        !Object(__WEBPACK_IMPORTED_MODULE_2__dom_lib__["d" /* hasClass */])(document.activeElement, 'stf-select-option') &&
                        !Object(__WEBPACK_IMPORTED_MODULE_2__dom_lib__["b" /* findAncestor */])(document.activeElement, '.stf-select__fixed-option')) {
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
            if (vm.isOpened && !Object(__WEBPACK_IMPORTED_MODULE_2__dom_lib__["b" /* findAncestor */])(evt.target, '.stf-select')) {
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
        this.hasAncesroFixed = Object(__WEBPACK_IMPORTED_MODULE_2__dom_lib__["e" /* hasPositioFixedAncestor */])(this.elN);
        this.selectOptionsEl.style.position = this.hasAncesroFixed
            ? 'fixed'
            : 'absolute';
        var containerOffset = Object(__WEBPACK_IMPORTED_MODULE_2__dom_lib__["c" /* getOffset */])(this.selectContainerEl);
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
            Object(__WEBPACK_IMPORTED_MODULE_2__dom_lib__["g" /* removeClass */])(this.selectOptionsEl, 'stf-select__options_top');
            Object(__WEBPACK_IMPORTED_MODULE_2__dom_lib__["g" /* removeClass */])(this.elN, 'stf-select__options_top');
        }
        else {
            this.selectOptionsEl.style.top =
                containerOffset.top - optionsHeight - 20 + 'px';
            this.selectOptionsEl.style.left = containerOffset.left + 'px';
            this.selectOptionsEl.style.width =
                this.selectContainerEl.offsetWidth + 'px';
            Object(__WEBPACK_IMPORTED_MODULE_2__dom_lib__["a" /* addClass */])(this.selectOptionsEl, 'stf-select__options_top');
            Object(__WEBPACK_IMPORTED_MODULE_2__dom_lib__["a" /* addClass */])(this.elN, 'stf-select__options_top');
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
        __WEBPACK_IMPORTED_MODULE_1__event_hub__["a" /* eventHub */].$emit('stf-select-option.opened', {
            selectId: this.selectId
        });
        Object(__WEBPACK_IMPORTED_MODULE_2__dom_lib__["a" /* addClass */])(this.elN.querySelector('.stf-select'), 'stf-select_opened');
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
        __WEBPACK_IMPORTED_MODULE_1__event_hub__["a" /* eventHub */].$emit('stf-select.opened', { selectId: this.selectId });
    };
    StfNgSelectComponent.prototype.optToBody = function () {
        this.selectOptionsWrapEl = this.elN.querySelector('.stf-select__options-wraped');
        document.body.appendChild(this.selectOptionsWrapEl);
    };
    return StfNgSelectComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], StfNgSelectComponent.prototype, "more", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], StfNgSelectComponent.prototype, "needFocusInpOnTab", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], StfNgSelectComponent.prototype, "optionsWrapClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], StfNgSelectComponent.prototype, "pending", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _a || Object)
], StfNgSelectComponent.prototype, "loadMore", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _b || Object)
], StfNgSelectComponent.prototype, "change", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], StfNgSelectComponent.prototype, "value", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('focus', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StfNgSelectComponent.prototype, "onClick", null);
StfNgSelectComponent = StfNgSelectComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'stf-ng-select',
        template: __webpack_require__("../../../../../src/app/stf-ng-select/stf-ng-select/stf-ng-select.component.html"),
        styles: [__webpack_require__("../../../../../src/app/stf-ng-select/stf-ng-select/stf-ng-select.component.css")],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
                useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* forwardRef */])(function () { return StfNgSelectComponent_1; }),
                multi: true
            }
        ],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]) === "function" && _d || Object])
], StfNgSelectComponent);

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
var StfNgSelectComponent_1, _a, _b, _c, _d;
//# sourceMappingURL=stf-ng-select.component.js.map

/***/ }),

/***/ "../../../../../src/app/stf-ng-select/stf-ng-select/stf-select-option.html":
/***/ (function(module, exports) {

module.exports = "<div tabindex=\"0\"  class=\"stf-select-option\"\n    (click)=\"selectValue($event)\"\n    (keydown)=\"keyDown($event)\"\n    >\n    <ng-content></ng-content>\n</div>"

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map