import { Directive, ElementRef, Output, EventEmitter, OnDestroy, NgZone } from '@angular/core';

export class ResizedEvent {
  public newRect: DOMRectReadOnly;
  public oldRect?: DOMRectReadOnly;
  public isFirst: boolean;

  constructor(newRect: DOMRectReadOnly, oldRect?: DOMRectReadOnly) {
    this.newRect = newRect;
    this.oldRect = oldRect;
    this.isFirst = oldRect == null;
  }
}

@Directive({
  selector: '[ngxResize]'
})
export class NgxResizeEventDirective {

  @Output() ngxResize: EventEmitter<ResizedEvent> = new EventEmitter();

  private resizeObserver: ResizeObserver | null = null;
  private oldRect: DOMRectReadOnly | undefined;


  constructor(private elementRef: ElementRef, private ngZone: NgZone) {}

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
}
