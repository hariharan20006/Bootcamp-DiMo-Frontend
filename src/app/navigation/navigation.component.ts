import { Component, OnInit } from '@angular/core';
import { routeMapping } from '../static-data';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public menuOpen: Boolean = false;
  constructor() {}

  ngOnInit(): void {}
  
  toggleMenu(){
    this.menuOpen = !this.menuOpen
  }

  logout(){
    //Todo: remove token from browser storage
  }


}
