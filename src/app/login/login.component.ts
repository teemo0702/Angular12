import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private common: CommonService ) { }

  public ngOnInit(): void {
  }

  login() {
    this.common.login('Huy');
  }

}
