import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-pay-multiple',
  templateUrl: './pay-multiple.component.html',
  styleUrls: ['./pay-multiple.component.css']
})
export class PayMultipleComponent implements OnInit {

  formGroup: FormGroup

  constructor( public fb : FormBuilder, public invoiceService: InvoiceService) {
    this.formGroup= fb.group({
      retailer: [''],
      invoices: fb.array([])
    });
   }

  ngOnInit(): void {
  }

  onSave() {
    if(!this.formGroup.valid) {
      alert('got some errors');
      return;
    }
    const newBook = this.formGroup.value;
    console.log(newBook);
    this.invoiceService.makeMultiplePayments(newBook).subscribe();

  }
  @Output()
  formClosed = new EventEmitter<boolean>();

  // displayFormToggle() {
  //   this.formClosed.emit(false)
  // }

  get invoices () {
    return this.formGroup.get('invoices') as FormArray
  }

  onAddInvoice() {
    this.invoices.push(this.fb.group({
      id: ['']
    }))
  }
  

}


