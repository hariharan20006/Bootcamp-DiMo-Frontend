import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userDetails: any;

  constructor(private authService: AuthService) {
    this.userDetails = {
      firstName: '',
      lastName: '',
      emailId: '',
      prefrences: [
        {name: 'Genre', Value: []},
        {name: 'Language', Value: []}
      ]
    }
   }

  ngOnInit(): void {
    this.authService.userDataAvailable.subscribe(data => {
      if(data) {
        
        this.userDetails = this.authService.userData();
      } else {
        this.userDetails = {
          firstName: '',
          lastName: '',
          emailId: '',
          prefrences: [
            {name: 'Genre', Value: []},
            {name: 'Language', Value: []}
          ]
        };
      }
    })
  }


}
