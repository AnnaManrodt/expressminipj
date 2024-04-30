const express = require('express');
const path = require('path');
//our modular routing starts here
const routes = require('./routes')


const PORT = 3003;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use("/", routes);


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
});

app.get('/about', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/about.html'))
);

app.get('/contact', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/contact.html'))
);


/* api routes below */

app.get('/api/data', (req, res) => {
  const dataObj = {
    name: 'dizzy',
    type: 'dog',
    age: 132
  }

  res.json(dataObj)
})

// listen for form submissions from new customers
app.post('/api/customer', (req, res) => {
  // form data submitted to us is accessible at req.body
  console.log(req.body)

  res.json({ status: "ok" })
});


app.post('/api/product', (req, res) => {
  console.log(req.body)
  res.send("ok")
})



app.listen(PORT, () => {
  console.log(`Express listening at http://localhost:${PORT}`)
})


/* 
server: 
- tell express that routes have moved 

http://localhost:3001/product/123


*/