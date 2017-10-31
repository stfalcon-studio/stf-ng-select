import { OnInit, OnDestroy, ElementRef } from '@angular/core';
export declare class StfNgSelectButtonComponent implements OnInit, OnDestroy {
    private el;
    selectId: string;
    constructor(el: ElementRef);
    ngOnDestroy(): void;
    ngOnInit(): void;
    onEnter(event: any): boolean;
}
