import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public counter = 5;

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private router: Router) {}

  public square(n: number): number {
    return n * n;
  }
  public submitData(data: any): void {
    console.log('Loading ', data);
  }

  public logout() {
    console.log('Logging out');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
  public login(user: string) {
    console.log('Logging in with user ' + user);
    if (user !== '') {
      this.loggedIn.next(true);
      this.router.navigate(['/home']);
    }
  }
  public isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}
