import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError, Observable } from 'rxjs';
import { ErrorService } from '../error.service';
import { Payment } from './types/payments';

const url ='http://localhost:8081/payments'

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private handleError(err: HttpErrorResponse) {

    //console.log(err.status);
    //alert('something went wrong');
    this.error.showError()
    return throwError(() => new Error(err.message));

  }

  constructor(private http : HttpClient,public error : ErrorService) { }

  fetchAll() : Observable<Payment[]>{
    return this.http.get<Payment[]>(`${url}`).pipe(catchError((err) => this.handleError(err)));
  }
}
