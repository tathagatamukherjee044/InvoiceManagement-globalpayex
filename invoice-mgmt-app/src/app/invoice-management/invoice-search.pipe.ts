import { Pipe, PipeTransform } from '@angular/core';
import { Invoice } from './types/invoice';

@Pipe({
  name: 'invoiceSearch'
})
export class InvoiceSearchPipe implements PipeTransform {

  transform(invoices:Invoice[],searchTerm:string): unknown {
    return null;
  }

}
