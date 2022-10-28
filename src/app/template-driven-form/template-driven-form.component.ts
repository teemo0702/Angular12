import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss'],
})
export class TemplateDrivenFormComponent implements OnInit {
  public name = 'Duc';
  public book = {name: '123', year: 1993, stars: null};

  constructor(private common: CommonService) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    // console.log(this.book);
  }

  public submitForm(): void {
    // console.log(this.name);
    this.common.submitData(this.book);
  }
}
