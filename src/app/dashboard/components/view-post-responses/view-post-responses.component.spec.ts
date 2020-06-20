import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPostResponsesComponent } from './view-post-responses.component';

describe('ViewPostResponsesComponent', () => {
  let component: ViewPostResponsesComponent;
  let fixture: ComponentFixture<ViewPostResponsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPostResponsesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPostResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
