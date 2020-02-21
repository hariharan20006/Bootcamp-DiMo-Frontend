import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HttpService } from './http.service';
import { HttpParams, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { observable, Observable } from 'rxjs';

describe('HttpService', () => {
  let service: HttpService;
  let httpClient: HttpClient;
  let getSpy: jasmine.Spy;
  let postSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(HttpService);
    httpClient = TestBed.get(HttpClient);
    getSpy = spyOn(httpClient, 'get');
    postSpy = spyOn(httpClient, 'post');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have Get method', () => {
    getSpy.and.returnValue(new Observable());
    expect(service.Get('/users', new HttpParams().set('name', 'Kartik'))).toBeTruthy();
    expect(getSpy).toHaveBeenCalledTimes(1);
  });

  xit('error Handler should throw cutom error', () => {
    let error = {
        error: {
          error: {
            code: 400,
            message: 'some'
          }
        }
      
    }
    // let errorEvent = new ErrorEvent(error);
    let error1 = new HttpErrorResponse(error);
    expect(service.handleError(error1)).toThrow(error1);

  })

  it('should have Post method', () => {
    postSpy.and.returnValue(new Observable<any>())
    const mockUserDetails = {
      firstName: 'rtty',
      lastName: 'yui',
      emailId: 'rt@gmail.com',
      password: 'e1@rUrt78yyh'
    }
    expect(service.Post<any, {}>('signup', mockUserDetails)).toBeTruthy();
    expect(postSpy).toHaveBeenCalledTimes(1);
  });

  it('should have Patch method', () => {
    expect(service.Patch({})).toBeTruthy();
  });

  it('should return valid url', ()=> {
    const path = 'user/login';
    expect(service.getUrl(path)).toEqual('https://dimo-wildwolves.herokuapp.com'+path);
  });

});
