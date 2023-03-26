import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor() {}

  // Call this method when the user logs in.
  setLoggedIn(value: boolean) {
    this.isAuthenticatedSubject.next(value);
  }
}
