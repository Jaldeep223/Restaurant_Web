import React, { useState, useContext } from "react";
import { CartContext } from "./CartContext";
import tiffin from "../assets/BackgroundImage/tiffin.webp";

const gujaratiTiffin = [
  {
    day: "Sunday",
    menu: "Puri, Batata Nu Shaak (Potato Curry), Dal, Bhaat (Rice), Chaas (Buttermilk), Sweet",
    extras: [
      { name: "Extra 1 Puri", price: "50p" },
      { name: "Batata Nu Shaak", price: 2 },
      { name: "Dal", price: 2 },
      { name: "Rice", price: 2 },
      { name: "Chaas", price: 1 },
      { name: "Sweet", price: 1.5 },
    ],
  },
  {
    day: "Monday",
    menu: "Rajvadi Khichdi, Salad, Roti, Chaas (Buttermilk), Papadam",
    extras: [
      { name: "Extra 1 Roti", price: "50p" },
      { name: "Khichdi", price: 2 },
      { name: "Chaas", price: 1 },
      { name: "Papadam", price: 1 },
    ],
  },
  {
    day: "Tuesday",
    menu: "Pavbhaji, Salad, Chaas (Buttermilk), Pickle",
    extras: [
      { name: "Extra Pav", price: 1 },
      { name: "Extra Bhaji", price: 2 },
      { name: "Chaas", price: 1 },
      { name: "Pickle", price: 0.5 },
    ],
  },
  {
    day: "Wednesday",
    menu: "Dal, Bhaat (Rice), Undhiyu, Roti, Papadam, Chaas (Buttermilk)",
    extras: [
      { name: "Extra 1 Roti", price: "50p" },
      { name: "Dal", price: 2 },
      { name: "Rice", price: 2 },
      { name: "Undhiyu", price: 2 },
      { name: "Papadam", price: 1 },
      { name: "Chaas", price: 1 },
    ],
  },
  {
    day: "Thursday",
    menu: "Khichdi, Kadi, Sev Tameta, Roti, Chaas (Buttermilk)",
    extras: [
      { name: "Extra 1 Roti", price: "50p" },
      { name: "Khichdi", price: 2 },
      { name: "Kadi", price: 2 },
      { name: "Sev Tameta", price: 2 },
      { name: "Chaas", price: 1 },
    ],
  },
  {
    day: "Friday",
    menu: "Dal, Bhaat (Rice), Kala Chana Nu Shaak (Black Peas Curry), Roti, Salad",
    extras: [
      { name: "Extra 1 Roti", price: "50p" },
      { name: "Dal", price: 2 },
      { name: "Rice", price: 2 },
      { name: "Kala Chana Nu Shaak", price: 2 },
    ],
  },
  {
    day: "Saturday",
    menu: "Rajasthani Dal-Bati, Pickle, Chaas (Buttermilk), Salad",
    extras: [
      { name: "Extra Dal-Bati", price: 2 },
      { name: "Chaas", price: 1 },
      { name: "Pickle", price: 0.5 },
    ],
  },
];

