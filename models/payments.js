import mongoose from "mongoose";
import invoiceSchema from './invoice.js'

const {Schema,model, ObjectId} = mongoose;

const paymentSchema = new Schema({
    retailer : String,
    amount : {
        type : Number,
        default: 0
    },
    invoices : [invoiceSchema]
})

const Payment = model('Payment', paymentSchema);