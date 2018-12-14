import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubPageComponent } from './view-sub-page.component';

describe('ViewSubPageComponent', () => {
  let component: ViewSubPageComponent;
  let fixture: ComponentFixture<ViewSubPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSubPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
