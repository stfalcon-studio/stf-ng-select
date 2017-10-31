export declare class EventHub {
    eventsCollection: any;
    constructor();
    $emit(name: string, event: any): void;
    $on(name: string, callback: Function): void;
    $off(name: string, callback: Function): void;
}
export declare const eventHub: EventHub;
