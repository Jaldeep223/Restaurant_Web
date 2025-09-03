import React from "react";
import { LuPhone, LuMail } from "react-icons/lu";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="bg-gray-900 min-h-screen w-full px-6 py-12 pt-20">
      {/* Two-Column Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
        {/* Left Section - Title + Info */}
        <motion.div
          className="flex flex-col justify-center space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500 text-center md:text-left mb-4">
              CONTACT US
            </h1>
            <hr className="border-t-4 border-white w-40 sm:w-52 mx-auto md:mx-0 mb-6" />

            <p className="text-gray-300 text-lg leading-relaxed text-center md:text-left">
              We'd love to hear from you! Whether you have questions, feedback,
              or just want to say hello, our team is here to help. Fill out the
              form, and we'll get back to you as soon as possible.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-white justify-center md:justify-start">
              <LuPhone className="text-orange-500 text-2xl" />
              <span className="text-lg">0797 9830 667</span>
            </div>
            <div className="flex items-center gap-3 text-white justify-center md:justify-start">
              <LuMail className="text-orange-500 text-2xl" />
              <span className="text-lg">tiffinbox223@gmail.com</span>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Form */}
        <motion.div
          className="bg-gray-800 p-8 rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <form className="space-y-6">
            <div>
              <label className="block text-white mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="text"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                id="message"
                rows="4"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
