import mongoose from "mongoose";

const {Schema,model, ObjectId} = mongoose;

const invoiceSchema = new Schema({
    retailer : String,
    amount : Number,
    dueDate : Date,
    issueDate : Date,
    paid : Boolean,
    payments : [String],
    balance: Number
})

const Invoice = model('Invoice', invoiceSchema);

export default Invoice;