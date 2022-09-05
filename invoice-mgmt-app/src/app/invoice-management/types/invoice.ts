export type Invoice = {
    _id: string,
    retailer: string,
    amount: number,
    balance: number,
    dueDate: Date,
    paid : boolean
}