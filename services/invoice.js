import e from "express";
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
    const resultsTotal= await Invoice.aggregate([{$group : { _id : null, totalOwed: {$sum : "$amount"},myCount: { $sum: 1 }}}]).exec();
    const resultsPending= await Invoice.aggregate([{$match : {paid : false}},{$group : { _id : null, totalOwed: {$sum : "$amount"},myCount: { $sum: 1 }}}]).exec();
    const resultsPaid= await Invoice.aggregate([{$match : {paid : true}},{$group : { _id : null, totalOwed: {$sum : "$amount"},myCount: { $sum: 1 }}}]).exec();
    
    let  totalPaid;
    let totalPaidCount
    if(resultsPaid[0]) {
        totalPaid =  resultsPaid[0].totalOwed;
        totalPaidCount= resultsPaid[0].myCount;
    }else {
        totalPaid =  0
        totalPaidCount= 0
    }
    // const results = {
    //     resultsTotal : resultsTotal.totalOwed,
    //     //resultsPending : resultsPending.$group.totalOwed
    // }
    //const ress= resultsTotal[0];
    const response = {
        totalSales: resultsTotal[0].totalOwed,
        totalPending: resultsPending[0].totalOwed,
        totalPaid,
        totalSalesCount: resultsTotal[0].myCount,
        totalPendingCount: resultsPending[0].myCount,
        totalPaidCount,
    }
    // res.send can not send number values // res.send(ress.totalOwed) throws an error
    return response;
}

export async function getAllInvoices(page,limit) {
    console.log('called from services');
    if (page===undefined || limit === undefined) {
        page = 1 ;
        limit = 10;
    }
    let invoices=await Invoice
    .find()
    .limit(limit)
    .skip((page-1)*limit)
    .exec();
    return invoices;
}

export async function getUnpaidInvoices() {
    console.log('called from services');
    let invoices=await Invoice
    .aggregate([{$match : {paid: false}},{$group : { _id : "$retailer", amount: {$sum : "$amount"}}},{$sort : {_id:1}}])
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
    .aggregate([{$match : {retailer : retail,paid:false}},])
    .exec();
    
    return invoices;
}

export async function postNewInvoice(data) {
    console.log('called from services');
    let invoice = new Invoice(data);
    invoice.save();
    return invoice
}

export async function getBalanceById(invoiceId) {
    console.log("called from services");
    let invoice =await Invoice
    .findById(invoiceId)
    //.populate('publicationHouseId')
    .exec();
    return invoice?.balance;
}

export async function addPaymentToInvoice(invoiceId,paymentId) {
    console.log("called from services");
    let invoice =await Invoice
    .findById(invoiceId)
    //.populate('publicationHouseId')
    .exec();
    invoice.payments.push(paymentId);
    invoice.save();
}

export async function makePayment(invoiceId,amount) {
    
}

export async function getDistinct() {
    let retailers = await Invoice.find().distinct('retailer').exec();
    return retailers;
}