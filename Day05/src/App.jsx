import React from "react";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import ProductCard1 from "./components/ProductSection/ProductCard1.jsx";
import productData from "./Data/Data";
import newProductData from "./Data/NewProduct.jsx";
import BagSection from "./components/ProductSection/BagSection.jsx";
import BlazerSection from './components/ProductSection/BlazerSection';
import ReinventedSection from "./components/ProductSection/ReinventedSection.jsx";
import NewProductCard from "./components/ProductSection/NewProductCard.jsx";
import ReviewSection from "./components/ReviewSection/ReviewSection.jsx";

function App() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <ProductCard1 productData={productData} />
      <BagSection />
      <BlazerSection />
      <ReinventedSection />
      <NewProductCard newProductData={newProductData} />
      <ReviewSection />
    </div>
  );
}

export default App;
