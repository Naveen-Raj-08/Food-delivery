import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./Pages/Homepage";
import "./assets/Style/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProductListing } from "./Pages/ProductListing";
import { ItemList } from "./Components/ItemList";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<ProductListing />} />
        <Route path="/category" element={<ItemList />} />
      </Routes>
    </>
  );
};
