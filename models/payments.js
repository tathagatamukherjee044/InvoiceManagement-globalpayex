import mongoose from "mongoose";
import invoiceSchema from './invoice.js'
import Invoice from "./invoice.js";

const {Schema,model, ObjectId} = mongoose;

const paymentSchema = new Schema({
    retailer : String,
    amount : {
        type : Number,
        default: 0
    },
    invoices : {
        type : [Schema.Types.ObjectId],
        ref : Invoice

    },
    clearDate : Date
})

export const Payment = model('Payment', paymentSchema);