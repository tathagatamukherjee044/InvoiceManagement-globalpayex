import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-invoice-summary',
  templateUrl: './invoice-summary.component.html',
  styleUrls: ['./invoice-summary.component.css']
})
export class InvoiceSummaryComponent implements OnInit {

  constructor(private invoiceService: InvoiceService) { }

  details : any;

  ngOnInit(): void {
      this.invoiceService.fetchSummary().subscribe(details => {
        this.details=details;
      })
    }

  }

  // async  do ()  {
  //   return this.http.get<any>('http://localhost:8081/details');
  // }
  
 




