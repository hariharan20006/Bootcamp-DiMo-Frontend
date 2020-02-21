import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { HttpService } from './http.service';
import { userDetails, postSuccessResponse } from '../interfaces';
import { CREATE_USER_URL } from '../app_constants';
import { LoginResponse } from '../login/login.component';
import BrowserStorage, {  browserStorage } from './browserStorage.service';


interface userDetailsResp {firstName: string, lastName: string, emailId: string}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserValid : boolean
  public validUser: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  private browserStorage: BrowserStorage;
  private userDetails : userDetailsResp = {
    firstName: '',
    lastName: '',
    emailId: ''
  };
  public userDataAvailable: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  private userPrefrences; 
  constructor(private httpService: HttpService) {
    this.browserStorage = browserStorage;
    this.getValidUser();
   }

  public getValidUser() {
   let val = this.browserStorage.get('token');
   if (val) {
     this.setIsUSerValid(true);
   } else {
     this.setIsUSerValid(false);
   }
  }

  public logout() {
    browserStorage.remove('token');
    this.setIsUSerValid(false);

  }

  public setIsUSerValid(value: boolean) {
    this.isUserValid = value;
    if (value) {
      this.getUserDetails();
      this.getPrefrences();
    }
    this.validUser.next(value);
  }

  public ValidateUser() {
    return this.isUserValid;
  }

  public createAccount(payload: userDetails): Observable<any> {
    let result = this.httpService.Post<postSuccessResponse, userDetails>(CREATE_USER_URL, payload);
    this.afterEffectsLoginCrear(result);
    return result;
  }

  public login(payload: any):Observable<any> {
    let result = this.httpService.Post<LoginResponse, any> ('/api/profile/login', payload);
    this.afterEffectsLoginCrear(result);
    return result;
  }

  public getUserDetails() {
    this.httpService.Get<userDetailsResp>('/api/profile/details').subscribe(user => {
      console.log('userr', user);

      this.userDetails = user;
      this.userDataAvailable.next(true);
    })
  }

  public getPrefrences() {
    let pref = [
      { name: "Genre", Value : ['Action', 'Romance', 'Horror', 'Comedy', 'Drama']},
      {name: 'Languages', Value: ['Hindi', 'English', 'Tamil', 'Punjabi']}
    ]
    return pref
  }

  public userData() {
    return {...this.userDetails, prefrences: this.getPrefrences()};
  }

  public afterEffectsLoginCrear(response: Observable<any>) {
    response.subscribe(resp => {
      this.browserStorage.save('token', resp.token).then(token => {
        this.setIsUSerValid(true);

      }, error => {
        this.setIsUSerValid(false);
      });
      
    }, error => {
      this.browserStorage.remove('token');
      this.setIsUSerValid(false);
    });
  }
}
