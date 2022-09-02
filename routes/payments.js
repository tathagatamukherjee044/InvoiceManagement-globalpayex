import express from "express";
import { handleGetAllPayments, handlePostPayment } from "../handlers/payments.js";
import Invoice from "../models/invoice.js";
import { Payment } from "../models/payments.js";   
import { getAmountById } from "../services/invoice.js";

const paymentsRouter = express.Router()

paymentsRouter.post("/payments", handlePostPayment)

paymentsRouter.get("/payments", handleGetAllPayments)

export default paymentsRouter;