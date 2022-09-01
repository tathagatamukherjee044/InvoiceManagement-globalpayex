import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, catchError, Observable, ObservableInput } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  errorMessage="";

  constructor() {
   }

   showError() {
    this.errorMessage="!!! ERROR !!!"
   }

  handleError(err: any, caught : Observable<any> ) : ObservableInput<any>{

    console.log('in erroe service');
    this.errorMessage="jgjh"
    //console.log('error message is '+this.errorMessage);
    return this.errorMessage = "error has occured *o*";

  }
}
