import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseViewPageComponent } from './nurse-view-page.component';

describe('NurseViewPageComponent', () => {
  let component: NurseViewPageComponent;
  let fixture: ComponentFixture<NurseViewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NurseViewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
