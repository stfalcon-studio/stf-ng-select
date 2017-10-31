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
var StfNgSelectButtonComponent = (function () {
    function StfNgSelectButtonComponent(el) {
        this.el = el;
    }
    StfNgSelectButtonComponent.prototype.ngOnDestroy = function () {
        event_hub_1.eventHub.$emit('stf-select-option.destroyed', {
            option: this,
            selectId: this.selectId,
        });
    };
    StfNgSelectButtonComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            var el = dom_lib_1.findAncestor(_this.el.nativeElement, '.stf-select__options-wraped');
            if (el) {
                _this.selectId = el.getAttribute('id');
            }
            event_hub_1.eventHub.$emit('stf-select-option.mounted', {
                option: _this,
                selectId: _this.selectId,
            });
            _this.el.nativeElement
                .querySelector('button')
                .addEventListener('click', function () {
                event_hub_1.eventHub.$emit('stf-select-button.clicked', {
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
    core_1.Component({
        selector: 'stf-ng-select-button',
        template: "\n    <div tabindex=\"0\" (keydown.enter)=\"onEnter($event)\" class=\"stf-select__fixed-option\">\n       <ng-content></ng-content>\n    </div>\n  ",
        styles: ["\n\n  "]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], StfNgSelectButtonComponent);
exports.StfNgSelectButtonComponent = StfNgSelectButtonComponent;
