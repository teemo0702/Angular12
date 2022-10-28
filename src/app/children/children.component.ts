import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit {
  // @Input() name: string = '';
  // @Output() childCall: EventEmitter<any> = new EventEmitter();

  // constructor() { }

  // ngOnInit(): void {
  // }

  // public callParent(): void {
  //   console.log('Call Parent');
  //   this.childCall.emit(this.name);
  // }

  // public getMoney(amount: number) {
  //   console.log('Con là ' + this.name + '. Cảm ơn cha cho con ' + amount + ' đồng');
  // }

  // lifecycle
  // counter = 0;
  // interval: any;

  @Input()
  nameChild = '';

  @ContentChild('parentContent', {static: false}) parentContent: any;
  @ViewChild('childContent', {static: false}) childContent: any;
  // @ContentChild('parentContent') parentC?: ElementRef;
  // @ViewChild('childContent', {read: ElementRef}) tref?: ElementRef;

  constructor() {
    console.log('Child Constructor called');
  }

  ngOnChanges() {
    console.log('Child Onchanges');
    // console.log('onChanges - ' + this.parentContent);
    // console.log('onChanges - ' + this.childContent);
  }

  ngOnInit(): void {
    // this.firstName = 'Duc';
    console.log('Child OnInit - Component is initialized');
    console.log('init - ' + this.parentContent);
    console.log('init - ' + this.childContent);
    // this.interval = setInterval(() => {
    //   this.counter = this.counter + 1;
    //   console.log(this.counter);
    // }, 1000);
  }

  // ngDoCheck() {
  //   console.log('Child DoCheck');
  //   console.log('doCheck - ' + this.parentContent);
  //   console.log('doCheck - ' + this.childContent);
  // }

  // ngAfterContentInit() {
  //   console.log('Child After Content Init');
  //   console.log('afterContentInit - ' + this.parentContent);
  //   console.log('afterContentInit - ' + this.childContent);
  //   // console.log(this.parentC?.nativeElement.innerText);
  // }

  // ngAfterContentChecked() {
  //   console.log('Child After Content Checked');
  //   console.log('afterContentChecked - ' + this.parentContent);
  //   console.log('afterContentChecked - ' + this.childContent);
  // }

  // ngAfterViewInit() {
  //   console.log('Child After View Init');
  //   console.log('afterViewInit - ' + this.parentContent);
  //   console.log('afterViewInit - ' + this.childContent);
  //   // console.log(this.tref?.nativeElement.innerText);
  // }

  // ngAfterViewChecked() {
  //   console.log('Child After View Checked');
  //   console.log('afterViewChecked - ' + this.parentContent);
  //   console.log('afterViewChecked - ' + this.childContent);
  // }

  // ngOnDestroy() {
  //   // clearInterval(this.interval);
  //   console.log('Child OnDestroy - Component is destroyed');
  // }

}
