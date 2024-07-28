import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxResizeEventDirective } from './ngx-resize-event.directive';



@NgModule({
  declarations: [NgxResizeEventDirective],
  imports: [
    CommonModule
  ],
  exports:[NgxResizeEventDirective]
})
export class NgxResizeEventModule { }
