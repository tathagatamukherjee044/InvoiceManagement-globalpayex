import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceSummaryComponent } from './invoice-management/invoice-summary/invoice-summary.component';

const routes: Routes = [
  {path : "invoiceSummary", component : InvoiceSummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
