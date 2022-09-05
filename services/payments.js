import Invoice from "../models/invoice.js";
import { Payment } from "../models/payments.js";
import { addPaymentToInvoice, getAmountById } from "./invoice.js";

export async function createNewPayment(data) {
    const invoices = data.invoices;
    let payment;

    function sum(...theArgs) {
        let total = 0;
        for (const arg of theArgs) {
          total += arg;
        }
        return total;
      }

    async function func() {
        let amount =[];
        amount = await Promise.all(invoices.map(async (invoice) => {
        console.log(invoice.toString());
        const money= await getAmountById(invoice.toString());
        

        console.log("amount is " + money)

        let update = {paid:true};

        Invoice.findByIdAndUpdate(invoice,update,{
            returnDocument:'after'
        }).exec();
        console.log(money)
        return new Promise((resolve) => resolve(money))
    }));
        let total = sum(...amount)
        data.amount=total;
        console.log(total)

        data.clearDate = new Date();

        payment = new Payment(data);
        payment.save();
    }   

    await func();
    console.log(payment._id.toString())

    invoices.map(async (invoice) => {
        addPaymentToInvoice(invoice.toString(),payment._id.toString());
    })
    
}

export async function getPayments() {
    let payments=await Payment
    .find()
    .exec();
    return payments;
}

export async function getPaymentById(paymentId) {
    console.log("called from services");
    let payment =await Payment
    .findById(paymentId)
    .populate('invoices')
    .exec();
    return payment;
}

export async function makeSinglePayment(invoiceId,amountPaid) {
    const money= await getAmountById(invoiceId.toString());
    let update;
    if (amountPaid === money) {
       update = {paid:true,balance:0};
    }
    else {
        update = {
            balance:money-amountPaid
        }
    }

    const invoice = await Invoice.findByIdAndUpdate(invoiceId,update,{
        returnDocument:'after'
    }).exec();
    const data = {
        retailer : invoice.retailer,
        amount : amountPaid,
        invoices: [invoiceId.toString()],
        clearDate : new Date()
    }

    const payment = new Payment(data);
    payment.save();

    addPaymentToInvoice(invoiceId.toString(),payment._id.toString());
}