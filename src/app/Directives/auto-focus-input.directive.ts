import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutoFocusInput]'
})
export class AutoFocusInputDirective {

  constructor( private el: ElementRef) {
    setTimeout(() => {
      el.nativeElement.focus();
    }, 100);
  }

}
