import { Component, OnInit } from '@angular/core';
import { routeMapping } from '../static-data';
import { browserStorage } from '../services/browserStorage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public menuOpen: Boolean = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  
  toggleMenu(){
    this.menuOpen = !this.menuOpen
  }

  logout(){
    browserStorage.remove('token');
    this.router.navigate(['/login'])
  }


}
