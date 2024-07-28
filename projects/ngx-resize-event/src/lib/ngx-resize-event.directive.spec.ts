import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NgxResizeEventDirective, ResizedEvent } from './ngx-resize-event.directive';

@Component({
  template: `
    <div style="width: 100px; height: 100px;" (ngxResize)="onElementResize($event)">
      <!-- Your resizable content here -->
    </div>
  `
})
class TestComponent {
  onElementResize(event: ResizedEvent) {
    // Handle resize event in test
  }
}

describe('NgxResizeEventDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let directiveElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxResizeEventDirective, TestComponent ]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    directiveElement = fixture.debugElement.query(By.directive(NgxResizeEventDirective));

    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = directiveElement.injector.get(NgxResizeEventDirective);
    expect(directive).toBeTruthy();
  });

  it('should emit ResizedEvent on element resize', () => {
    const directive = directiveElement.injector.get(NgxResizeEventDirective);
    const spyOnResizeEvent = spyOn(component, 'onElementResize');

    const testRect = new DOMRectReadOnly(0, 0, 200, 200); // Simulate a resized rect
    directive.ngxResize.emit(new ResizedEvent(testRect, undefined));

    fixture.detectChanges();

    expect(spyOnResizeEvent).toHaveBeenCalled();
    const emittedEvent: ResizedEvent = spyOnResizeEvent.calls.mostRecent().args[0];
    expect(emittedEvent).toBeDefined();
    expect(emittedEvent.newRect.width).toBe(200);
    expect(emittedEvent.newRect.height).toBe(200);
  });

  // Add more test cases as needed

});
