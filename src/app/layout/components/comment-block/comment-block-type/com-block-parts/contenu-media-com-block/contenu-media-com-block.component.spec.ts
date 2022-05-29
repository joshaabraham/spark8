import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenuMediaComBlockComponent } from './contenu-media-com-block.component';

describe('ContenuMediaComBlockComponent', () => {
  let component: ContenuMediaComBlockComponent;
  let fixture: ComponentFixture<ContenuMediaComBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenuMediaComBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenuMediaComBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
