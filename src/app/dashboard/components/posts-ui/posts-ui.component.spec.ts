import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsUiComponent } from './posts-ui.component';

describe('PostsUiComponent', () => {
  let component: PostsUiComponent;
  let fixture: ComponentFixture<PostsUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
