import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../payment.service';
import { Payment } from '../types/payments';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from '../types/invoice';
import { Schema } from 'mongoose';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-payment-individual',
  templateUrl: './payment-individual.component.html',
  styleUrls: ['./payment-individual.component.css']
})
export class PaymentIndividualComponent implements OnInit {

  payment : Payment | null = null;
  invoices : Invoice[] = [] 
  constructor(public paymentService : PaymentService,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const {paymentId} = params;
      console.log(paymentId);
    this.paymentService.fetchOne(paymentId).subscribe(payments => {
      this.payment=payments;

      console.log(this.payment)

      this.payment.invoices.forEach(invoice => {
        this.paymentService.fetchInvoice(invoice._id).subscribe((invoice) => {
          this.invoices.push(invoice)
        });
      });
      
    })
  })

}
}
