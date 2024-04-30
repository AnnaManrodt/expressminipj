const router = require("express").Router();
const verifyUser = require("../../middleware/verify")

const fs = require("fs");

//get route for everything
router.get("/", (req, res) =>{
    res.send('customer GET route:')
})


//get route for something speficiic thing
router.get("/:id", (req, res) =>{
    res.send('customer GET route')
})

router.post("/", (req, res) =>{
    // res.send('customer POST route' + req.isAwesome)
    
fs.readFile("db/customer.json", 'utf8', (err, data)=>{
    console.log(data)
    let customers = JSON.parse(data)
    customers.push(req.body)
        fs.writeFile("db/customer.json", JSON.stringify(customers), (err) =>{
            if(err){
                console.log(err) 
                res.status(500).json(err)
            }
            else{
                console.log("made it!");
                res.status(200).json("worked!");
            }
        
        }) 
})
})

//put route for something speficiic thing
router.put("/:id", (req, res) =>{
    res.send('customer PUT route')
})

//delete route for something speficiic thing
router.delete("/:id", (req, res) =>{
    res.send('customer DELETE route')
})
module.exports =  router;