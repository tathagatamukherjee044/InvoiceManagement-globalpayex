import express from "express";
import { handleGetAllPayments, handleGetPaymentById, handlePostPayment } from "../handlers/payments.js";
import Invoice from "../models/invoice.js";
import { Payment } from "../models/payments.js";   
import { getAmountById } from "../services/invoice.js";

const paymentsRouter = express.Router()

paymentsRouter.post("/payments", handlePostPayment) // handles multiple full paid invoices in one payment

paymentsRouter.get("/payments", handleGetAllPayments)

paymentsRouter.get("/payments/:paymentId", handleGetPaymentById)

export default paymentsRouter;