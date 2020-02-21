import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpService } from './http.service';
import { userDetails } from '../interfaces';
import { Observable, of } from 'rxjs';
import { browserStorage} from './browserStorage.service';

class MockHttpService {
  Post<Response, Payload> (path: string, payload: Payload): Observable<Response> {
    return new Observable();
  }
  Get<Response> () {}
}

describe('AuthService', () => {
  let httpService: HttpService;
  let service: AuthService;
  let postSpy: jasmine.Spy;
  let loginSpy: jasmine.Spy;
  let getSpy: jasmine.Spy;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        {provide: HttpService, useClass: MockHttpService}
      ]
    });
    service = TestBed.inject(AuthService);
    httpService = TestBed.inject(HttpService);
    postSpy = spyOn(httpService, 'Post');
    getSpy= spyOn(httpService, 'Get');
    // loginSpy = spyOn(httpService, 'Post');

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service.ValidateUser()).toBeFalse();
  });

  it('logout should remove user from storage', ()=> {
    service.logout();
    let val = browserStorage.get('token');
    expect(service.ValidateUser()).toBeFalse();
    expect(val).toEqual(null);
  })

  it('should call post method of httpservice with success', ()=> {
    postSpy.and.returnValue(new Observable<any>());
    const payload: userDetails = {
      firstName: 'Sushil',
      lastName: 'bhardwaj',
      emailId: 'bha@gmail.com',
      password: 'P@123assew'
    }

    service.createAccount(payload);
    expect(postSpy).toHaveBeenCalledTimes(1);
  });

  it('should get user if in storage', ()=> {
    getSpy.and.returnValue(of({firstName: 'sdff', lastName: 'sdfsdfsf', emailId: 'sdgsfs'}));
    browserStorage.save('token', 'xyzz').then(token => {
      // this.setIsUSerValid(true);
    });

    service.getValidUser();
    let val = browserStorage.get('token');
    expect(service.ValidateUser()).toBeTrue();
    expect(val).toEqual('xyzz');
  });

  it('should hit http service login', ()=> {
    postSpy.and.returnValue(new Observable<any>());
    let payload = {
      emailId: 'sdffg',
      password: 'dffb'
    }
    service.login(payload)
    expect(postSpy).toHaveBeenCalledTimes(1);
  });

  xit('afterEffectsLoginCrear should set value to storage', ()=> {
    service.afterEffectsLoginCrear(of({'token': 'ssdff'}));
    let val = browserStorage.get('token');
    expect(service.ValidateUser()).toBeTrue();
    expect(val).toEqual('ssdff');
  });

  it('should change validUser observable', () => {
    getSpy.and.returnValue(of({firstName: 'sdff', lastName: 'sdfsdfsf', emailId: 'sdgsfs'}));
    service.setIsUSerValid(true);

    expect(service.ValidateUser()).toBeTrue();
  });

  afterEach(() => {
    browserStorage.remove('token');
  });


});
