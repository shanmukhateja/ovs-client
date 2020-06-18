import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHintModalComponent } from './search-hint-modal.component';

describe('SearchHintModalComponent', () => {
  let component: SearchHintModalComponent;
  let fixture: ComponentFixture<SearchHintModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchHintModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHintModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
