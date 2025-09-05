
import React from "react";
import { motion } from "framer-motion";
import cateringImg from "../assets/BackgroundImage/catering.jpg";
import corporateImg from "../assets/corporate.jpg";
import mixFunction from "../assets/mix_function.jpg";
import BirthdayImg from "../assets/Birthday.jpg";

const services = [
  {
    title: "Birthday Party Catering",
    description:
      "Delicious meals and treats for birthdays of all ages, served fresh and hot.",
    image: BirthdayImg,
  },
  {
    title: "Corporate Catering",
    description:
      "Customized menus for office events, business meetings, and corporate gatherings.",
    image: corporateImg,
  },
  {
    title: "Family & Special Occasions",
    description:
      "Catering for Marriages, Baby showers, Anniversaries, and any family celebration with delicious, freshly-prepared meals.",
    image: mixFunction,
  },
];

const Catering = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="min-h-screen bg-cover bg-center relative flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${cateringImg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          className="relative z-10 text-white px-6 sm:px-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            Our Catering Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6">
            Delicious meals for events, parties, and corporate gatherings.
            <br /> We cater for up to{" "}
            <span className="font-semibold">100 people</span> per order.
          </p>
          <a href="tel:+447979830667" className="block sm:inline-block">
            <button className="w-full sm:w-auto bg-orange-500 px-6 py-3 rounded-lg hover:bg-orange-600 transition cursor-pointer">
              Call Us
            </button>
          </a>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-16 text-center px-4 bg-yellow-50">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900 drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          What We Offer
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative rounded-lg shadow-lg h-64 sm:h-72 md:h-64 flex flex-col justify-center p-6 overflow-hidden cursor-pointer transform transition duration-700 hover:scale-105"
              style={{
                backgroundImage: `url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <div className="absolute inset-0 bg-black/60 rounded-lg"></div>
              <div className="relative z-10 text-center">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white drop-shadow-md">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-white drop-shadow-md">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-yellow-50 text-center px-4">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Our Work
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <motion.img
            src="/images/catering1.jpg"
            alt="Catering 1"
            className="w-full h-56 sm:h-64 object-cover rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          />
          <motion.img
            src="/images/catering2.jpg"
            alt="Catering 2"
            className="w-full h-56 sm:h-64 object-cover rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <motion.img
            src="/images/catering3.jpg"
            alt="Catering 3"
            className="w-full h-56 sm:h-64 object-cover rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />
        </div>
      </section>
    </div>
  );
};

export default Catering;
