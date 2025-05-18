const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  price: { type: Number, required: true },
});

const orderSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },

    address: {
      country: { type: String, required: true },
      street1: { type: String, required: true },
      street2: { type: String },
      town: { type: String, required: true },
      postcode: { type: String, required: true },
    },

    phone: { type: String, required: true },
    email: { type: String, required: true },
    orderNote: { type: String },

    cart: {
      items: [itemSchema],
      total: { type: Number, required: true },
    },

    paymentMethod: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
