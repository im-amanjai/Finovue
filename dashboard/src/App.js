import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Holdings from "./components/Holdings";
import Positions from "./components/Positions";
import Orders from "./components/Orders";
import Funds from "./components/Funds";
import Apps from "./components/Apps";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/holdings"
        element={
          <MainLayout>
            <Holdings />
          </MainLayout>
        }
      />
      <Route
        path="/positions"
        element={
          <MainLayout>
            <Positions />
          </MainLayout>
        }
      />
      <Route
        path="/orders"
        element={
          <MainLayout>
            <Orders />
          </MainLayout>
        }
      />
      <Route
        path="/funds"
        element={
          <MainLayout>
            <Funds />
          </MainLayout>
        }
      />
      <Route
        path="/apps"
        element={
          <MainLayout>
            <Apps />
          </MainLayout>
        }
      />
      <Route path="*" element={<h2>Page Not Found</h2>} />
    </Routes>
  );
}

export default App;
