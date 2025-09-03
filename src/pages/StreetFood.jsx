import React, { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import StreetFoodBg from "../assets/BackgroundImage/streetfood.webp";
import fastfoodData from "../FastFood.json";

// Import all images
import Khaman from "../assets/streetfood/khaman.jpg"
import Fafda from "../assets/streetfood/Fafda.jpg";
import SevKhamani from "../assets/streetfood/Sev-khamni.jpg";
import Gathiya from "../assets/streetfood/gathiya.jpg";
import Patra from "../assets/streetfood/patra.jpg";
import Handvo from "../assets/streetfood/handvo.jpg";
import Thepla from "../assets/streetfood/thepla.jpg";
import LilvaKachori from "../assets/streetfood/lilvakachori.jpg";
import Bhakarwadi from "../assets/streetfood/bharvadi.jpg";
import OnionBhajiya from "../assets/streetfood/onionbhajiya.jpg";
import BatakaPuri from "../assets/streetfood/batakapuri.jpg";
import MixBhajiya from "../assets/streetfood/mixbhajiya.jpg";
import Bhajiya from "../assets/streetfood/bhajiya.jpg";
import VadaPav from "../assets/vadapau.jpg";
import SevUsal from "../assets/streetfood/sevusal.jpg";
import Samosa from "../assets/streetfood/samosa.jpg";
import Dabeli from "../assets/streetfood/dabeli.webp";
import Muthiya from "../assets/streetfood/muthiya.jpg";
import Khandvi from "../assets/streetfood/khandvi.jpg";
import Locho from "../assets/streetfood/locho.jpg";
import Khakhra from "../assets/streetfood/khakhara.jpg";
import PunamiSal from "../assets/streetfood/punamisal.webp";
import BatakaPauva from "../assets/streetfood/batakapauva.jpg";
import Samosachat from "../assets/streetfood/samosachat.jpg";
import Papdichat from "../assets/streetfood/papdichat.jpg";
import Puff from "../assets/streetfood/puff.jpg";
import AlooParatha from "../assets/streetfood/alooparatha.jpg";
import Dahivada from "../assets/streetfood/dahivada.jpg";
import Maggi from "../assets/streetfood/maggi.jpg";
import Noodles from "../assets/streetfood/noodles.jpg";


// Map images by JSON id
const images = {
  "street-1": Khaman,
  "street-2": Fafda,
  "street-3": SevKhamani,
  "street-4": Gathiya,
  "street-5": Patra,
  "street-6": Handvo,
  "street-7": Thepla,
  "street-8": LilvaKachori,
  "street-9": Bhakarwadi,
  "street-10": Muthiya,
  "street-11": Khandvi,
  "street-12": Dabeli,
  "street-13": Locho,
  "street-14": Khakhra,
  "street-15": Bhajiya,
  "street-16": OnionBhajiya,
  "street-17": BatakaPuri,
  "street-18": MixBhajiya,
  "street-19": VadaPav,
  "street-20": SevUsal,
  "street-21": BatakaPauva,
  "street-22": PunamiSal,
  "street-23": Samosa,
  "street-24": Samosachat,
  "street-25": Papdichat,
  "street-26":Puff,
  "street-27":AlooParatha,
  "street-28":Dahivada,
  "street-29":Maggi,
  "street-30":Noodles
};

const parsePrice = (price) => {
  if (!price) return 0;
  if (price.includes("p")) return parseFloat(price.replace("p", "").trim()) / 100;
  const match = price.match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
};

const StreetFood = () => {
  const { cart, setCart } = useContext(CartContext);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleOpen = (item) => {
    setSelectedItem(item);
    setQuantity(1);
  };

  const handleClose = () => setSelectedItem(null);

  const handleAddToCart = () => {
    if (!selectedItem) return;

    const cartId = `${selectedItem.id}-${Date.now()}`;
    const numericPrice = parsePrice(selectedItem.price);

    setCart([
      ...cart,
      {
        ...selectedItem,
        quantity,
        price: numericPrice,
        image: images[selectedItem.id] || selectedItem.image,
        cartId,
      },
    ]);

    handleClose();
    setQuantity(1);
  };

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center z-0 filter blur-lg"
        style={{ backgroundImage: `url(${StreetFoodBg})` }}
      />
      <div className="fixed inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300 text-center mb-12 drop-shadow-lg pt-6">
          Street Food
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {fastfoodData.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpen(item)}
              className="cursor-pointer relative rounded-2xl overflow-hidden bg-white/10 shadow-lg hover:shadow-orange-500/80 transform hover:-translate-y-2 transition-all duration-500 flex flex-col"
            >
              <div className="w-full h-40 sm:h-48 flex items-center justify-center bg-black p-2 sm:p-4">
                <img
                  src={images[item.id] || item.image}
                  alt={item.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-md mb-1 text-center">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 text-center">
                  Ingredients: {item.ingredients.join(", ")}
                </p>
                <p className="text-lg sm:text-xl text-yellow-300 font-bold text-center mt-1">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4 sm:px-6 pt-12 sm:pt-20">
            <div className="bg-white rounded-3xl max-w-md sm:max-w-lg w-full p-4 sm:p-6 flex flex-col items-center relative">
              
              {/* Cancel Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-red-600 hover:text-red-800 text-3xl border-2 border-red-600 rounded-full w-7 h-7 flex items-center justify-center bg-white shadow-lg transition-all hover:scale-110"
              >
                &times;
              </button>

              <img
                src={images[selectedItem.id] || selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-60 sm:h-80 object-contain mb-4 sm:mb-6"
              />
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-center">
                {selectedItem.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 mb-4 text-center">
                Ingredients: {selectedItem.ingredients.join(", ")}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-between w-full mb-4 sm:mb-6 px-2 sm:px-4 gap-2 sm:gap-4">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <button
                    onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                    className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span className="text-lg sm:text-xl font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
                <span className="text-lg sm:text-xl font-bold text-yellow-600">
                  Total: £{(parsePrice(selectedItem.price) * quantity).toFixed(2)}
                </span>
              </div>

              <button
                onClick={handleAddToCart}
                className="bg-orange-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-orange-600 transition text-sm sm:text-base"
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StreetFood