import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePendingReatilerComponent } from './invoice-pending-reatiler.component';

describe('InvoicePendingReatilerComponent', () => {
  let component: InvoicePendingReatilerComponent;
  let fixture: ComponentFixture<InvoicePendingReatilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicePendingReatilerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicePendingReatilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
