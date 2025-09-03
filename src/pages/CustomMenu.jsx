// import React, { useState, useContext } from "react";
// import { CartContext } from "./CartContext";
// import customMenuData from "../customMenu.json";
// import BgImg from "../assets/BackgroundImage/custommenu.jpg";

// // Import images
// import Undhiyu from "../assets/Curries/undhiyu.jpg";
// import Sukibhaji from "../assets/Curries/sukibhaji.jpg";
// import RinganBatata from "../assets/Curries/ringan_batakanu_shak.jpg";
// import SevTameta from "../assets/Curries/sev_tameta.jpg";
// import DudhiChanani from "../assets/Curries/dudhi_chana_dal.jpg";
// import Bhindi from "../assets/Curries/bhindi_masala.jpg";
// import Tindora from "../assets/Curries/tindora_shak.jpg";
// import Karela from "../assets/Curries/karela_shak.jpg";
// import Gathiya from "../assets/Curries/gathiya_shak.jpg";
// import MixVeg from "../assets/Curries/mix_veg.jpg";
// import PaneerButterMasala from "../assets/Curries/paneer_butter_masala.jpg";
// import ChanaMasala from "../assets/Curries/chana_masala.jpg";
// import AlooGobi from "../assets/Curries/aloo_gobi.jpg";
// import BainganBharta from "../assets/Curries/baingan_bharta.jpg";
// import DalMakhani from "../assets/Curries/dal_makhani.jpg";
// import SarsonSaag from "../assets/Curries/sarson_da_saag.jpg";
// import RajmaMasala from "../assets/Curries/rajma_masala.jpg";
// import PaneerTikkaMasala from "../assets/Curries/paneer_tikka_masala.jpg";
// import KadaiPaneer from "../assets/Curries/kadai_paneer.jpg";
// import AlooMethi from "../assets/Curries/aloo_methi.jpg";
// import PaneerBhurji from "../assets/Curries/paneer_bhurji.jpg";
// import MalaiKofta from "../assets/Curries/malai_kofta.jpg";
// import MutterPaneer from "../assets/Curries/mutter_paneer.jpg";
// import NavratanKorma from "../assets/Curries/navratan_korma.jpg";
// import PaneerLababdar from "../assets/Curries/paneer_lababdar.jpg";

// // Map images by JSON id
// const imageMap = {
//   "custom-1": Undhiyu,
//   "custom-2": Sukibhaji,
//   "custom-3": RinganBatata,
//   "custom-4": SevTameta,
//   "custom-5": DudhiChanani,
//   "custom-6": Bhindi,
//   "custom-7": Tindora,
//   "custom-8": Karela,
//   "custom-9": Gathiya,
//   "custom-10": MixVeg,
//   "custom-12": PaneerButterMasala,
//   "custom-13": ChanaMasala,
//   "custom-14": AlooGobi,
//   "custom-15": BainganBharta,
//   "custom-16": DalMakhani,
//   "custom-17": SarsonSaag,
//   "custom-18": RajmaMasala,
//   "custom-19": PaneerTikkaMasala,
//   "custom-20": KadaiPaneer,
//   "custom-21": AlooMethi,
//   "custom-22": PaneerBhurji,
//   "custom-23": MalaiKofta,
//   "custom-24": MutterPaneer,
//   "custom-25": NavratanKorma,
//   "custom-26": PaneerLababdar,
// };

// const CustomMenu = () => {
//   const { cart, setCart } = useContext(CartContext);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [quantity, setQuantity] = useState(1);

//   const handleOpen = (item) => {
//     setSelectedItem(item);
//     setQuantity(1);
//   };

//   const handleClose = () => setSelectedItem(null);

//   const handleAddToCart = () => {
//     if (!selectedItem) return;

//     const cartId = `${selectedItem.id}-${Date.now()}`; // unique cartId

//     setCart([
//       ...cart,
//       {
//         ...selectedItem,
//         quantity,
//         image: imageMap[selectedItem.id],
//         cartId,
//       },
//     ]);

//     handleClose();
//     setQuantity(1);
//   };

//   return (
//     <div
//       className="relative min-h-screen bg-cover bg-center bg-fixed"
//       style={{ backgroundImage: `url(${BgImg})` }}
//     >
//       <div className="absolute inset-0 bg-black/60 z-10"></div>

