import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoiceService } from '../invoice.service';
import { Invoice } from '../types/invoice';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private invoiceService : InvoiceService, private route : ActivatedRoute) { }

  invoice : Invoice | null = null;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const {retailer, invoiceId} = params;
      console.log(invoiceId);
      this.invoiceService.fetchInvoice(invoiceId).subscribe(invoice => {
      //this.book=book;
      console.log(invoice);
      this.invoice=invoice
      })
  } )

}
}
