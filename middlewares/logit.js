export default function logit(req,res,next) {
    // next is a function object
    console.log(`URL: ${req.url}`);
    console.log(`When: ${new Date()}`);
    console.log(`...................................................................`);

    next(); // runs the next middle ware in lline if any or the main callback function
}