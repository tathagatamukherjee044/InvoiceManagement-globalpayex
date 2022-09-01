import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';
import { Invoice } from '../types/invoice';

@Component({
  selector: 'app-invoice-paid',
  templateUrl: './invoice-paid.component.html',
  styleUrls: ['./invoice-paid.component.css']
})
export class InvoicePaidComponent implements OnInit {

  invoices : Invoice[] = []
  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.invoiceService.fetchPaid().subscribe(invoices => {
      this.invoices=invoices;
    })

  }

}
