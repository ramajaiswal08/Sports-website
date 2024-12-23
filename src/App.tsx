import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NewHomePage from "./NewHomePage";
import Shop from "./Shop";
import CustomiseJersey from "./CustomiseJersey";
import Services from "./Services";
import Product from "./Product";

// Add type annotations for the route parameters
interface ProductParams {
  id: string;
}

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/NewHomePage" element={<NewHomePage />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/customisejersey" element={<CustomiseJersey />} />
      <Route path="/Services" element={<Services />} />
      {/* Define the route with parameters */}
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
};

export default App;
