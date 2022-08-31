import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InvoiceManagementModule } from './invoice-management/invoice-management.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InvoiceManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
