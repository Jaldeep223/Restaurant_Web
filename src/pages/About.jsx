import React, { useState } from "react";
import { motion } from "framer-motion";
import About_1 from "../assets/About/about-1.jpg";
import About_2 from "../assets/About/about-2.jpg";
import About_3 from "../assets/About/about-3.jpg";
import About_4 from "../assets/About/about-4.jpg";
import About_5 from "../assets/About/about-5.jpg";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const paragraphs = [
    {
      text: "At Tiffin Box, we are passionate about delivering health, hygiene, and happiness through every meal. Founded in 2025, our startup was born from a simple yet powerful idea: everyone deserves access to wholesome, nutritious food without compromising on taste.",
      img: About_1,
    },
    {
      text: "Our goal is to provide fresh, hygienically prepared meals straight to your doorstep. Each dish is made using high-quality ingredients, balancing flavor and nutrition to ensure every bite delights your taste buds while nourishing your body.",
      img: About_2,
    },
    {
      text: "From hearty Gujarati thalis and Punjabi curries to street food favorites and refreshing drinks, our menu is crafted to cater to every craving. We combine traditional recipes with modern preparation standards, ensuring that every meal is not just tasty, but also safe, hygienic, and fulfilling.",
      img: About_3,
    },
    {
      text: "Hygiene and quality are at the heart of everything we do. Our kitchens follow strict cleanliness protocols, and our chefs take pride in preparing meals with utmost care and attention. Every ingredient is carefully sourced, and every recipe is made with love.",
      img: About_4,
    },
    {
      text: "Since our inception in 2025, Tiffin Box has been committed to making healthy eating simple and convenient. We aim to inspire a culture where people choose nutritious, home-style meals over fast food.",
      img: About_5,
    },
  ];

  const renderParagraph = (para, index, reverseOnOdd = false) => (
    <motion.div
      key={index}
      className={`flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12 ${
        reverseOnOdd && index % 2 !== 0 ? "md:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full md:w-1/2 flex justify-center md:justify-start overflow-hidden rounded-xl">
        <img
          src={para.img}
          alt={`Para ${index + 1}`}
          className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left text-gray-800 space-y-4 sm:space-y-6 text-base sm:text-lg md:text-lg lg:text-xl">
        <p>{para.text}</p>
      </div>
    </motion.div>
  );

  return (
    <div className="w-full min-h-screen bg-white py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14 md:space-y-16 pt-8 sm:pt-16">
        {/* Section Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-speacial text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 mb-4">
            ABOUT US
          </h2>
          <hr className="w-20 sm:w-24 md:w-32 mx-auto border-t-4 border-orange-500" />
        </motion.div>

        {/* Always visible paragraphs */}
        {paragraphs.slice(0, 2).map((para, index) => renderParagraph(para, index, true))}

        {/* Hidden paragraphs */}
        {showMore &&
          paragraphs.slice(2).map((para, index) => renderParagraph(para, index + 2, true))}

        {/* See More / See Less Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <button
            className="px-6 py-3 bg-orange-500 text-white rounded-lg cursor-pointer font-semibold shadow-lg hover:bg-orange-600 transition-colors duration-300"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "See Less" : "See More"}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
