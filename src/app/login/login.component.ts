import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { browserStorage } from '../services/browserStorage.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error: boolean;
  message: string;
  constructor(private router: Router, private authService: AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {}

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  formControlValue(control: string): string {
    return this.loginForm.get(control).value;
  }

  onSubmit() {
    let payload = {
      emailId: this.formControlValue('email'),
      password: this.formControlValue('password')
    }
    this.authService.login(payload)
    .subscribe(token => {
      this.error = false
      this.router.navigate(['dashboard']);
        },
        err => {
          this.error = true;
          this.message = 'Invalid Credentials';
          // TODO: Show Erro Message to user
          console.error('Observer got an error: ' + err);
        },
        () => {
        }
      );
  }
}

export interface LoginResponse {
  token: string;
}
