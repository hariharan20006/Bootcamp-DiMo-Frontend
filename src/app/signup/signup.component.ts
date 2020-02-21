import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { userDetails } from '../interfaces';
import {Router} from "@angular/router";
import { ACCOUNT_CREATE_FAILURE , ACCOUNT_CREATE_SUCCESS, INVALID_FIRST_NAME, INVALID_LAST_NAME, INVALID_EMAIL, INVALID_PASSWORD} from '../app_constants';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  error: boolean;
  message: string;
  INVALID_FIRST_NAME = INVALID_FIRST_NAME;
  INVALID_LAST_NAME = INVALID_LAST_NAME;
  INVALID_EMAIL = INVALID_EMAIL;
  INVALID_PASSWORD = INVALID_PASSWORD;

  signupForm: FormGroup
  constructor(private authService: AuthService,
    private router: Router) { 
    this.signupForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.minLength(3), Validators.required
      ]),
      lastName: new FormControl('', [
        Validators.minLength(3), Validators.required
      ]),
      email: new FormControl('', [
        Validators.pattern(/^[_A-Za-z0-9-\\\\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/)
      ]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,15}$/)])
    })
  }

  ngOnInit(): void {}

  get firstName() {
    return this.signupForm.get('firstName');
  }

  get lastName() {
    return this.signupForm.get('lastName');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  formControlValue(control: string): string {
    return this.signupForm.get(control).value;
  }

  onSubmit() {
    let details: userDetails = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      emailId: this.email.value,
      password: this.password.value
    }
    this.authService.createAccount(details).subscribe(response => {
      this.afterCreationEffects(ACCOUNT_CREATE_SUCCESS, false);
      setTimeout(()=> {
        this.error = undefined;
        this.router.navigate(['/login']);
      }, 3000);
    },
    error => {
      const message = error.message ? error.message : ACCOUNT_CREATE_FAILURE;
      this.afterCreationEffects(message, true);
      setTimeout(()=> {
        this.error = undefined
      }, 3000);
    });
  }

  afterCreationEffects(message: string, error: boolean) {
    this.error = error;
    this.message = message
  }

}
