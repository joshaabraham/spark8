import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderParagraphComBlockComponent } from './header-paragraph-com-block.component';

describe('HeaderParagraphComBlockComponent', () => {
  let component: HeaderParagraphComBlockComponent;
  let fixture: ComponentFixture<HeaderParagraphComBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderParagraphComBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderParagraphComBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
