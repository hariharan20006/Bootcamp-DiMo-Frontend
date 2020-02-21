import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { browserStorage} from '../app/services/browserStorage.service';

@Injectable()
export class AttachAuthTokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const storageUser:  string = browserStorage.get('token');
    // request = request.clone({
    //   headers: request.headers.set('Access-Control-Allow-Origin', '*')
    // });

    if (storageUser) {
      request = request.clone({
        headers: request.headers.set('Authorization', storageUser)
      });
    }

    return next.handle(request);
  }
}
