export type Invoice = {
    _id: string,
    retailer: string,
    amount: number,
    balance: number,
    dueDate: Date,
    issueDate:Date,
    paid : boolean
}