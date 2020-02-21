import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError, retry } from 'rxjs/operators';
import BrowserStorage, { browserStorage } from './browserStorage.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  browserStorage: BrowserStorage;
  // TODO: load from env
  private REST_API_SERVER = 'https://dimo-wildwolves.herokuapp.com';
  // private REST_API_SERVER = "http://localhost:3000";

  constructor(private httpClient: HttpClient,
    private router: Router) {
    this.browserStorage = browserStorage;
  }

  getUrl(path: string): string {
    return this.REST_API_SERVER + path;
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = {
      message: 'unknown error'
    };
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage.message = error.error.message ? error.error.message :   "Something Went Wrong";
    } else {
      // Server-side errors
      if(error.error.error.code === 401) {
        this.browserStorage.remove('token');
        this.router.navigate(['login']);
      }
      errorMessage.message = error.error.error.message ? error.error.error.message: 'something went wrong on server';
    }

    return throwError(errorMessage);
  }

  /**
   * Get
   */
  public Get<Response>(
    path: string,
    params?: HttpParams
  ): Observable<Response> {
    return this.httpClient
      .get<Response>(this.getUrl(path), {
        params
      })
      .pipe(retry(3), catchError(this.handleError));
  }

  /**
   * Post
   */
  public Post<Response, Payload>(
    path: string,
    data: Payload
  ): Observable<Response> {
    return this.httpClient
      .post<Response>(this.REST_API_SERVER + path, data)
      .pipe(retry(1), catchError(this.handleError));
  }

  /**
   * Post
   */
  public Patch<Response, Payload>(data: Payload): Response {
    return ([] as unknown) as Response;
  }
}