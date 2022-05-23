import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCounterInputComponent } from './customer-counter-input.component';

describe('CustomerCounterInputComponent', () => {
  let component: CustomerCounterInputComponent;
  let fixture: ComponentFixture<CustomerCounterInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerCounterInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCounterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
