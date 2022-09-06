import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceAllComponent } from './invoice-management/invoice-all/invoice-all.component';
import { InvoicePaidComponent } from './invoice-management/invoice-paid/invoice-paid.component';
import { InvoicePendingReatilerComponent } from './invoice-management/invoice-pending-reatiler/invoice-pending-reatiler.component';
import { InvoicePendingComponent } from './invoice-management/invoice-pending/invoice-pending.component';
import { InvoiceSummaryComponent } from './invoice-management/invoice-summary/invoice-summary.component';
import { InvoiceComponent } from './invoice-management/invoice/invoice.component';
import { PayMultipleComponent } from './invoice-management/pay-multiple/pay-multiple.component';
import { AllPaymentsComponent } from './payment-management/all-payments/all-payments.component';
import { PaymentIndividualComponent } from './payment-management/payment-individual/payment-individual.component';
import { PaymentSummaryComponent } from './payment-management/payment-summary/payment-summary.component';

const routes: Routes = [
  {path : "invoice", component : InvoiceSummaryComponent, children : [
    {path: "unpaid", component : InvoicePendingComponent},
    {path: "all", component : InvoiceAllComponent},
    {path: "paid", component : InvoicePaidComponent},
    {path: ":retailer", component : InvoicePendingReatilerComponent, children : [
      {path : "payMultiple", component : PayMultipleComponent},
      {path: ":invoiceId", component : InvoiceComponent}
      
    ]},
  ]},
  {path:"payment", component: PaymentSummaryComponent, children: [
    {path: "all", component: AllPaymentsComponent},
    {path: ":paymentId", component: PaymentIndividualComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
