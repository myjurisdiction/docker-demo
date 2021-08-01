const mongoose = require("mongoose");

const mongo_uri = process.env.mongo_uri;

mongoose.connect(mongo_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, `connection Error !!`));
db.once("open", function () {
  console.log(`Connection with database established !!`);
});
