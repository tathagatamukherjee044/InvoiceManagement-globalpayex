import { Schema } from "mongoose"
import { Invoice } from "./invoice"

export type Payment = {
    
    _id : String,
    retailer : String,
    amount : {
        type : Number,
        default: 0
    },
    invoices : {
        type : [Schema.Types.ObjectId],
        ref : Invoice

},
    clearDate : Date
}