import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdocSubPageComponent } from './viewdoc-sub-page.component';

describe('ViewdocSubPageComponent', () => {
  let component: ViewdocSubPageComponent;
  let fixture: ComponentFixture<ViewdocSubPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdocSubPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdocSubPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
