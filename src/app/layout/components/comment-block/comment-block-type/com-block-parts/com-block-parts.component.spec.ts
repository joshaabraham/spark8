import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComBlockPartsComponent } from './com-block-parts.component';

describe('ComBlockPartsComponent', () => {
  let component: ComBlockPartsComponent;
  let fixture: ComponentFixture<ComBlockPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComBlockPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComBlockPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
