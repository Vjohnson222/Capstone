const express = require('express');
const app = express();
const PORT = 3004;
const db = require('./models');
const cors = require("cors")
app.use(cors())
app.use(express.json());


app.post("/people", (req, res) => {
  console.log("POST /people")

  const name = req.body.name;
  const email = req.body.email;

  // const { name, email } = req.body;

  if (!name || !email) {
    res.json({ error: "missing property name or email" });
    return;
  }
  
  db.person.create({ name: name, email: email}).then((result) => {
    console.log(result)
    res.json(result)
  })
  
})
app.get("/people", (req, res) => {
  console.log("GET /people")

  db.person.findAll({ attributes: ['id', 'name', 'email'] }).then((results) => {
    res.json(results)
  }).catch((e) => {
    console.log(e)
    res.json({ status: "error" })
  })

})

app.listen(PORT, (req, res) => {
  console.log(" app started at post 3000")
})

