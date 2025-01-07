import React from 'react';
import logo from '../images/extractimages_12232024_91638.jpeg';

function App() {
  return (
    <div className="w-screen h-screen flex justify-center items-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${logo})` }}
      ></div>

      {/*Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col justify-evenly text-white">
        {/* Navbar */}
        <div className="w-full flex justify-between items-center px-32 py-4">
          {/* Left Navigation */}
          <ul className="flex font-leftNav font-semibold space-x-4">
            <li className="hover:underline cursor-pointer font-sans">Home</li>
            <li className="hover:underline cursor-pointer">Shop</li>
            <li className="hover:underline cursor-pointer">About Us</li>
            <li className="hover:underline cursor-pointer">Contact Us</li>
          </ul>

          {/* Middle Brand */}
          <div className="text-center mr-60 ">
            <div className="text-xl font-thin font-mono">DJAN+</div>
            <div className="text-sm">Wardrobe</div>
          </div>

          {/* Right Icons */}
          <div className="flex space-x-4">
            <div className="cursor-pointer">Icon</div>
            <div className="cursor-pointer">Icon</div>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="flex-grow flex justify-center items-center">
          <h1 className="text-4xl font-bold">Welcome to My App</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
