const Holdings = require("../model/HoldingsModel");

module.exports.allHoldings = async (req, res) => {
  try {
    const allHoldings = await Holdings.find({});
    res.json(allHoldings);
  } catch (err) {
    console.error("Error fetching holdings:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.newHoldings = async (req, res) => {
  try {
    const newHolding = new Holdings({
      name: req.body.name,
      qty: req.body.qty,
      avg: req.body.avg,
      price: req.body.price,
      net: req.body.net,
      day: req.body.day,
      isLoss: req.body.isLoss || false,
    });

    await newHolding.save();
    res.status(201).send("Holdings saved successfully");
  } catch (err) {
    console.error("Error saving holding:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
