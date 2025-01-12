import React from "react";


const ProductCard1 = ({ productData }) => {
  return (
    <div className="w-[100%] h-[100%] px-44 py-32 bg-white">
      <div className=" text-4xl md:text-6xl font-bold text-center font-mainHead italic capitalize tracking-[2px]">
        Most Popular
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
        {
          productData.map((product, index) => (
            <div key={index}>
              <div className="flex justify-center">
                <img className="max-w-96 h-auto md:w-[320px] md:h-[386px] mt-8 mb-4" src={product.img} />
              </div>
              <div className="flex flex-col gap-2 text-center ">
                <p className="font-mont text-gray-300 font-semibold text-[12px]">
                  {product.subtitle}
                </p>
                <h2 className="font-mainHead text-[16px] font-bold cursor-pointer">
                  {product.title}
                </h2>
                <p className="font-mont text-gray-500 font-bold text-[16px]">
                  ${product.price}
                </p>
                <div className="flex items-center justify-center gap-2 mb-5">
                  {product.sizes.map((size, index) => (
                    <button key={index} onClick={() => size === "XS" ? product.price = "124.90 - $154.90" : product.price} className="py-[2.5px] px-3 font-semibold cursor-pointer text-[14px] border border-black text-gray-400 rounded-[4px]">{size}</button>
                  ))}

                </div>
                <div className="flex items-center justify-center gap-4">
                  <div
                    className="w-5 h-5 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    tabindex="0"
                  ></div>
                  <div
                    className="w-5 h-5 bg-red-600 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    tabindex="0"
                  ></div>
                  <div
                    className="w-5 h-5 bg-green-600 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    tabindex="0"
                  ></div>
                  <div
                    className="w-5 h-5 bg-white border border-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    tabindex="0"
                  ></div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ProductCard1;
