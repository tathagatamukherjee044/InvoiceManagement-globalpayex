import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayMultipleComponent } from './pay-multiple.component';

describe('PayMultipleComponent', () => {
  let component: PayMultipleComponent;
  let fixture: ComponentFixture<PayMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayMultipleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
