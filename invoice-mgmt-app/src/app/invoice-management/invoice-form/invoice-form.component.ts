import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent implements OnInit {

  formGroup : FormGroup

  @Output()
  formClosed = new EventEmitter<boolean>();

  constructor( public fab : FormBuilder, private invoiceService : InvoiceService) {
    this.formGroup= fab.group({
      retailer: ['',[ Validators.required, Validators.maxLength(20)]],
      dueDate: [],
      amount: [0,[Validators.required, Validators.min(1)]],
      paid : [false]
    });
   }

  ngOnInit(): void {
  }

  onSave() {
    if(!this.formGroup.valid) {
      alert('got some errors');
      return;
    }
    const newInvoice = this.formGroup.value;
    console.log(newInvoice);
    newInvoice.dueDate= new Date(newInvoice.dueDate);
    this.invoiceService.postNewInvoice(newInvoice.retailer,newInvoice.amount, newInvoice.paid,newInvoice.dueDate).subscribe();
  }

  onCancel() {
    this.formClosed.emit(false);
  }



}
