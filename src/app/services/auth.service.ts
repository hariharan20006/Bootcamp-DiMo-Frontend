import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';
import { userDetails, postSuccessResponse } from '../interfaces';
import { CREATE_USER_URL } from '../app_constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public validUser: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private httpService: HttpService) { }

  public getValidUser(email: string, password: string): boolean {
    return true;
  }

  public createAccount(payload: userDetails): Observable<any> {
    return this.httpService.Post<postSuccessResponse, userDetails>(CREATE_USER_URL, payload);
  }
}
