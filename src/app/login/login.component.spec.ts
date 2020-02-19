import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  ReactiveFormsModule,
  FormsModule,
  AbstractControl
} from '@angular/forms';
import { strict } from 'assert';
import { AuthService } from '../services/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { userDetails } from '../interfaces';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';

class MockAuthService {
  public createAccount(userDetails: userDetails) {}
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let email: AbstractControl;
  let password: AbstractControl;
  let loginUpButton: HTMLButtonElement;
  let creatAccountSpy: jasmine.Spy;
  let authService: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule],
      providers: [
        { provide: AuthService, useClass: MockAuthService },
        HttpClientTestingModule,
        HttpClient
      ]
    }).compileComponents();

    authService = TestBed.get(AuthService);

    creatAccountSpy = spyOn(authService, 'createAccount');
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    email = component.loginForm.controls.email;
    password = component.loginForm.controls.password;
    loginUpButton = selectQuery("button[type='submit']");
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  function selectQuery(field: string): any {
    return fixture.debugElement.query(By.css(field)).nativeElement;
  }
});
