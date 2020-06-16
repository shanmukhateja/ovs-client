import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGlueComponent } from './dashboard-glue.component';

describe('DashboardGlueComponent', () => {
  let component: DashboardGlueComponent;
  let fixture: ComponentFixture<DashboardGlueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardGlueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
