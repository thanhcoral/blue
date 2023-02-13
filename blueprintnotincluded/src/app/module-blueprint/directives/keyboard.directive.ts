import { Directive, Output, HostListener, EventEmitter } from '@angular/core';

@Directive({ selector: '[keyEvents]' })
export class KeyboardDirective {
  @Output() keyPress = new EventEmitter();

  @HostListener('document:keydown', ['$event']) onKeyPress(event: any) {
    this.keyPress.emit(event);
  }

}