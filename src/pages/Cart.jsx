// import React, { useContext, useState, useEffect, useMemo } from "react";
// import { CartContext } from "./CartContext";
// import { useNavigate } from "react-router-dom";
// import { LuMessageCircle } from "react-icons/lu";
// import { motion, AnimatePresence } from "framer-motion";

// const Cart = () => {
//   const { cart, setCart } = useContext(CartContext);
//   const navigate = useNavigate();
//   const [openNote, setOpenNote] = useState(null);

//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart");
//     if (savedCart) setCart(JSON.parse(savedCart));
//   }, [setCart]);

//   useEffect(() => {
//     if (cart.length > 0) localStorage.setItem("cart", JSON.stringify(cart));
//     else localStorage.removeItem("cart");
//   }, [cart]);

//   const handleRemove = (cartId) => {
//     if (window.confirm("Are you sure want to remove this item?")) {
//       setCart(cart.filter((item) => item.cartId !== cartId));
//     }
//   };

//   const handleQuantityChange = (cartId, delta) => {
//     setCart(
//       cart
//         .map((item) => {
//           if (item.cartId === cartId) {
//             const newQty = item.quantity + delta;
//             if (newQty < 1) {
//               if (window.confirm("Quantity is 0. Remove this item?")) {
//                 return null;
//               } else return item;
//             }
//             return { ...item, quantity: newQty };
//           }
//           return item;
//         })
//         .filter(Boolean)
//     );
//   };

//   const handleNoteChange = (cartId, note) => {
//     setCart(
//       cart.map((item) => (item.cartId === cartId ? { ...item, note } : item))
//     );
//   };

//   const grandTotal = useMemo(
//     () =>
//       cart.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0),
//     [cart]
//   );

//   return (
//     <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">
//       <h2 className="font-speacial text-3xl sm:text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 pt-10 drop-shadow-md">
//         🛒 Basket
//       </h2>

//       {cart.length === 0 ? (
//         <p className="text-center text-gray-700 text-lg mt-12 font-medium">
//           Your cart is empty 😔
//         </p>
//       ) : (
//         <div className="max-w-5xl mx-auto relative">
//           <div className="bg-white/80 backdrop-blur-xl shadow-xl rounded-2xl p-4 flex flex-col space-y-4 border border-purple-200 max-h-[70vh] overflow-y-auto pb-28">
//             <AnimatePresence>
//               {cart.map((item, index) => {
//                 const itemTotal = (item.price * item.quantity).toFixed(2);

//                 return (
//                   <motion.div
//                     key={item.cartId || index}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     transition={{ duration: 0.3 }}
//                     className="relative bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-lg p-3 flex flex-col sm:flex-row sm:items-center justify-between"
//                   >
//                     {/* Cancel Button */}
//                     <button
//                       onClick={() => handleRemove(item.cartId)}
//                       className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold text-lg"
//                     >
//                       &times;
//                     </button>

