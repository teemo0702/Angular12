import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public fruits = [
    {name: 'Táo', price: 100, sale: true},
    {name: 'Chuối', price: 10, sale: false},
    {name: 'Cam', price: -50, sale: true}
  ];

  constructor() { }

  public ngOnInit(): void {

  }
}
