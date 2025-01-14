import React from "react";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import ProductCard1 from "./components/ProductSection/ProductCard1.jsx";
import productData from "./Data/Data";
import BagSection from "./components/ProductSection/BagSection.jsx";
import BlazerSection from './components/ProductSection/BlazerSection';

function App() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <ProductCard1 productData={productData} />
      <BagSection />
      <BlazerSection />
    </div>
  );
}

export default App;
