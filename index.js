const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const transactionRoutes = require("./routes/transactions");

const port = process.env.PORT || 3050;

mongoose
  .connect(
    "mongodb+srv://Svetlana:qwe123@cluster0.3c2dj.mongodb.net/payments?retryWrites=true&w=majority"
  )
  .then(() => {
    const app = express();
    app.use(express.static(path.join(__dirname, "build")));
    app.use(express.json());
    app.use(transactionRoutes);
    app.listen(port, () => {});
  });