const Tiffin = () => {
  const todayIndex = new Date().getDay();
  const [selectedDay, setSelectedDay] = useState(null);
  const [extras, setExtras] = useState({});
  const { cart, setCart } = useContext(CartContext);

  const basePrice = 5;

  const toggleExtra = (item) => {
    setExtras((prev) => ({ ...prev, [item]: prev[item] ? prev[item] + 1 : 1 }));
  };

  const removeExtra = (item) => {
    setExtras((prev) => {
      if (!prev[item]) return prev;
      const updated = { ...prev };
      updated[item] -= 1;
      if (updated[item] <= 0) delete updated[item];
      return updated;
    });
  };

  const calculateTotal = () => {
    let total = basePrice;
    if (selectedDay) {
      for (const [item, qty] of Object.entries(extras)) {
        const extraItem = selectedDay.extras.find((e) => e.name === item);
        let price = extraItem.price;
        if (typeof price === "string" && price.includes("p")) {
          price = parseFloat(price.replace("p", "")) / 100;
        }
        total += price * qty;
      }
    }
    return total.toFixed(2);
  };

  const addToCart = () => {
    if (!selectedDay) return;
    const id = Date.now();
    setCart([
      ...cart,
      {
        id,
        name: `${selectedDay.day} Tiffin`,
        price: parseFloat(calculateTotal()),
        extras: { ...extras },
        quantity: 1,
      },
    ]);
    setSelectedDay(null);
    setExtras({});
    alert("Tiffin added to cart!");
  };

  const getPortion = (name) => {
    if (/Roti/i.test(name)) return "4 Rotis";
    if (/Dal|Curry|Shaak|Undhiyu|Khichdi|Kadi|Pavbhaji|Bhaat|Rice/i.test(name))
      return "1 Portion";
    if (/Chaas/i.test(name)) return "1 Glass";
    if (/Salad|Pickle/i.test(name)) return "Some";
    if (/Papadam|Sweet/i.test(name)) return "1 Piece";
    return "1 Portion";
  };

  const isAvailable = (index) => {
    const now = new Date();
    if (index === todayIndex && now.getHours() < 11) return true;
    if (index === (todayIndex + 1) % 7 && now.getHours() >= 12) return true;
    return false;
  };

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-75"
        style={{ backgroundImage: `url(${tiffin})` }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-orange-400 drop-shadow-md pt-8">
          Tiffin Menu - Full Week
          <span className="inline-block text-xl md:text-2xl font-bold bg-orange-500 text-white px-3 py-1 rounded-full shadow-md mt-2 animate-bounce ml-2">
            £{basePrice} only
          </span>
        </h2>

        {/* Grid: 2 items on mobile */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {gujaratiTiffin.map((item, index) => {
            const date = new Date();
            date.setDate(date.getDate() - date.getDay() + index);
            const formattedDate = date.toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
            });
            const available = isAvailable(index);

            return (
              <div
                key={item.day}
                onClick={() => available && setSelectedDay(item)}
                className={`bg-white/90 rounded-3xl cursor-pointer shadow-lg p-4 sm:p-6 h-64 flex flex-col justify-center transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-400/50 ${
                  available
                    ? "animate-pulse bg-yellow-400"
                    : "opacity-50 cursor-not-allowed"
                }`}
              >
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-4 text-center">
                  {item.day} - {formattedDate}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 text-center">
                  {item.menu}
                </p>
              </div>
            );
          })}
        </div>

        {/* Modal */}
        {selectedDay && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 overflow-auto p-4 pt-20">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md sm:max-w-lg p-4 sm:p-6 flex flex-col gap-4 relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedDay(null)}
                className="absolute top-3 right-3 text-red-500 hover:text-red-500 text-2xl sm:text-3xl font-bold "
              >
                ✖
              </button>

              <h2 className="text-xl sm:text-2xl font-bold text-orange-600 mb-4 text-center">
                {selectedDay.day} Tiffin
              </h2>

              {/* Menu Items */}
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {selectedDay.menu.split(",").map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-yellow-100 via-orange-50 to-yellow-100 shadow-md hover:scale-105 transition-transform duration-300"
                  >
                    <span className="text-xs sm:text-sm text-gray-600">
                      {getPortion(item.trim())}
                    </span>
                    <span className="text-sm sm:text-base font-semibold">
                      {item.trim()}
                    </span>
                    <span className="text-xs">🍴</span>
                  </div>
                ))}
              </div>

              {/* Extras */}
              {selectedDay.extras.length > 0 && (
                <div className="mb-4 flex flex-col gap-2">
                  <h3 className="font-semibold text-center text-sm sm:text-base">
                    Add Extras:
                  </h3>
                  {selectedDay.extras.map((extra) => {
                    const displayPrice =
                      typeof extra.price === "string" &&
                      extra.price.includes("p")
                        ? extra.price
                        : `£${extra.price}`;
                    return (
                      <div
                        key={extra.name}
                        className="flex items-center justify-between text-xs sm:text-sm"
                      >
                        <span>
                          {extra.name} ({displayPrice})
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => removeExtra(extra.name)}
                            className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400 text-xs sm:text-sm"
                          >
                            -
                          </button>
                          <span className="text-xs sm:text-sm">
                            {extras[extra.name] || 0}
                          </span>
                          <button
                            onClick={() => toggleExtra(extra.name)}
                            className="px-2 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 text-xs sm:text-sm"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Total & Add Button */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mt-2">
                <span className="font-bold text-sm sm:text-base">
                  Total: £{calculateTotal()}
                </span>
                <button
                  onClick={addToCart}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm sm:text-base w-full sm:w-auto"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tiffin;
