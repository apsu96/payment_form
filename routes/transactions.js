const { Router } = require("express");
const Transaction = require("../models/Transaction");
const router = Router();

router.post("/transfer", async (request, response) => {
  if (
    /^\d{16}$/.test(request.body.cardNumber) &&
    /^\d{2}\/\d{4}$/.test(request.body.expDate) &&
    /^\d{3}$/.test(request.body.cvv) &&
    typeof request.body.amount === "number"
  ) {
    const transaction = new Transaction({
      cardNumber: request.body.cardNumber,
      expDate: request.body.expDate,
      cvv: request.body.cvv,
      amount: request.body.amount,
    });
    await transaction.save();
    const id = await transaction._id.toString();
    const amount = await transaction.amount;
    response.send({ requestId: id, amount: amount });
  } else {
    return error;
  }
});

module.exports = router;
