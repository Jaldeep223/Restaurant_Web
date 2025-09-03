import React from "react";
import { motion } from "framer-motion";
import panipuri from "../assets/panipuri.jpg";
import manchurian from "../assets/manchurian.jpg";
import vadapau from "../assets/vadapau.jpg";
import pavbhaji from "../assets/pavbhaji.jpg";

const Favourite = () => {
  const cards = [
    {
      img: panipuri,
      title: "Panipuri",
      desc: "Crispy puris with tangy, spicy, and sweet water – India’s favorite street food in a modern style.",
    },
    {
      img: manchurian,
      title: "Manchurian",
      desc: "Crispy veggie balls tossed in a flavorful Indo-Chinese sauce, a spicy and savory delight.",
    },
    {
      img: vadapau,
      title: "Vada Pav",
      desc: "Mumbai’s famous street food – spicy potato vada sandwiched in a pav with chutneys.",
    },
    {
      img: pavbhaji,
      title: "Pav Bhaji",
      desc: "Butter-toasted pav served with spicy mashed vegetable curry, a true Indian comfort food.",
    },
  ];

  return (
    <div className="bg-gray-900 w-full min-h-screen px-4 sm:px-6 lg:px-12 py-12">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500">
          OUR FAVOURITE
        </h1>
        <hr className="w-32 sm:w-40 md:w-52 mx-auto border-t-4 border-white mt-4" />
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 overflow-hidden cursor-pointer rounded-2xl shadow-lg"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="w-full h-60 sm:h-64 md:h-60">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6 text-center">
              <h4 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                {card.title}
              </h4>
              <p className="text-gray-300 text-sm sm:text-base">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Favourite;
