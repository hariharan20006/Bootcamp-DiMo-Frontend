import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

class MockHttpService {
  Post<Response, Payload> (path: string, payload: Payload): Observable<Response> {
    return new Observable();
  }
}

describe('AuthGuardService', () => {
  let service: AuthGuardService;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [ AuthGuardService, {provide:HttpService, useClass: MockHttpService}]
    });
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
