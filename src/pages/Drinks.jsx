import React, { useState, useContext } from "react";
import { CartContext } from "../pages/CartContext";
import drinksData from "../Drinks.json";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import DrinksBg from "../assets/BackgroundImage/drinks.jpg";

// Drink images
import Chai from "../assets/Drinks/chai.jpg";
import MangoLassi from "../assets/Drinks/mangolassi.jpg";
import SaltedLassi from "../assets/Drinks/saltedlassi.jpg";
import ButterMilk from "../assets/Drinks/butterMilk.jpg";
import NimbuSarbat from "../assets/Drinks/nimbusarbat.jpg";
import CocaCola from "../assets/Drinks/cocacola.png";
import Pepsi from "../assets/Drinks/pepsi.jpg";
import Sprite from "../assets/Drinks/sprite.jpg";
import CokeDiet from "../assets/Drinks/coke-diet.jpg";
import PepsiMax from "../assets/Drinks/pepsimax.jpg";
import SpriteZero from "../assets/Drinks/spritezero.jpg";
import PassionFruitJuice from "../assets/Drinks/passionfruitjuice.jpg";
import Mazza from "../assets/Drinks/mazza.jpg";
import Fanta from "../assets/Drinks/fanta.jpg";
import JeeraSoda from "../assets/Drinks/jeerasoda.jpg";

const images = {
  "drink-1": Chai,
  "drink-2": MangoLassi,
  "drink-3": SaltedLassi,
  "drink-4": ButterMilk,
  "drink-5": NimbuSarbat,
  "drink-6": CocaCola,
  "drink-7": Pepsi,
  "drink-8": Sprite,
  "drink-9": CokeDiet,
  "drink-10": PepsiMax,
  "drink-11": SpriteZero,
  "drink-12": PassionFruitJuice,
  "drink-13": Mazza,
  "drink-14": Fanta,
  "drink-15": JeeraSoda,
};

const Drinks = () => {
  const { cart, setCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState({});

  const increaseQuantity = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const decreaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  };

  const handleAddToCart = (item) => {
    const qty = quantities[item.id] || 0;
    if (qty === 0) return;

    const cartItem = {
      ...item,
      quantity: qty,
      cartId: `${item.id}-${Date.now()}`,
      image: images[item.id] || item.image,
    };

    setCart((prev) => [...prev, cartItem]);
    setQuantities((prev) => ({ ...prev, [item.id]: 0 }));
  };

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center z-0 filter blur-lg"
        style={{ backgroundImage: `url(${DrinksBg})` }}
      />
      <div className="fixed inset-0 bg-black/60 z-10"></div>

      <div className="relative z-20 py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-center mb-12 drop-shadow-lg pt-6">
          Refreshing Drinks
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {drinksData.map((item, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });

            return (
              <motion.div
                key={item.id}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: index * 0.05,
                }}
                className="relative rounded-3xl overflow-hidden bg-white/10 shadow-lg hover:shadow-cyan-500/80 transform hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                {/* Bigger Image */}
                <div className="w-full h-72 sm:h-80 flex items-center justify-center bg-black p-2 sm:p-4">
                  <img
                    src={images[item.id] || item.image}
                    alt={item.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
                  {/* Smaller Text */}
                  <h3 className="text-sm sm:text-base font-bold text-white drop-shadow-md mb-1 text-center">
                    {item.name}
                  </h3>
                  <p className="text-sm sm:text-base text-yellow-300 font-bold text-center mt-1">
                    £{item.price.toFixed(2)}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center justify-center space-x-1 sm:space-x-2 my-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 py-1 sm:px-3 sm:py-1.5 bg-gray-300 rounded hover:bg-gray-400 text-sm"
                    >
                      -
                    </button>
                    <span className="text-sm sm:text-base font-bold text-white">
                      {quantities[item.id] || 0}
                    </span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-2 py-1 sm:px-3 sm:py-1.5 bg-gray-300 rounded hover:bg-gray-400 text-sm"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(item)}
                    disabled={(quantities[item.id] || 0) === 0}
                    className={`w-full py-2 sm:py-2.5 rounded-full transition text-sm ${
                      (quantities[item.id] || 0) === 0
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-cyan-500 hover:bg-cyan-600 text-white cursor-pointer"
                    }`}
                  >
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Drinks;
