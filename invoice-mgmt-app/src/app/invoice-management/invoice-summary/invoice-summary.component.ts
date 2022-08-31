import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-invoice-summary',
  templateUrl: './invoice-summary.component.html',
  styleUrls: ['./invoice-summary.component.css']
})
export class InvoiceSummaryComponent implements OnInit {

  constructor(private http : HttpClient) { }

  details : any;

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8081/details').subscribe(details => {
      this.details=details;
    })

  }

  // async  do ()  {
  //   return this.http.get<any>('http://localhost:8081/details');
  // }
  
 }




