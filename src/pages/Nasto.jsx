
import React, { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import gujaratiNastoData from "../Nasto.json";
import backgroundImage from "../assets/BackgroundImage/gujaratinasto.jpg";

// Import images
import papdiImg from "../assets/Nasto/papdi.jpg";
import gathiyaImg from "../assets/Nasto/gathiya.jpg";
import sevImg from "../assets/Nasto/sev.jpg";
import chavanuImg from "../assets/Nasto/chavanu.jpg";
import sakkarpharaImg from "../assets/Nasto/sakkarphara.jpg";
import chakriImg from "../assets/Nasto/chakri.jpg";
import nylonSevImg from "../assets/Nasto/nylonsev.jpg";
import bananaWafersImg from "../assets/Nasto/bananawafers.jpg";
import pauvaChevdoImg from "../assets/Nasto/pauvachevdo.jpg";
import sevChevdoImg from "../assets/Nasto/sevchevdo.jpg";
import farsiPooriImg from "../assets/Nasto/farsipoori.jpg";
import puriesImg from "../assets/Nasto/puries.jpg";

// Map images by JSON id
const imageMap = {
  "nasto-1": papdiImg,
  "nasto-2": gathiyaImg,
  "nasto-3": sevImg,
  "nasto-4": chavanuImg,
  "nasto-5": sakkarpharaImg,
  "nasto-6": chakriImg,
  "nasto-7": nylonSevImg,
  "nasto-8": bananaWafersImg,
  "nasto-9": pauvaChevdoImg,
  "nasto-10": sevChevdoImg,
  "nasto-11": farsiPooriImg,
  "nasto-12": puriesImg,
};

const Nasto = () => {
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
    setCart([
      ...cart,
      {
        ...selectedItem,
        quantity,
        image: imageMap[selectedItem.id],
        price: parseFloat(selectedItem.price),
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
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="fixed inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-orange-400 text-center mb-12 drop-shadow-lg pt-6">
          Gujarati Dry Nasto (Savouries)
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {gujaratiNastoData.gujarati_nasto.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpen(item)}
              className="cursor-pointer relative rounded-3xl overflow-hidden bg-white/10 shadow-lg hover:shadow-orange-500/80 transform hover:-translate-y-2 transition-all duration-500 flex flex-col"
            >
              <div className="w-full h-40 sm:h-48 flex items-center justify-center bg-black p-2 sm:p-4">
                <img
                  src={imageMap[item.id]}
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
                  £{item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4 sm:px-6 pt-12 sm:pt-20">
            <div className="bg-white rounded-3xl max-w-md sm:max-w-lg w-full p-4 sm:p-6 flex flex-col items-center relative">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-red-600 hover:text-red-800 text-xl border-2 border-red-600 rounded-full w-7 h-7 flex items-center justify-center bg-white shadow-lg transition-all hover:scale-110"
              >
                ✖
              </button>

              <img
                src={imageMap[selectedItem.id]}
                alt={selectedItem.name}
                className="w-full h-60 sm:h-80 object-contain mb-4 sm:mb-6"
              />
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-center">
                {selectedItem.name}
              </h3>
              <p className="text-gray-700 mb-4 text-center">
                Ingredients: {selectedItem.ingredients.join(", ")}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-between w-full mb-4 sm:mb-6 gap-2 sm:gap-4">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <button
                    onClick={() =>
                      setQuantity(quantity > 1 ? quantity - 1 : 1)
                    }
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
                  Total: £{(parseFloat(selectedItem.price) * quantity).toFixed(2)}
                </span>
              </div>

              <button
                onClick={handleAddToCart}
                className="bg-orange-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-orange-600 transition text-sm sm:text-base w-full sm:w-auto"
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

export default Nasto;

