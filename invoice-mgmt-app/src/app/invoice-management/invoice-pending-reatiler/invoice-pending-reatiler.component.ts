import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InvoiceService } from '../invoice.service';
import { Invoice } from '../types/invoice';

@Component({
  selector: 'app-invoice-pending-reatiler',
  templateUrl: './invoice-pending-reatiler.component.html',
  styleUrls: ['./invoice-pending-reatiler.component.css']
})
export class InvoicePendingReatilerComponent implements OnInit {

  invoices : Invoice[] = []

  constructor(private invoiceService : InvoiceService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const {retailer} = params;
      console.log(retailer);
      this.invoiceService.fetchPendingRetailer(retailer).subscribe(invoices => {
      //this.book=book;
      console.log(invoices);
      this.invoices=invoices
      })
  } )

  }

}
