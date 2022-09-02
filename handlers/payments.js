import { Payment } from "../models/payments.js";
import { createNewPayment, getPayments } from "../services/payments.js";
export async function handlePostPayment(req,res) {
    const data = req.body;
    const payment = await createNewPayment(data);
    res.status(200).send(payment);
}

export async function handleGetAllPayments(rq,res) {
    const payments= await getPayments();
    res.send(payments);
}