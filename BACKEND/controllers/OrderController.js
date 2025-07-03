const Orders = require("../model/OrdersModel");

//  Get all orders
module.exports.allOrders = async (req, res) => {
  try {
    const allOrders = await Orders.find({});
    res.status(200).json(allOrders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//  Create new order
module.exports.newOrders = async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    const newOrder = new Orders({
      name,
      qty,
      price,
      mode,
    });

    await newOrder.save();
    res.status(201).json({ message: "Order saved successfully" });
  } catch (err) {
    console.error("Error saving order:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//  Delete order by ID
module.exports.deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    await Orders.findByIdAndDelete(id);
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (err) {
    console.error("Error deleting order:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//  Check if order exists and has enough quantity
module.exports.checkOrder = async (req, res) => {
  try {
    const { name, qty } = req.body;
    const order = await Orders.findOne({ name });

    if (order && order.qty >= qty) {
      res.status(200).json({ exists: true });
    } else {
      res.status(200).json({ exists: false });
    }
  } catch (err) {
    console.error("Error checking order:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