//                     {/* Left: Image + Name */}
//                     <div className="flex items-center gap-3 flex-1">
//                       <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-200">
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           onError={(e) =>
//                             (e.target.src =
//                               "https://via.placeholder.com/80x80?text=No+Img")
//                           }
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                       <div className="flex flex-col">
//                         <span className="font-semibold text-sm sm:text-base">
//                           {item.name}
//                         </span>
//                         <span className="text-orange-600 font-bold text-xs sm:text-sm">
//                           £{Number(item.price).toFixed(2)}
//                         </span>
//                       </div>
//                     </div>

//                     {/* Controls Row */}
//                     <div className="flex items-center justify-between w-full sm:w-auto mt-3 sm:mt-0 gap-4">
//                       {/* Quantity + Message */}
//                       <div className="flex items-center gap-2">
//                         <button
//                           onClick={() => handleQuantityChange(item.cartId, -1)}
//                           className="px-2 sm:px-3 py-1 bg-red-500 text-white rounded-md text-sm sm:text-lg"
//                         >
//                           −
//                         </button>
//                         <span className="font-bold text-gray-900 text-sm sm:text-base">
//                           {item.quantity}
//                         </span>
//                         <button
//                           onClick={() => handleQuantityChange(item.cartId, 1)}
//                           className="px-2 sm:px-3 py-1 bg-green-500 text-white rounded-md text-sm sm:text-lg"
//                         >
//                           +
//                         </button>
//                         {/* Message button next to increase */}
//                         <button
//                           onClick={() =>
//                             setOpenNote(
//                               openNote === item.cartId ? null : item.cartId
//                             )
//                           }
//                           className="p-2 rounded-full bg-white hover:bg-gray-200 ml-1"
//                         >
//                           <LuMessageCircle
//                             size={18}
//                             className="text-pink-500"
//                           />
//                         </button>
//                       </div>

//                       {/* Total Price */}
//                       <span className="font-bold text-green-700 text-sm sm:text-base ml-auto">
//                         £{itemTotal}
//                       </span>
//                     </div>

//                     {/* Note Section */}
//                     <AnimatePresence>
//                       {openNote === item.cartId && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: "auto" }}
//                           exit={{ opacity: 0, height: 0 }}
//                           transition={{ duration: 0.3 }}
//                           className="mt-2 w-full sm:mt-0 sm:ml-4"
//                         >
//                           <textarea
//                             placeholder="Add special instructions"
//                             value={item.note || ""}
//                             onChange={(e) =>
//                               handleNoteChange(item.cartId, e.target.value)
//                             }
//                             className="p-2 w-full text-sm border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-400"
//                           />
//                           <button
//                             onClick={() => handleNoteChange(item.cartId, "")}
//                             className="mt-1 text-sm text-red-500 hover:underline"
//                           >
//                             Clear Note
//                           </button>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </motion.div>
//                 );
//               })}
//             </AnimatePresence>
//           </div>

//           {/* Footer */}
//           {cart.length > 0 && (
//             <div className=" bottom-0 mt-4 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 p-4 rounded-xl shadow-lg flex justify-between items-center">
//               {/* Grand Total */}
//               <h3 className="text-lg sm:text-xl font-extrabold text-white">
//                 Grand Total: £{grandTotal.toFixed(2)}
//               </h3>

//               {/* Pay Now Button */}
//               <button
//                 onClick={() => navigate("/payment")}
//                 className="px-6 py-2 rounded-full font-bold shadow bg-white text-pink-600 hover:bg-gray-100 cursor-pointer"
//               >
//                 Pay Now
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;





import React, { useContext, useState, useEffect, useMemo } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import { LuMessageCircle } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [openNote, setOpenNote] = useState(null);
  const [hasConfirmedRemove, setHasConfirmedRemove] = useState(false); // ✅ track confirmation

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, [setCart]);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
      setHasConfirmedRemove(false); // ✅ reset confirmation if cart is empty
    }
  }, [cart]);

  const handleRemove = (cartId) => {
    if (!hasConfirmedRemove) {
      const confirmRemove = window.confirm(
        "Do you want to remove this item?"
      );
      if (!confirmRemove) return;
      setHasConfirmedRemove(true); // ✅ only ask once
    }
    setCart(cart.filter((item) => item.cartId !== cartId));
  };

  const handleQuantityChange = (cartId, delta) => {
    setCart(
      cart
        .map((item) => {
          if (item.cartId === cartId) {
            const newQty = item.quantity + delta;
            if (newQty < 1) {
              if (window.confirm("Quantity is 0. Remove this item?")) {
                return null;
              } else return item;
            }
            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const handleNoteChange = (cartId, note) => {
    setCart(
      cart.map((item) => (item.cartId === cartId ? { ...item, note } : item))
    );
  };

  const grandTotal = useMemo(
    () =>
      cart.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0),
    [cart]
  );

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200">
      <h2 className="font-speacial text-3xl sm:text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 pt-10 drop-shadow-md">
        🛒 Basket
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-700 text-lg mt-12 font-medium">
          Your cart is empty 😔
        </p>
      ) : (
        <div className="max-w-5xl mx-auto relative">
          <div className="bg-white/80 backdrop-blur-xl shadow-xl rounded-2xl p-4 flex flex-col space-y-4 border border-purple-200 max-h-[70vh] overflow-y-auto pb-28">
            <AnimatePresence>
              {cart.map((item, index) => {
                const itemTotal = (item.price * item.quantity).toFixed(2);

                return (
                  <motion.div
                    key={item.cartId || index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 rounded-lg p-3 flex flex-col sm:flex-row sm:items-center justify-between"
                  >
                    {/* Cancel Button */}
                    <button
                      onClick={() => handleRemove(item.cartId)}
                      className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold text-lg"
                    >
                      &times;
                    </button>

                    {/* Left: Image + Name */}
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-200">
                        <img
                          src={item.image}
                          alt={item.name}
                          onError={(e) =>
                            (e.target.src =
                              "https://via.placeholder.com/80x80?text=No+Img")
                          }
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-sm sm:text-base">
                          {item.name}
                        </span>
                        <span className="text-orange-600 font-bold text-xs sm:text-sm">
                          £{Number(item.price).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Controls Row */}
                    <div className="flex items-center justify-between w-full sm:w-auto mt-3 sm:mt-0 gap-4">
                      {/* Quantity + Message */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleQuantityChange(item.cartId, -1)}
                          className="px-2 sm:px-3 py-1 bg-red-500 text-white rounded-md text-sm sm:text-lg"
                        >
                          −
                        </button>
                        <span className="font-bold text-gray-900 text-sm sm:text-base">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.cartId, 1)}
                          className="px-2 sm:px-3 py-1 bg-green-500 text-white rounded-md text-sm sm:text-lg"
                        >
                          +
                        </button>
                        {/* Message button next to increase */}
                        <button
                          onClick={() =>
                            setOpenNote(
                              openNote === item.cartId ? null : item.cartId
                            )
                          }
                          className="p-2 rounded-full bg-white hover:bg-gray-200 ml-1"
                        >
                          <LuMessageCircle
                            size={18}
                            className="text-pink-500"
                          />
                        </button>
                      </div>

                      {/* Total Price */}
                      <span className="font-bold text-green-700 text-sm sm:text-base ml-auto">
                        £{itemTotal}
                      </span>
                    </div>

                    {/* Note Section */}
                    <AnimatePresence>
                      {openNote === item.cartId && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-2 w-full sm:mt-0 sm:ml-4"
                        >
                          <textarea
                            placeholder="Add special instructions"
                            value={item.note || ""}
                            onChange={(e) =>
                              handleNoteChange(item.cartId, e.target.value)
                            }
                            className="p-2 w-full text-sm border border-pink-300 rounded-lg focus:ring-2 focus:ring-pink-400"
                          />
                          <button
                            onClick={() => handleNoteChange(item.cartId, "")}
                            className="mt-1 text-sm text-red-500 hover:underline"
                          >
                            Clear Note
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className=" bottom-0 mt-4 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 p-4 rounded-xl shadow-lg flex justify-between items-center">
              {/* Grand Total */}
              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                Grand Total: £{grandTotal.toFixed(2)}
              </h3>

              {/* Pay Now Button */}
              <button
                onClick={() => navigate("/payment")}
                className="px-6 py-2 rounded-full font-bold shadow bg-white text-pink-600 hover:bg-gray-100 cursor-pointer"
              >
                Pay Now
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
