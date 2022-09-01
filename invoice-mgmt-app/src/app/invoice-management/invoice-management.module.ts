import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceSummaryComponent } from './invoice-summary/invoice-summary.component';
import {HttpClientModule} from '@angular/common/http';
import { InvoicePendingComponent } from './invoice-pending/invoice-pending.component'
import { InvoiceService } from './invoice.service';
import { AppRoutingModule } from '../app-routing.module';
import { InvoiceAllComponent } from './invoice-all/invoice-all.component';
import { InvoicePaidComponent } from './invoice-paid/invoice-paid.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoicePendingReatilerComponent } from './invoice-pending-reatiler/invoice-pending-reatiler.component';


@NgModule({
  declarations: [
    InvoiceSummaryComponent,
    InvoicePendingComponent,
    InvoiceAllComponent,
    InvoicePaidComponent,
    InvoiceComponent,
    InvoicePendingReatilerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers:[InvoiceService]
})
export class InvoiceManagementModule { }
