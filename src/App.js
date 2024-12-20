import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NewHomePage from "./NewHomePage";
import Shop from "./Shop";
import CustomiseJersey from "./CustomiseJersey";
import Services from "./Services";
import Product from "./Product";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/NewHomePage" element={<NewHomePage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/customisejersey" element={<CustomiseJersey />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
};

export default App;
