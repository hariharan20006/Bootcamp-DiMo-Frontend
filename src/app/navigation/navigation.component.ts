import { Component, OnInit } from '@angular/core';
import { routeMapping } from '../static-data';
import { browserStorage } from '../services/browserStorage.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public menuOpen: Boolean = false;
  public userDetails;
  constructor(
    private router: Router,
    private authService: AuthService,
    private httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.getUserDetails();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  async getUserDetails() {
    let token = browserStorage.storage.token;
    let params = new HttpParams();
    let header = new HttpHeaders({
      Authorization: token.replace(/['"]+/g, '')
    });
    await this.httpService
      .Get<any>(`/api/profile/details`, params)
      .subscribe(data => {
        this.userDetails = data;
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
