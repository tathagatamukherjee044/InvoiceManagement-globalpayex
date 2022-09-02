import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPaymentsComponent } from './all-payments/all-payments.component';
import { PaymentService } from './payment.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    AllPaymentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers:[PaymentService]
})
export class PaymentManagementModule { }
