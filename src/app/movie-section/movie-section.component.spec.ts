import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSectionComponent } from './movie-section.component';

describe('MovieSectionComponent', () => {
  let component: MovieSectionComponent;
  let fixture: ComponentFixture<MovieSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
