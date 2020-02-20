import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthComponent } from './authentication/auth/auth.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UserProfileComponent } from './user-profile/user-profile.component';



//user/profile


// profile/
// login/
// signup/
// DashBoard/

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardService],
    pathMatch: 'full'
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [AuthGuardService],
    pathMatch: 'full'
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [AuthGuardService],
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    pathMatch: 'full'
  },
  {
    path: '',
    component: AppComponent,
    canActivate: [AuthGuardService],
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
