import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { Alert } from "@mui/material";

import "./SellActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [showAlert, setShowAlert] = useState(false);
  const { closeSellWindow } = useContext(GeneralContext);

  const handleSellClick = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3002/order/checkOrders",
        {
          name: uid,
          qty: stockQuantity,
        }
      );
      if (response.data.exists) {
        await axios.post("http://localhost:3002/order/newOrders", {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "SELL",
        });
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
          closeSellWindow();
          window.location.reload();
        }, 1000);
      } else {
        alert("You don't have enough stocks to sell");
        closeSellWindow();
      }
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      {showAlert && <Alert severity="success">Sell Successfully</Alert>}
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
          <button className="btn btn-blue" onClick={handleSellClick}>
            Sell
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;