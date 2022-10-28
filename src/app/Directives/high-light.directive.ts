import { Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  @Input() nameHighLight = '';
  @Input() nameChild: string = '';
  @Output() childName = new EventEmitter();

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    console.log("Input " + this.nameChild);
    this.childName.emit(this.nameChild);
  }

  ngOnChanges() {
    this.el.nativeElement.style.color = this.nameHighLight;
  }
}
