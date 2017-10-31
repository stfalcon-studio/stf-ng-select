"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var stf_ng_select_component_1 = require("./stf-ng-select/stf-ng-select.component");
var stf_ng_select_option_component_1 = require("./stf-ng-select/stf-ng-select-option.component");
var stf_ng_select_button_component_1 = require("./stf-ng-select/stf-ng-select-button.component");
var StfNgSelectModule = (function () {
    function StfNgSelectModule() {
    }
    return StfNgSelectModule;
}());
StfNgSelectModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            stf_ng_select_component_1.StfNgSelectComponent,
            stf_ng_select_option_component_1.StfNgSelectOptionComponent,
            stf_ng_select_button_component_1.StfNgSelectButtonComponent
        ],
        exports: [
            stf_ng_select_component_1.StfNgSelectComponent,
            stf_ng_select_option_component_1.StfNgSelectOptionComponent,
            stf_ng_select_button_component_1.StfNgSelectButtonComponent
        ],
    })
], StfNgSelectModule);
exports.StfNgSelectModule = StfNgSelectModule;
