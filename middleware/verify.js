//middle wear is a functuon 


function verifyUser(req, res, next){
    const isVerified = true;
    //if everything is goo we send them to the 'next' thing
    //adding on to the req object lik eif someone is an amazing customer
    req.isAwesome = "awesome";
    if (isVerified){
        next();
    } //if not then give them this 
    else{
        res.status(401).json({status: "fail", msg: "We dont like you."})
    }
}


module.exports = verifyUser;