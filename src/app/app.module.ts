import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClickOutsideModule } from 'ng-click-outside';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AttachAuthTokenInterceptor } from 'src/interceptors/attach-auth-token.interceptor';
import { AuthService } from './services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpService } from './services/http.service';
import { MovieSectionComponent } from './movie-section/movie-section.component';
import { MovieComponentComponent } from './movie-component/movie-component.component';
import { LogoComponent } from './logo/logo.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    PageNotFoundComponent,
    MovieSectionComponent,
    MovieComponentComponent,
    LogoComponent,
    MovieDetailsComponent
    // LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ClickOutsideModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AttachAuthTokenInterceptor,
      multi: true
    },
    AuthService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
