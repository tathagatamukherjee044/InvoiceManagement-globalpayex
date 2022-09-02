import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InvoiceManagementModule } from './invoice-management/invoice-management.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorService } from './error.service';
import { PaymentManagementModule } from './payment-management/payment-management.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InvoiceManagementModule,
    PaymentManagementModule
  ],
  providers: [ErrorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
