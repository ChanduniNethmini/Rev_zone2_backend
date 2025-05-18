const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// Create Order
router.post("/save", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(201).json({ message: "Order created", order: savedOrder });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to create order", details: err.message });
  }
});

// Get All Orders
router.get("/getAll", async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json({ orders });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to fetch orders", details: err.message });
  }
});

module.exports = router;
