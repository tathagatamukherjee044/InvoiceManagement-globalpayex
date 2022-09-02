import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentIndividualComponent } from './payment-individual.component';

describe('PaymentIndividualComponent', () => {
  let component: PaymentIndividualComponent;
  let fixture: ComponentFixture<PaymentIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentIndividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
