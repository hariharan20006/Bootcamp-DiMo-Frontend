import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  isValidUser: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.validUser.subscribe(isValid => {
      this.isValidUser = isValid;
    });
    this.isValidUser = authService.isUserLoggedIn();
  }

  canActivate() {
    if (this.authService.isUserLoggedIn()) {
      this.router.navigate(['dashboard']);
    } else {
      this.router.navigate(['login']);
    }
    return true;
  }
}
