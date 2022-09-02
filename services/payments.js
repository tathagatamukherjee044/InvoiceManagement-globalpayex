import Invoice from "../models/invoice.js";
import { Payment } from "../models/payments.js";
import { getAmountById } from "./invoice.js";

export async function createNewPayment(data) {
    const invoices = data.invoices;

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

    let  payment = new Payment(data);
   payment.save();
}

func();
    //return payment;})

    // console.log(amount);
    // data.amount=amount ;
    // data.clearDate = new Date();

    // let  payment = new Payment(data);
    // payment=await payment.save();
    // return payment;
}

export async function getPayments() {
    let payments=await Payment
    .find()
    .exec();
    return payments;
}