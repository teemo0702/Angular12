import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn$: Observable<boolean> = new Observable<boolean>();

  constructor( private common: CommonService ) { }

  public ngOnInit(): void {
    this.isLoggedIn$ = this.common.isLoggedIn();
  }

  logout() {
    this.common.logout();
  }
}
