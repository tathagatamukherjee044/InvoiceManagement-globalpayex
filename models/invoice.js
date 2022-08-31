import mongoose from "mongoose";

const {Schema,model, ObjectId} = mongoose;

const invoiceSchema = new Schema({
    retailer : String,
    amount : Number,
    dueDate : Date,
    paid : Boolean
})

const Invoice = model('Invoice', invoiceSchema);

export default Invoice;