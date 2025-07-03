import React, { useState, useContext } from "react";
import "./BuyActionWindow.css";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { Alert } from "@mui/material";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [showAlert, setShowAlert] = useState(false);
  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = async () => {
    try {
      await axios.post("https://finovue.onrender.com/order/newOrders", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        closeBuyWindow();
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Error placing order. Please try again.");
    }

    try {
      const avgCost = stockPrice;
      const netChange = stockPrice * stockQuantity;
      const dayChange = 0.0;
      const isLoss = false;

      await axios.post("https://finovue.onrender.com/holding/newHoldings", {
        name: uid,
        qty: stockQuantity,
        avg: avgCost,
        price: stockPrice,
        net: netChange,
        day: dayChange,
        isLoss: isLoss,
      });
    } catch (error) {
      console.error("Error placing holding:", error);
      alert("Error placing holding. Please try again.");
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      {showAlert && <Alert severity="success">Buy Successfully</Alert>}
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              min={1}
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              min={0}
              step="0.05"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
