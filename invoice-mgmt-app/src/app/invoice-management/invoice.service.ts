import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const url ='http://localhost:8081/invoices'

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http : HttpClient) { }

  fetchSummary() {
    return this.http.get<any>(`${url}/summary`);
  }

  fetchPending() {
    return this.http.get<any>(`${url}/unpaid`)
  }

  fetchAll() {
    return this.http.get<any>(`${url}`)
  }

  fetchPaid() {
    return this.http.get<any>(`${url}/paid`)
  }

  fetchInvoice(invoiceId : string) {
    return this.http.get<any>(`${url}/${invoiceId}`)
  }

  fetchPendingRetailer(retailer : string) {
    return this.http.get<any>(`${url}/unpaid/${retailer}`)
  }
}
