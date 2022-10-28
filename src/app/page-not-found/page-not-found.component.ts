import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  public loginName = 'admin';
  public myColor = 'orange';
  public counter = 0;
  public counterSquare = 0;

  constructor(private common: CommonService) { }

  ngOnInit(): void {
    this.counter = this.common.counter;
    this.counterSquare = this.common.square(this.counter);
  }

}
