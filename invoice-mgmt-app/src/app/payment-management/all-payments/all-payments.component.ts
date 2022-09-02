import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { Payment } from '../types/payments';

@Component({
  selector: 'app-all-payments',
  templateUrl: './all-payments.component.html',
  styleUrls: ['./all-payments.component.css']
})
export class AllPaymentsComponent implements OnInit {

  payments : Payment[] = []
  constructor(public paymentService : PaymentService) { }

  ngOnInit(): void {
    this.paymentService.fetchAll().subscribe(payments => {
      this.payments=payments;
    })
  }

}
