import React from "react";
import { motion } from "framer-motion";
import Namaste from "../assets/namaste.jpg";

const AboutUs = () => {
  return (
    <div className="w-full min-h-screen bg-white py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12 md:space-y-16">
        {/* Section Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 text-center mb-8 sm:mb-12 pt-4 sm:pt-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          ABOUT US
          <hr className="w-20 sm:w-24 md:w-32 mx-auto border-t-2 sm:border-t-4 border-orange-500 mt-4" />
        </motion.h2>

        {/* First Section: Image Left, Text Right */}
        <motion.div
          className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
        >
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 relative">
              <img
                src={Namaste}
                alt="Healthy"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left text-black space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl lg:text-2xl">
            <p>
              At Tiffin Box, we deliver healthy, hygienic, and delicious meals
              straight to your doorstep. Every dish is made with fresh
              ingredients, balancing flavor and nutrition, so you can enjoy the
              comfort of home-cooked meals anytime.
              <br /> <br />
              From hearty thalis to savory snacks, our menu is crafted to
              satisfy your taste buds while keeping health in mind, bringing
              the joy of home-style food right to your table.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
