const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 4000;

require('dotenv').config()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

require("./db");

// importing persons collection
const Person = require("./Person");

app.get("/", (req, res) => {
  res.status(200).send("Server is up !!");
});

app.post("/person", async (req, res) => {
  try {
    const response = await Person.create(req.body);
    res.status(201).send(response);
  } catch (error) {
    console.error(error);
    res.status(400).send(`Something went wrong !!`);
  }
});

app.get("/person", async function (req, res) {
  try {
    res.status(200).send(await Person.find({}));
  } catch (error) {
    console.error(error);
    res.status(400).send(`Something went wrong !!`);
  }
});

app.listen(PORT, () => console.log(`Server is up and running at PORT:${PORT}`));
