import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpService } from './http.service';
import { userDetails } from '../interfaces';
import { Observable } from 'rxjs';

class MockHttpService {
  Post<Response, Payload> (path: string, payload: Payload): Observable<Response> {
    return new Observable();
  }
}

describe('AuthService', () => {
  let httpService: HttpService;
  let service: AuthService;
  let createAccountSpy: jasmine.Spy;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        {provide: HttpService, useClass: MockHttpService}
      ]
    });
    service = TestBed.inject(AuthService);
    httpService = TestBed.inject(HttpService);
    createAccountSpy = spyOn(httpService, 'Post');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call post method of httpservice with success', ()=> {
    createAccountSpy.and.returnValue(new Observable<any>());
    const payload: userDetails = {
      firstName: 'Sushil',
      lastName: 'bhardwaj',
      emailId: 'bha@gmail.com',
      password: 'P@123assew'
    }

    service.createAccount(payload);
    expect(createAccountSpy).toHaveBeenCalledTimes(1);
  });


});
