import { ElementRef, EventEmitter, NgZone } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ResizedEvent {
    newRect: DOMRectReadOnly;
    oldRect?: DOMRectReadOnly;
    isFirst: boolean;
    constructor(newRect: DOMRectReadOnly, oldRect?: DOMRectReadOnly);
}
export declare class NgxResizeEventDirective {
    private elementRef;
    private ngZone;
    ngxResize: EventEmitter<ResizedEvent>;
    private resizeObserver;
    private oldRect;
    constructor(elementRef: ElementRef, ngZone: NgZone);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxResizeEventDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NgxResizeEventDirective, "[ngxResize]", never, {}, { "ngxResize": "ngxResize"; }, never, never, false, never>;
}
