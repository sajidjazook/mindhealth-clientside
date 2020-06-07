import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoholquizComponent } from './alcoholquiz.component';

describe('AlcoholquizComponent', () => {
  let component: AlcoholquizComponent;
  let fixture: ComponentFixture<AlcoholquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlcoholquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcoholquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
