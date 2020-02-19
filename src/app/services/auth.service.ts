import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';
import { userDetails, postSuccessResponse } from '../interfaces';
import { CREATE_USER_URL } from '../app_constants';
import { browserStorage } from '../services/browserStorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public validUser: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private httpService: HttpService) {}

  public isUserLoggedIn(): boolean {
    let token = browserStorage.get('token');
    let trimmedToken = token;
    console.log(trimmedToken);
    return (
      null !== trimmedToken || trimmedToken !== '' || trimmedToken !== undefined
    );
  }

  public createAccount(payload: userDetails): Observable<any> {
    return this.httpService.Post<postSuccessResponse, userDetails>(
      CREATE_USER_URL,
      payload
    );
  }
}
