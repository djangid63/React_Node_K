import React from "react";
import HeroSection from "./components/HeroSection.jsx";
import ProductCard1 from "./components/ProductCards/ProductCard1.jsx";
import productData from "./Data/Data";

function App() {
  // console.log(productData);
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <ProductCard1 productData={productData} />
    </div>
  );
}

export default App;
