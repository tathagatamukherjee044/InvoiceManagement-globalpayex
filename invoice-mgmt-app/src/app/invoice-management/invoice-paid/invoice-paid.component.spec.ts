import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePaidComponent } from './invoice-paid.component';

describe('InvoicePaidComponent', () => {
  let component: InvoicePaidComponent;
  let fixture: ComponentFixture<InvoicePaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicePaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicePaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
