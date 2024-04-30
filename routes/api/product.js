const router = require("express").Router();
const express = require('express');
const app = express();

//get route for everything
router.get("/", (req, res) =>{
    res.send('product GET route')
})

app.get('../', (req, res) =>{
    fs.writeFile("info.txt", req.body)
})

//get route for something speficiic 
router.get("/:id", (req, res) =>{
    res.send('product GET route')
})

router.post("/", (req, res) =>{
    res.send('product POST route')
})

router.put("/:id", (req, res) =>{
    res.send('product PUT route')
})

router.delete("/:id", (req, res) =>{
    res.send('proudct DELETE route')
})
module.exports =  router;