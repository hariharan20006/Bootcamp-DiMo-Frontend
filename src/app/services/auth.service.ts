import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { HttpService } from './http.service';
import { userDetails, postSuccessResponse } from '../interfaces';
import { CREATE_USER_URL } from '../app_constants';
import { LoginResponse } from '../login/login.component';
import BrowserStorage, {  browserStorage } from './browserStorage.service';
import { error } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserValid : boolean
  public validUser: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  private browserStorage: BrowserStorage;
  constructor(private httpService: HttpService) {
    this.browserStorage = browserStorage;
    this.getValidUser();
   }

  public getValidUser() {
   let val = this.browserStorage.get('token');
    console.log('stogdd', val);
   if (val) {
     this.setIsUSerValid(true);
   } else {
     this.setIsUSerValid(false);
   }
  }

  private setIsUSerValid(value: boolean) {
    this.isUserValid = value;
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

  public afterEffectsLoginCrear(response: Observable<any>) {
    response.subscribe(resp => {
      console.log('resp', resp);
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
