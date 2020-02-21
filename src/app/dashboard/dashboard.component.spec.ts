import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent]
    }).compileComponents();
  }));

  it(`should have as text 'home page'`, async(() => {
    const fixture = TestBed.createComponent(DashboardComponent);
    const app = fixture.debugElement.componentInstance;
    console.log(app);
    expect(app.text).toEqual('home page');
  }));
});
