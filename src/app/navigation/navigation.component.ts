import { Component, OnInit } from '@angular/core';
import { routeMapping } from '../static-data';
import { browserStorage } from '../services/browserStorage.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { HttpService } from '../services/http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public menuOpen: Boolean = false;
  public userDetails;
  private isDataAvailabe: Subscription;
  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.userDetails = {
      firstName: ''
    }
  }

  ngOnInit(): void {
    this.getUserDetails();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  getUserDetails() {
    this.isDataAvailabe = this.authService.userDataAvailable.subscribe(data => {
      if(data) {
        this.userDetails = this.authService.userData();
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  onMenuClickedOutside(e: Event) {
    if (this.menuOpen) {
      this.menuOpen = false;
    }
  }
}
