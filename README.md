# Angular Resize Event

[![github version](https://img.shields.io/github/package-json/v/vdolek/angular-resize-event/master?label=github)](https://github.com/vdolek/angular-resize-event)
[![npm version](https://img.shields.io/npm/v/angular-resize-event)](https://www.npmjs.com/package/angular-resize-event)
[![downloads](https://img.shields.io/npm/dt/angular-resize-event)](https://www.npmjs.com/package/angular-resize-event)
[![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/vdolek/angular-resize-event)](https://snyk.io/test/github/vdolek/angular-resize-event)

Angular directive for detecting changes of an element size. Support for Angular 14, 15, 16, 17, 18.

It is as simple as:

```html
<div (ngxResize)="onResized($event)"></div>
```

## Playground

[StackBlitz playground](https://stackblitz.com/edit/angular-resize-event-playground?file=src/app/app.component.html)

## Using the library

Import the library in any Angular application by running:

```bash
$ npm install angular-resize-event
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Import the library module
import { NgxResizeEventModule } from 'angular-resize-event';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify NgxResizeEventModule library as an import
    NgxResizeEventModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```

Once your library is imported, you can use its `ngxResize` directive in your Angular application:

```html
<div (ngxResize)="onResized($event)"></div>
```

```typescript
import { Component } from '@angular/core';

// Import the ngxResize event model
import { ResizedEvent } from 'angular-resize-event';

@Component({...})
class MyComponent {
  width: number;
  height: number;

  onResized(event: ResizedEvent) {
    this.width = event.newRect.width;
    this.height = event.newRect.height;
  }
}
```

## License

MIT © [Ankit Aranya](mailto:ankitaranya8@gmail.com)