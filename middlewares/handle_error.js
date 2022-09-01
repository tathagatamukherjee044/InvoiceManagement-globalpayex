import mongoose from "mongoose";

export function handleError(err,req,res,next) {
    if (err instanceof mongoose.Error.ValidationError)
        res.status(400).send(err.errors);
    else 
        res.status(500).send('something went wrong');
}