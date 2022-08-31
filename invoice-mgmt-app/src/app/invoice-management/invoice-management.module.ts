import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceSummaryComponent } from './invoice-summary/invoice-summary.component';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    InvoiceSummaryComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class InvoiceManagementModule { }
