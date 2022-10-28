import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ChildrenComponent } from '../children/children.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit{
  // public parentMessenger = '';
  // public nameColor = 'red';
  // public nameAcc = '';
  // @ViewChild('thangTeo') thangTeo?: ChildrenComponent;
  // @ViewChild('thangTi') thangTi?: ChildrenComponent;

  // constructor() {
  // }

  // // ngOnChanges() {
  // //   this.parentMessenger = 'Hello ' + this.nameAcc;
  // // }

  // setName(nameChild2: string) {
  //   console.log("Output " + nameChild2);
  //   this.parentMessenger = 'Hello ' + nameChild2;
  // }

  // ngOnInit(): void {
  // }

  // public childCall(name: string): void {
  //   console.log('Đứa nào gọi tao');
  //   this.parentMessenger = 'Hello ' + name;
  // }

  // public getMoney() {
  //   this.thangTeo?.getMoney(10);
  //   this.thangTi?.getMoney(20);
  // }


  // lifecycle
  isChild = true;
  firstName = "Tran";

  constructor() {
    console.log("Parent Constructor Called");
  }

  ngOnChanges() {
    console.log("Parent Onchanges");
  }

  ngOnInit(): void {
    console.log("Parent OnInit - Component is initialized");
  }

  ngDoCheck() {
    console.log("Parent DoCheck");
  }

  // ngAfterContentInit(): void {
  //   console.log("Parent After Content Init");
  // }

  // ngAfterContentChecked(): void {
  //   console.log("Parent After Content Checked");
  // }

  // ngAfterViewInit(): void {
  //   console.log("Parent After View Init");
  // }

  // ngAfterViewChecked(): void {
  //   console.log("Parent After View Checked");
  // }
  // ngOnDestroy(): void {
  //   console.log("Parent Destroy");
  // }
  toggleChild() {
    this.isChild = !this.isChild;
  }
}