//       <div className="relative z-20 py-16 px-6 max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-orange-500 text-center mb-12">
//           Signature Vegetarian Indian Curries
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {customMenuData.map((item) => (
//             <div
//               key={item.id}
//               onClick={() => handleOpen(item)}
//               className="cursor-pointer bg-white/10 rounded-3xl overflow-hidden shadow-lg hover:shadow-orange-500/80 transform hover:-translate-y-2 transition-all duration-500 flex flex-col"
//             >
//               <div className="w-full h-64 flex items-center justify-center bg-black p-4">
//                 <img
//                   src={imageMap[item.id]}
//                   alt={item.name}
//                   className="max-w-full max-h-full object-contain"
//                 />
//               </div>
//               <div className="p-4 flex-1 flex flex-col justify-between">
//                 <h3 className="text-xl font-bold text-white text-center mb-2">
//                   {item.name}
//                 </h3>
//                 <p className="text-gray-300 text-sm text-center">
//                   Ingredients: {item.ingredients.join(", ")}
//                 </p>
//                 <p className="text-yellow-300 font-bold text-lg text-center mt-2">
//                   £{item.price.toFixed(2)}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {selectedItem && (
//           <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4 pt-12">
//             <div className="bg-white rounded-3xl max-w-lg w-full p-6 relative flex flex-col items-center">
//               <button
//                 onClick={handleClose}
//                 className="absolute top-2 right-3 text-red-600 hover:text-gray-900 text-4xl font-bold border-2 border-red-600 rounded-full w-10 h-10 flex items-center justify-center bg-white"
//               >
//                 &times;
//               </button>

//               <img
//                 src={imageMap[selectedItem.id]}
//                 alt={selectedItem.name}
//                 className="w-full h-80 object-contain mb-6"
//               />
//               <h3 className="text-3xl font-bold mb-2">{selectedItem.name}</h3>
//               <p className="text-gray-700 mb-4 text-center">
//                 Ingredients: {selectedItem.ingredients.join(", ")}
//               </p>

//               <div className="flex items-center justify-between w-full mb-6 px-4">
//                 <div className="flex items-center space-x-4">
//                   <button
//                     onClick={() =>
//                       setQuantity(quantity > 1 ? quantity - 1 : 1)
//                     }
//                     className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
//                   >
//                     -
//                   </button>
//                   <span className="text-xl font-bold">{quantity}</span>
//                   <button
//                     onClick={() => setQuantity(quantity + 1)}
//                     className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
//                   >
//                     +
//                   </button>
//                 </div>
//                 <span className="text-xl font-bold text-yellow-600">
//                   Total: £{(selectedItem.price * quantity).toFixed(2)}
//                 </span>
//               </div>

//               <button
//                 onClick={handleAddToCart}
//                 className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CustomMenu;




import React, { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import customMenuData from "../customMenu.json";
import BgImg from "../assets/BackgroundImage/custommenu.jpg";

// Import images
import Undhiyu from "../assets/Curries/undhiyu.jpg";
import Sukibhaji from "../assets/Curries/sukibhaji.jpg";
import RinganBatata from "../assets/Curries/ringan_batakanu_shak.jpg";
import SevTameta from "../assets/Curries/sev_tameta.jpg";
import DudhiChanani from "../assets/Curries/dudhi_chana_dal.jpg";
import Bhindi from "../assets/Curries/bhindi_masala.jpg";
import Tindora from "../assets/Curries/tindora_shak.jpg";
import Karela from "../assets/Curries/karela_shak.jpg";
import Gathiya from "../assets/Curries/gathiya_shak.jpg";
import MixVeg from "../assets/Curries/mix_veg.jpg";
import PaneerButterMasala from "../assets/Curries/paneer_butter_masala.jpg";
import ChanaMasala from "../assets/Curries/chana_masala.jpg";
import AlooGobi from "../assets/Curries/aloo_gobi.jpg";
import BainganBharta from "../assets/Curries/baingan_bharta.jpg";
import DalMakhani from "../assets/Curries/dal_makhani.jpg";
import SarsonSaag from "../assets/Curries/sarson_da_saag.jpg";
import RajmaMasala from "../assets/Curries/rajma_masala.jpg";
import PaneerTikkaMasala from "../assets/Curries/paneer_tikka_masala.jpg";
import KadaiPaneer from "../assets/Curries/kadai_paneer.jpg";
import AlooMethi from "../assets/Curries/aloo_methi.jpg";
import PaneerBhurji from "../assets/Curries/paneer_bhurji.jpg";
import MalaiKofta from "../assets/Curries/malai_kofta.jpg";
import MutterPaneer from "../assets/Curries/mutter_paneer.jpg";
import NavratanKorma from "../assets/Curries/navratan_korma.jpg";
import PaneerLababdar from "../assets/Curries/paneer_lababdar.jpg";

// Map images by JSON id
const imageMap = {
  "custom-1": Undhiyu,
  "custom-2": Sukibhaji,
  "custom-3": RinganBatata,
  "custom-4": SevTameta,
  "custom-5": DudhiChanani,
  "custom-6": Bhindi,
  "custom-7": Tindora,
  "custom-8": Karela,
  "custom-9": Gathiya,
  "custom-10": MixVeg,
  "custom-12": PaneerButterMasala,
  "custom-13": ChanaMasala,
  "custom-14": AlooGobi,
  "custom-15": BainganBharta,
  "custom-16": DalMakhani,
  "custom-17": SarsonSaag,
  "custom-18": RajmaMasala,
  "custom-19": PaneerTikkaMasala,
  "custom-20": KadaiPaneer,
  "custom-21": AlooMethi,
  "custom-22": PaneerBhurji,
  "custom-23": MalaiKofta,
  "custom-24": MutterPaneer,
  "custom-25": NavratanKorma,
  "custom-26": PaneerLababdar,
};

const CustomMenu = () => {
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

    const cartId = `${selectedItem.id}-${Date.now()}`; // unique cartId

    setCart([
      ...cart,
      {
        ...selectedItem,
        quantity,
        image: imageMap[selectedItem.id],
        cartId,
      },
    ]);

    handleClose();
    setQuantity(1);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${BgImg})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      <div className="relative z-20 py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500 text-center mb-12 pt-4">
          Signature Vegetarian Indian Curries
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {customMenuData.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpen(item)}
              className="cursor-pointer bg-white/10 rounded-3xl overflow-hidden shadow-lg hover:shadow-orange-500/80 transform hover:-translate-y-2 transition-all duration-500 flex flex-col"
            >
              <div className="w-full h-40 sm:h-48 flex items-center justify-center bg-black p-2 sm:p-4">
                <img
                  src={imageMap[item.id]}
                  alt={item.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-1">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 text-center">
                  Ingredients: {item.ingredients.join(", ")}
                </p>
                <p className="text-lg sm:text-xl text-yellow-300 font-bold text-center mt-1">
                  £{item.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

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
                  Total: £{(selectedItem.price * quantity).toFixed(2)}
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

export default CustomMenu;
