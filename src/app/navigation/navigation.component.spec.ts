import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { RouterTestingModule } from '@angular/router/testing';
import { userDetails } from '../interfaces';
import { AuthService } from '../services/auth.service';
import { ReplaySubject } from 'rxjs';

class MockAuthService {
  public createAccount(userDetails: userDetails) {};
  public login(paylod: any) {};
  public userDataAvailable: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  public logout() {};
  public userData() {};
}

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let authService: AuthService;
  let userDataSpy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationComponent ],
      providers: [ {provide: AuthService, useClass: MockAuthService }],
      imports: [RouterTestingModule]
    })
    .compileComponents();
    authService = TestBed.get(AuthService);
    userDataSpy = spyOn(authService, 'userData').and.returnValue({firstName: 'sddgg', lastName: 'sdgfsd', emailId: 'sds', prefrences: []})
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authService.userDataAvailable.next(true);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
