import { Payment } from "../models/payments.js";
import { createNewPayment, getPaymentById, getPayments } from "../services/payments.js";
export async function handlePostPayment(req,res) {
    const data = req.body;
    const payment = await createNewPayment(data);
    res.status(200).send(payment);
}

export async function handleGetAllPayments(req,res) {
    const payments= await getPayments();
    res.send(payments);
}

export async function handleGetPaymentById(req,res) {
    const paymentId = req.params.paymentId;
    const payment = await getPaymentById(paymentId);
    res.send(payment);
}