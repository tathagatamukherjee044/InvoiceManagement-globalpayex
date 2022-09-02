import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPaymentsComponent } from './all-payments/all-payments.component';
import { PaymentService } from './payment.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { PaymentIndividualComponent } from './payment-individual/payment-individual.component';
import { PaymentSummaryComponent } from './payment-summary/payment-summary.component';



@NgModule({
  declarations: [
    AllPaymentsComponent,
    PaymentIndividualComponent,
    PaymentSummaryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers:[PaymentService]
})
export class PaymentManagementModule { }
