import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpStkComponent } from './emp-stk.component';

describe('EmpStkComponent', () => {
  let component: EmpStkComponent;
  let fixture: ComponentFixture<EmpStkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpStkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpStkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
