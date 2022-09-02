export type Invoice = {
    _id: string,
    retailer: string,
    amount: number,
    dueDate: Date,
    paid : boolean
}