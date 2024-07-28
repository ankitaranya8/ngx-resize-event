import { Directive, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class ResizedEvent {
    newRect;
    oldRect;
    isFirst;
    constructor(newRect, oldRect) {
        this.newRect = newRect;
        this.oldRect = oldRect;
        this.isFirst = oldRect == null;
    }
}
export class NgxResizeEventDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXJlc2l6ZS1ldmVudC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtcmVzaXplLWV2ZW50L3NyYy9saWIvbmd4LXJlc2l6ZS1ldmVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYyxNQUFNLEVBQUUsWUFBWSxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7QUFFL0YsTUFBTSxPQUFPLFlBQVk7SUFDaEIsT0FBTyxDQUFrQjtJQUN6QixPQUFPLENBQW1CO0lBQzFCLE9BQU8sQ0FBVTtJQUV4QixZQUFZLE9BQXdCLEVBQUUsT0FBeUI7UUFDN0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLElBQUksSUFBSSxDQUFDO0lBQ2pDLENBQUM7Q0FDRjtBQUtELE1BQU0sT0FBTyx1QkFBdUI7SUFRZDtJQUFnQztJQU4xQyxTQUFTLEdBQStCLElBQUksWUFBWSxFQUFFLENBQUM7SUFFN0QsY0FBYyxHQUEwQixJQUFJLENBQUM7SUFDN0MsT0FBTyxDQUE4QjtJQUc3QyxZQUFvQixVQUFzQixFQUFVLE1BQWM7UUFBOUMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRyxDQUFDO0lBRXRFLGVBQWU7UUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtZQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNqRCxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUN0QixNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO29CQUNsQyxNQUFNLFlBQVksR0FBRyxJQUFJLFlBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM3RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ3pCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ25DLENBQUM7SUFDSCxDQUFDO3VHQTdCVSx1QkFBdUI7MkZBQXZCLHVCQUF1Qjs7MkZBQXZCLHVCQUF1QjtrQkFIbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtpQkFDeEI7b0dBR1csU0FBUztzQkFBbEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBSZXNpemVkRXZlbnQge1xuICBwdWJsaWMgbmV3UmVjdDogRE9NUmVjdFJlYWRPbmx5O1xuICBwdWJsaWMgb2xkUmVjdD86IERPTVJlY3RSZWFkT25seTtcbiAgcHVibGljIGlzRmlyc3Q6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IobmV3UmVjdDogRE9NUmVjdFJlYWRPbmx5LCBvbGRSZWN0PzogRE9NUmVjdFJlYWRPbmx5KSB7XG4gICAgdGhpcy5uZXdSZWN0ID0gbmV3UmVjdDtcbiAgICB0aGlzLm9sZFJlY3QgPSBvbGRSZWN0O1xuICAgIHRoaXMuaXNGaXJzdCA9IG9sZFJlY3QgPT0gbnVsbDtcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmd4UmVzaXplXSdcbn0pXG5leHBvcnQgY2xhc3MgTmd4UmVzaXplRXZlbnREaXJlY3RpdmUge1xuXG4gIEBPdXRwdXQoKSBuZ3hSZXNpemU6IEV2ZW50RW1pdHRlcjxSZXNpemVkRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByaXZhdGUgcmVzaXplT2JzZXJ2ZXI6IFJlc2l6ZU9ic2VydmVyIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgb2xkUmVjdDogRE9NUmVjdFJlYWRPbmx5IHwgdW5kZWZpbmVkO1xuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIG5nWm9uZTogTmdab25lKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGVudHJpZXMgPT4ge1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1JlY3QgPSBlbnRyeS5jb250ZW50UmVjdDtcbiAgICAgICAgICBjb25zdCByZXNpemVkRXZlbnQgPSBuZXcgUmVzaXplZEV2ZW50KG5ld1JlY3QsIHRoaXMub2xkUmVjdCk7XG4gICAgICAgICAgdGhpcy5uZ3hSZXNpemUuZW1pdChyZXNpemVkRXZlbnQpO1xuICAgICAgICAgIHRoaXMub2xkUmVjdCA9IG5ld1JlY3Q7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5yZXNpemVPYnNlcnZlcikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgfVxuICB9XG59XG4iXX0=