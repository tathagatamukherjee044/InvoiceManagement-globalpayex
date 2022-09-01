import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InvoiceManagementModule } from './invoice-management/invoice-management.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorService } from './error.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InvoiceManagementModule
  ],
  providers: [ErrorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
