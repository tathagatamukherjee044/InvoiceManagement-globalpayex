import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';
import { Invoice } from '../types/invoice';

@Component({
  selector: 'app-invoice-pending',
  templateUrl: './invoice-pending.component.html',
  styleUrls: ['./invoice-pending.component.css']
})
export class InvoicePendingComponent implements OnInit {

  invoices : Invoice[] = []
  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.invoiceService.fetchPending().subscribe(invoices => {
      this.invoices=invoices;
    })

  }

}
