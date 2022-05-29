import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentBlockTypeComponent } from './comment-block-type.component';

describe('CommentBlockTypeComponent', () => {
  let component: CommentBlockTypeComponent;
  let fixture: ComponentFixture<CommentBlockTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentBlockTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentBlockTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
