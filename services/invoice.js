import Invoice from "../models/invoice.js";

export async function getInvoiceById(invoiceId) {
    console.log("called from services");
    let invoice =await Invoice
    .findById(invoiceId)
    //.populate('publicationHouseId')
    .exec();
    return invoice;
}

export async function getInvoiceSummary() {
    const resultsTotal= await Invoice.aggregate([{$group : { _id : null, totalOwed: {$sum : "$amount"}}}]).exec();
    const resultsPending= await Invoice.aggregate([{$match : {paid : false}},{$group : { _id : null, totalOwed: {$sum : "$amount"}}}]).exec();
    const resultsPaid= await Invoice.aggregate([{$match : {paid : true}},{$group : { _id : null, totalOwed: {$sum : "$amount"}}}]).exec();
    
    // const results = {
    //     resultsTotal : resultsTotal.totalOwed,
    //     //resultsPending : resultsPending.$group.totalOwed
    // }
    //const ress= resultsTotal[0];
    const response = {
        totalSales: resultsTotal[0].totalOwed,
        totalPending: resultsPending[0].totalOwed,
        totalPaid: resultsPaid[0].totalOwed,
    }
    // res.send can not send number values // res.send(ress.totalOwed) throws an error
    return response;
}

export async function getAllInvoices() {
    console.log('called from services');
    let invoices=await Invoice
    .find()
    .exec();
    return invoices;
}

export async function getUnpaidInvoices() {
    console.log('called from services');
    let invoices=await Invoice
    .aggregate([{$match : {paid: false}},{$group : { _id : "$retailer", amount: {$sum : "$amount"}}}])
    .exec();

    return invoices;
}

export async function getPaidInvoices() {
    console.log('called from services');
    let invoices=await Invoice
    .find({"paid":true})
    .exec();
    
    return invoices;
}

export async function getInvoicesByRetailer(retail) {
    console.log('called from services');
    let invoices=await Invoice
    .aggregate([{$match : {retailer : retail}},])
    .exec();
    
    return invoices;
}

export async function postNewInvoice(data) {
    console.log('called from services');
    let invoice = new Invoice(data);
    invoice.save();
    return invoice
}

export async function getAmountById(invoiceId) {
    console.log("called from services");
    let invoice =await Invoice
    .findById(invoiceId)
    //.populate('publicationHouseId')
    .exec();
    return invoice?.amount;
}