
import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Tiffin from "./Tiffin";
import Drinks from "./Drinks";
import StreetFood from "./StreetFood";
import CustomMenu from "./CustomMenu";
import Nasto from "./Nasto";

// Import images for each section
import TiffinImg from "../assets/BackgroundImage/tiffin.webp";
import StreetFoodImg from "../assets/BackgroundImage/streetfood.webp";
import NastoImg from "../assets/BackgroundImage/gujaratinasto.jpg";
import DrinksBg from "../assets/BackgroundImage/drinks.jpg";
import CustomMenuImg from "../assets/BackgroundImage/custommenu.jpg";

// Page background
import PageBg from "../assets/BackgroundImage/orderonline.png";

const OrderNowHome = () => {
  const navigate = useNavigate();

  const sections = [
    { name: "Tiffin Menu", path: "tiffin", image: TiffinImg },
    { name: "Street Food", path: "streetfood", image: StreetFoodImg },
    { name: "Indian Curries", path: "custom", image: CustomMenuImg },
    { name: "Namkeen (Savouries)", path: "nasto", image: NastoImg },
    { name: "Drinks", path: "drinks", image: DrinksBg },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Full-screen background image */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-fixed z-0"
        style={{ backgroundImage: `url(${PageBg})` }}
      ></div>

      {/* Dark overlay for contrast */}
      <div className="fixed inset-0 bg-black/50 z-10"></div>

      {/* Page content */}
      <div className="relative z-20 pt-32 px-4">
        <h1 className="text-4xl font-bold text-center mb-10 text-yellow-300">
          Order Online - Our Full Menu
        </h1>

        {/* Grid with 2 boxes on mobile */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {sections.map((section, idx) => (
            <div
              key={idx}
              onClick={() => navigate(`/order-now/${section.path}`)}
              className="cursor-pointer relative rounded-3xl shadow-xl hover:scale-105 transform transition-transform duration-300 aspect-square flex items-center justify-center overflow-hidden"
            >
              {/* Background image for each section */}
              <div
                className="absolute inset-0 bg-cover bg-center brightness-75"
                style={{ backgroundImage: `url(${section.image})` }}
              ></div>

              {/* Black overlay for better text visibility */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Section name */}
              <span className="relative text-white text-lg sm:text-xl md:text-2xl font-bold text-center px-4">
                {section.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const OrderNow = () => {
  return (
    <div>
      <Routes>
        <Route index element={<OrderNowHome />} />
        <Route path="tiffin" element={<Tiffin />} />
        <Route path="streetfood" element={<StreetFood />} />
        <Route path="custom" element={<CustomMenu />} />
        <Route path="drinks" element={<Drinks />} />
        <Route path="nasto" element={<Nasto />} />
      </Routes>
    </div>
  );
};

export default OrderNow;
