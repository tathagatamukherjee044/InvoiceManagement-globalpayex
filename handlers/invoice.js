import { getAllInvoices, getInvoiceById, getInvoiceSummary, getUnpaidInvoices, getPaidInvoices, getInvoicesByRetailer } from "../services/invoice.js";

export async function handleGetBookById (req,res) {
    // console.log(req.url);
    // console.log(new Date());
    console.log('called from handler');
    const invoiceId = req.params.invoiceId;
    const invoice=await getInvoiceById(invoiceId);
    res.send(invoice);
}

export async function handleGetInvoiceSummary(req,res) {
    const details = await getInvoiceSummary();
    res.send(details);
}

export async function handleGetAllInvoices(req,res) {
    const invoices = await getAllInvoices();
    res.send(invoices);
}

export async function handleGetUnpaidInvoices(req,res) {
    const invoices = await getUnpaidInvoices();
    res.send(invoices);
}

export async function handleGetPaidInvoices(req,res) {
    const invoices = await getPaidInvoices();
    res.send(invoices);
}

export async function handleGetInvoicesByRetailer(req,res) {
    const retailer = req.params.retailer;
    const invoices = await getInvoicesByRetailer(retailer);
    res.send(invoices);
}