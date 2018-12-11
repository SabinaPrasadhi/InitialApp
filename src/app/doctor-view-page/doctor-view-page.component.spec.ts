import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorViewPageComponent } from './doctor-view-page.component';

describe('DoctorViewPageComponent', () => {
  let component: DoctorViewPageComponent;
  let fixture: ComponentFixture<DoctorViewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorViewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
