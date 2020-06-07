import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddctionComponent } from './addction.component';

describe('AddctionComponent', () => {
  let component: AddctionComponent;
  let fixture: ComponentFixture<AddctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
