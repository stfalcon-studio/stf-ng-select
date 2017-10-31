export interface Position {
    left: number;
    top: number;
}
export declare function getOffset(obj: HTMLElement): Position;
export declare function findAncestor(el: HTMLElement, sel: any): Element;
export declare function hasPositioFixedAncestor(el: HTMLElement): boolean;
export declare function isMob(): boolean;
export declare function triggerEvent(el: any, eventName: any, options: any): void;
export declare function hasClass(el: HTMLElement, className: string): boolean;
export declare function addClass(el: HTMLElement, className: string): void;
export declare function removeClass(el: any, className: any): void;
