import express from "express";
import Invoice from "../models/invoice.js";
import { handleGetAllInvoices, handleGetBookById, handleGetInvoiceSummary, handleGetUnpaidInvoices, handleGetPaidInvoices, handleGetInvoicesByRetailer, handlePostNewInvoice, handlePayInvoice, handleGetDistinct } from "../handlers/invoice.js";

const invoicesRouter = express.Router();

invoicesRouter.get("/invoices/summary" , handleGetInvoiceSummary) // order 

invoicesRouter.get("/invoices/unpaid", handleGetUnpaidInvoices)

invoicesRouter.get("/invoicesssss", (req,res) => {
    
})

invoicesRouter.get("/invoices/paid", handleGetPaidInvoices)

invoicesRouter.get("/invoices/distinct", handleGetDistinct)

invoicesRouter.get("/invoices/:invoiceId", handleGetBookById)

invoicesRouter.get("/invoices", handleGetAllInvoices)

invoicesRouter.get("/invoices/unpaid/:retailer", handleGetInvoicesByRetailer)

invoicesRouter.post("/invoices", handlePostNewInvoice)

invoicesRouter.post("/invoices/pay/:invoiceId", handlePayInvoice)


export default invoicesRouter;