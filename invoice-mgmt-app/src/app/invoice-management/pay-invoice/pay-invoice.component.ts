import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, Validators,FormBuilder, FormControl, AbstractControl } from '@angular/forms';
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

  @Input()
  defalultAmount : number|undefined ;

  @Output()
  formClosed = new EventEmitter<boolean>();

  constructor(public fb : FormBuilder, private invoiceService: InvoiceService) {
    this.formGroup= fb.group({
    amount : [{value:this.defalultAmount}]
  }); 
  
  }

  ngOnInit(): void {
    this.formGroup.get('amount')?.setValue(this.defalultAmount);
    console.log(`This is the default amount ${this.defalultAmount}`);
  }

  onCancel() {
    this.formClosed.emit(false);
  }
  onSave() {
    const bill = this.formGroup.value;
    console.log(bill);
    this.invoiceService.makePayment(bill.amount,this.invoiceId).subscribe();
  }

  get amountAbs() {
    return this.formGroup.get('amount');
  }

  set amountAbs(passedAmount) {
    this.formGroup.get('amount')?.setValue(passedAmount);
  }

  


}
