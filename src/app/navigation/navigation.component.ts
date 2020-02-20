import { Component, OnInit } from '@angular/core';
import { routeMapping } from '../static-data';
import { browserStorage } from '../services/browserStorage.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public menuOpen: Boolean = false;
  constructor(private router: Router,
    private authService: AuthService) {}

  ngOnInit(): void {}
  
  toggleMenu(){
    this.menuOpen = !this.menuOpen
  }

  logout(){
   this.authService.logout();
   this.router.navigate(['/login']);
  }

  onMenuClickedOutside(e: Event) {
    if(this.menuOpen){
      this.menuOpen = false;
    }

  }


}
