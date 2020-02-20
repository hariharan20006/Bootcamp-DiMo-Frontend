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
    console.log('url', url, url==='/', isValidUser);
    let dashboardUrls = ['/login', '/signup', '/'];
    let loginUrls = ['/login', '/signup'];
    if (isValidUser && dashboardUrls.includes(url)) {
      this.router.navigate(['dashboard']);
    }
    if(!isValidUser && !loginUrls.includes(url)) {
      this.router.navigate(['/login']);
    }
    return true;
  }
}
