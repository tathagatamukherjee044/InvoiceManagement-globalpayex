import express from 'express';
import Invoice from './models/invoice.js';
import mongoose from 'mongoose';
import logit from './middlewares/logit.js';
import invoicesRouter from './routes/invoices.js';
import cors from 'cors';
import { handleError } from './middlewares/handle_error.js';
import paymentsRouter from './routes/payments.js';


const app = express(); // application of express
const port = 8081;
const dbUrl = 'mongodb://localhost:27017/test_invoice';

app.use(express.json());
app.use(cors());
app.use(logit);
app.use(invoicesRouter);
app.use(paymentsRouter)
app.use(handleError);

app.get('/greeter', (req,res) => {
    // request is the express request obejct used whenever we want something from the client
    // res is express response objct used to send something to client
    res.send('<h1>good afternoon</h1>');
})

async function initServer() {
    try {
        await mongoose.connect(dbUrl);
        app.listen(port, () => {
            console.log('Database Available');
            // const data = db.getCollection('books').find({})
            // console.log(data);
            console.log(`webserver running on port ${port}`);
            //doInsert();
        } );
        
    } catch (error) {
        console.log('unable to connect with DataBase');
        console.log('unavle to start server');
        console.log(error);
    }
}

initServer();

var conn = mongoose.connection;
conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})

let invoice = {
    retailer : "PQR Stores",
    amount : 1000,
    dueDate : new Date(),
    paid : true
}
let invoice2 = {
    retailer : "PQR Stores",
    amount : 7000,
    dueDate : new Date(),
    paid : true
}
let invoice3 = {
    retailer : "PQR Stores",
    amount : 11000,
    dueDate : new Date(),
    paid : false
}

async function createNewInvoice(data) {
    let invoice = new Invoice(data);
    invoice = await invoice.save();
    console.log("new invoice created");
    return invoice;
}

// createNewInvoice(invoice);
// createNewInvoice(invoice2);
// createNewInvoice(invoice3);

// app.get('/details', async (req,res) => {
//     // const results= await Invoice.aggregate([{$group : { _id : "$retailer", totalOwed: {$sum : "$amount"}}}]).exec();
//     // res.send(results);
//     const results= await Invoice.aggregate([{$group : { _id : null, totalOwed: {$sum : "$amount"}}}]).exec();


//     const resultsPending= await Invoice.aggregate([{$match : {paid : false}},{$group : { _id : null, totalOwed: {$sum : "$amount"}}}]).exec();
//     const resultsPaid= await Invoice.aggregate([{$match : {paid : true}},{$group : { _id : null, totalOwed: {$sum : "$amount"}}}]).exec();
//     res.send(resultsPaid);
// })