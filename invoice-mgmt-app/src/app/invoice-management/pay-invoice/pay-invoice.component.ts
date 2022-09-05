import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, Validators,FormBuilder } from '@angular/forms';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-pay-invoice',
  templateUrl: './pay-invoice.component.html',
  styleUrls: ['./pay-invoice.component.css']
})
export class PayInvoiceComponent implements OnInit {

  formGroup : FormGroup

  @Input()
  invoiceId : String|undefined= '';

  @Output()
  formClosed = new EventEmitter<boolean>();

  constructor(public fb : FormBuilder, private invoiceService: InvoiceService) {
    this.formGroup= fb.group({
    amount: [0,[Validators.required, Validators.min(1)]],
  }); }

  ngOnInit(): void {
    
  }

  onCancel() {
    this.formClosed.emit(false);
  }
  onSave() {
    const bill = this.formGroup.value;
    console.log(bill);
    this.invoiceService.makePayment(bill.amount,this.invoiceId).subscribe();
  }


}
