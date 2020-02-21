import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { 
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let url = state.url;
    let isValidUser = this.authService.ValidateUser();
    let dashboardUrls = ['/login', '/signup', '/'];
    let validUrls = ['/login', '/signup', '/', '/dashboard', '/profile'];
    let loginUrls = ['/login', '/signup'];
    if (isValidUser && (dashboardUrls.includes(url)|| !validUrls.includes(url))) {
      this.router.navigate(['dashboard']);
    }
    if(!isValidUser && !loginUrls.includes(url)) {
      this.router.navigate(['/login']);
    }
    return true;
  }
}
