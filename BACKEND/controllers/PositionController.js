const Positions = require("../model/PositionsModel");

module.exports.allPositions = async (req, res) => {
  try {
    const allPositions = await Positions.find({});
    res.status(200).json(allPositions);
  } catch (err) {
    console.error("Error fetching positions:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
