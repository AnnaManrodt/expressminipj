const router = require("express").Router();
const customerRouters = require("./customer")
const productRouters = require("./product")

const verifyUser = require("../../middleware/verify");

//this will put that function in the middel of this so it checks if they are verfied before letting them move on
router.use("/customer", verifyUser, customerRouters);
router.use("/product", productRouters);








module.exports = router;