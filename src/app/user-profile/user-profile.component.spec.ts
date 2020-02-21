import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileComponent } from './user-profile.component';
import { AuthService } from '../services/auth.service';
import { ReplaySubject } from 'rxjs';
import { By } from '@angular/platform-browser';

class MockAuthService {
  public userData() {};
  public validUser: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  public userDataAvailable: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
}

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  let authService: AuthService;
  let getData: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileComponent ],
      providers: [{provide: AuthService, useClass: MockAuthService}]
    })
    .compileComponents();
    authService = TestBed.get(AuthService);
    getData = spyOn(authService, 'userData');
    getData.and.returnValue({firstName: 'sushil', lastName: 'kumar', emailId: 'sdsb@gmail.com'})
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authService.userDataAvailable.next(true);
  });

  it('should create', async() => {
    authService.userDataAvailable.next(true);
    fixture.detectChanges();
    expect(component).toBeTruthy();
    expect(component.userDetails).toEqual({firstName: 'sushil', lastName: 'kumar', emailId: 'sdsb@gmail.com'});
    let name = selectQuery('#fullname').innerText;
    let email = selectQuery('#email').innerText;
    expect(name).toEqual('Sushil Kumar');
    expect(email).toEqual('sdsb@gmail.com');
  });

  function selectQuery(field: string): any {
    return fixture.debugElement.query(By.css(field)).nativeElement;
  }
});
