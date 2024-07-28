import * as i0 from '@angular/core';
import { EventEmitter, Directive, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class ResizedEvent {
    newRect;
    oldRect;
    isFirst;
    constructor(newRect, oldRect) {
        this.newRect = newRect;
        this.oldRect = oldRect;
        this.isFirst = oldRect == null;
    }
}
class NgxResizeEventDirective {
    elementRef;
    ngZone;
    ngxResize = new EventEmitter();
    resizeObserver = null;
    oldRect;
    constructor(elementRef, ngZone) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
    }
    ngAfterViewInit() {
        this.ngZone.runOutsideAngular(() => {
            this.resizeObserver = new ResizeObserver(entries => {
                entries.forEach(entry => {
                    const newRect = entry.contentRect;
                    const resizedEvent = new ResizedEvent(newRect, this.oldRect);
                    this.ngxResize.emit(resizedEvent);
                    this.oldRect = newRect;
                });
            });
            this.resizeObserver.observe(this.elementRef.nativeElement);
        });
    }
    ngOnDestroy() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: NgxResizeEventDirective, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.1.1", type: NgxResizeEventDirective, selector: "[ngxResize]", outputs: { ngxResize: "ngxResize" }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: NgxResizeEventDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxResize]'
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.NgZone }], propDecorators: { ngxResize: [{
                type: Output
            }] } });

class NgxResizeEventModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: NgxResizeEventModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.1.1", ngImport: i0, type: NgxResizeEventModule, declarations: [NgxResizeEventDirective], imports: [CommonModule], exports: [NgxResizeEventDirective] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: NgxResizeEventModule, imports: [CommonModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.1", ngImport: i0, type: NgxResizeEventModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NgxResizeEventDirective],
                    imports: [
                        CommonModule
                    ],
                    exports: [NgxResizeEventDirective]
                }]
        }] });

/*
 * Public API Surface of ngx-resize-event
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxResizeEventDirective, NgxResizeEventModule, ResizedEvent };
//# sourceMappingURL=ngx-resize-event.mjs.map
