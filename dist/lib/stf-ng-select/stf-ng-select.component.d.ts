import { OnInit, ElementRef, EventEmitter, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class StfNgSelectComponent implements OnInit, OnDestroy, ControlValueAccessor {
    private el;
    private cd;
    more: boolean;
    needFocusInpOnTab: boolean;
    optionsWrapClass: string;
    pending: boolean;
    loadMore: EventEmitter<any>;
    change: EventEmitter<any>;
    isFocusSearh: boolean;
    isOpened: boolean;
    isNeedHideOption: boolean;
    hasAncesroFixed: boolean;
    options: any[];
    value: any;
    selectId: string;
    selectDisabled: boolean;
    readonly elN: any;
    selected: any;
    private beforeSetValueFocus;
    private selectContainerEl;
    private inputEl;
    private isMob;
    private onButtonClick;
    private onDocumentSctoll;
    private onOptionDestroyed;
    private onOptionMounted;
    private optionsHeightBefore;
    private onOpenedSelect;
    private onScroll;
    private optionsMutationObserver;
    private optionSelectedCallback;
    private runOnResize;
    private runOnWindowClick;
    private selectOptionsEl;
    private selectOptionsoContainerEl;
    private selectOptionsWrapEl;
    constructor(el: ElementRef, cd: ChangeDetectorRef);
    onClick($event: any): void;
    blurSearch(): void;
    keyDown(event: any): void;
    keyPress(event: any): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    makeLoadMore: () => void;
    onMouseWheal(event: any): void;
    onSelectFocus(event: any): void;
    open(event: any): void;
    openClose(event: any): void;
    private addOnBlurInputListener();
    private addwidowResizeListener();
    private addOutClickListener();
    private calculatePositionAnsSize();
    propagateChange: (_: any) => void;
    registerOnChange(fn: any): void;
    registerOnTouched(): void;
    waraperClick(event: any): void;
    writeValue(value: any): void;
    private close();
    private keyArrowDown(event);
    private getArrayElementForFocus();
    private getCurentFocuseIndex(elements);
    private initOnChangeDetection();
    private keyArrowUp(event);
    private makeOpen();
    private optToBody();
}