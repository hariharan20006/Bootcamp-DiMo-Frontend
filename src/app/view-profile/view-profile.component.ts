import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})



export class ViewProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Todo: 
    // Get Token from LocalStorage
    // Make API Call to get Profile Details with Token
    // Use Gravatar to get Image with Email Address
    // Store data in rxg State
    // Render on UI   
  }

}
