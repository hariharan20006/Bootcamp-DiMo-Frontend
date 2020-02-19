import { Component, OnInit } from '@angular/core';
import { routeMapping } from '../static-data';
import { AuthService } from '../services/auth.service';
import { browserStorage } from '../services/browserStorage.service';
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isLoggedIn: Boolean;
  constructor(private authService: AuthService, private router: Router) {
    authService.validUser.subscribe(isValid => {
      this.isLoggedIn = isValid;
    });
    this.isLoggedIn = authService.isUserLoggedIn();
    console.log('login status', this.isLoggedIn);
  }

  ngOnInit(): void {}

  onLogoutClick(): void {
    console.log('logout');
    browserStorage.remove('token');
    this.isLoggedIn = false;
    this.router.navigate(['login']);
  }
}
