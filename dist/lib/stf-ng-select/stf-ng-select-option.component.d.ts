import { OnInit, ElementRef, OnDestroy } from '@angular/core';
export declare class StfNgSelectOptionComponent implements OnInit, OnDestroy {
    private el;
    value: any;
    isSelected: boolean;
    selectId: string;
    constructor(el: ElementRef);
    keyDown(event: any): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    selectValue(event: any): void;
}
