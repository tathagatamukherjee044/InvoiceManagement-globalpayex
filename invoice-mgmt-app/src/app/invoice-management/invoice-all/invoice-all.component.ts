import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../invoice.service';
import { Invoice } from '../types/invoice';

@Component({
  selector: 'app-invoice-all',
  templateUrl: './invoice-all.component.html',
  styleUrls: ['./invoice-all.component.css']
})
export class InvoiceAllComponent implements OnInit {

  invoices : Invoice[] = []
  constructor(private invoiceService: InvoiceService) { }

  ngOnInit(): void {
    this.invoiceService.fetchAll().subscribe(invoices => {
      this.invoices=invoices;
    })

  }


}
