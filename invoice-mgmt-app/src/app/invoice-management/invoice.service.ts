import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError, Observable } from 'rxjs';
import { ErrorService } from '../error.service';
import { Invoice } from './types/invoice';

const url ='http://localhost:8081/invoices'

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http : HttpClient,public error : ErrorService) { }

  private handleError(err: HttpErrorResponse) {

    //console.log(err.status);
    //alert('something went wrong');
    this.error.showError()
    return throwError(() => new Error(err.message));

  }

  fetchSummary() {
    return this.http.get<any>(`${url}/summary`).pipe(catchError((err) => this.handleError(err)));
  }

  fetchPending(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(`${url}/unpaid`).pipe(catchError((err) => this.handleError(err)))
  }

  fetchAll() : Observable<Invoice[]>{
    return this.http.get<Invoice[]>(`${url}`).pipe(catchError((err) => this.handleError(err)));
  }

  fetchPaid() : Observable<Invoice[]> {
    return this.http.get<Invoice[]>(`${url}/paid`).pipe(catchError((err) => this.handleError(err)));
  }

  fetchInvoice(invoiceId : string) : Observable<Invoice>{
    return this.http.get<Invoice>(`${url}/${invoiceId}`).pipe(catchError((err) => this.handleError(err)));
  }

  fetchPendingRetailer(retailer : string) : Observable<Invoice[]>{
    return this.http.get<Invoice[]>(`${url}/unpaid/${retailer}`).pipe(catchError((err) => this.handleError(err)));
  }

  postNewInvoice(retailer:string, amount: number, paid : boolean, dueDate: Date) : Observable<Invoice> {
    return this.http.post<Invoice>(url, {
      retailer,
      amount,
      paid,
      dueDate
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).pipe(catchError((err) => this.handleError(err)));
  }

  makePayment(amount:number,invoiceId:String|undefined) : Observable<any> {
    return this.http.post<any>(`${url}/pay/${invoiceId}`, {
      amount:amount
    })
  }

  makeMultiplePayments(data:JSON) : Observable<any> {
    return this.http.post<any>(`http://localhost:8081/payments`, data)
  }
}

