import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Account from "./Account";

function Menu() {
  const location = useLocation();
  const [, setSelectedMenu] = useState(0);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const menuClass = "menu";
  const activeMenu = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" className="logo" alt="Logo" />

      <div className="menus">
        <ul>
          <li>
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(0)}
            >
              <p className={location.pathname === "/" || location.pathname === "/dashboard" ? activeMenu : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/orders"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(1)}
            >
              <p className={location.pathname === "/orders" ? activeMenu : menuClass}>
                Orders
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/holdings"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(2)}
            >
              <p className={location.pathname === "/holdings" ? activeMenu : menuClass}>
                Holdings
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/positions"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(3)}
            >
              <p className={location.pathname === "/positions" ? activeMenu : menuClass}>
                Positions
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/funds"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(4)}
            >
              <p className={location.pathname === "/funds" ? activeMenu : menuClass}>
                Funds
              </p>
            </Link>
          </li>

          <li>
            <Link
              to="/apps"
              style={{ textDecoration: "none" }}
              onClick={() => handleMenuClick(5)}
            >
              <p className={location.pathname === "/apps" ? activeMenu : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <Account />
      </div>
    </div>
  );
}

export default Menu;
