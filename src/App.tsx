import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NewHomePage from "./NewHomePage";
import Shop from "./Shop";
import CustomiseJersey from "./CustomiseJersey";
import Services from "./Services";
import Product from "./Product";
import Cardio from "./Cardio";
import Strength from "./Strength";
import Weight from "./Weight";
import Accessories from "./Accessories";
import Executive from "./Executive";
import Premium from "./Premium";

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
      <Route path="/cardio" element={<Cardio />} />
      <Route path="/strength" element={<Strength />} />
      <Route path="/weight" element={<Weight />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/executive-series" element={<Executive />} />
      <Route path="/premium-series" element={<Premium />} />
      {/* Define the route with parameters */}
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
};

export default App;
