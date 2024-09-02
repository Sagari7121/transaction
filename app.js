require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");

const routes=require("./src/routes/index");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

mongoose.connect(process.env.MONGODB_URL).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`App is listening on port ${process.env.PORT}`);
  });
});
