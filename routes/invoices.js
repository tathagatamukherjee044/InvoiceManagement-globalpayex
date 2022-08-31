import express from "express";
import Invoice from "../models/invoice.js";

const invoicesRouter = express.Router();

invoicesRouter.get("/details" , async (req,res) => {
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
    res.send(response);
    // res.send can not send number values // res.send(ress.totalOwed) throws an error
}, (error) => {
    console.log(error)
})

invoicesRouter.get("/invoies/:invoiceId", async (req,res) => {
    
    const invoiceId = req.params.invoiceId;
    let book=await Invoice
    .findById(invoiceId)
    //.populate('publicationHouseId')
    .exec();
    res.send(book.retailer);
})

export default invoicesRouter;