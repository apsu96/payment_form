const { Schema, model } = require("mongoose");

const schema = new Schema({
  cardNumber: Number,
  expDate: String,
  cvv: Number,
  amount: Number,
});

module.exports = model("Transaction", schema);
