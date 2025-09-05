import React from "react";
import {
  LuPhone,
  LuMail,
  LuMapPin,
  LuFacebook,
  LuInstagram,
  LuTwitter,
} from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Map Section */}
        <div className="w-full h-[40vh] sm:h-[50vh] rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Tiffin Box Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.1234567890!2d-0.1234567890!3d51.432123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b2345678901%3A0xabcdef1234567890!2s13+Ebenezer+Walk%2C+SW16+5SZ%2C+London%2C+UK!5e0!3m2!1sen!2suk!4v1690000000000!5m2!1sen!2suk"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>

        {/* Info Section - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Left Column - Opening Hours */}
          <div className="flex flex-col items-center justify-center space-y-3">
            <h2 className="text-2xl font-bold text-orange-500">Opening Hours</h2>
            <ul className="text-gray-300 space-y-1">
              <li>Mon – Fri: 10:00 AM – 10:00 PM</li>
              <li>Saturday: 11:00 AM – 11:00 PM</li>
              <li>Sunday: 11:00 AM – 9:00 PM</li>
            </ul>
          </div>

          {/* Center Column - Contact Info */}
          <div className="flex flex-col items-center justify-center space-y-3 text-gray-300">
            <h2 className="text-2xl font-bold text-orange-500">Contact Us</h2>
            <p className="flex items-center gap-2">
              <LuPhone className="text-orange-500" />
              <a href="tel:07979830667" className="hover:text-white">
                0797 9830 667
              </a>
            </p>
            <p className="flex items-center gap-2">
              <LuMail className="text-orange-500" />
              <a
                href="mailto:tiffinbox223@gmail.com"
                className="hover:text-white"
              >
                tiffinity223@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <LuMapPin className="text-orange-500" />
              <span>13 Ebenezer Walk, SW16 5SZ, London, UK</span>
            </p>
          </div>

          {/* Right Column - Branding + Social Media */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <h2 className="text-2xl font-bold text-orange-500">Tiffinity</h2>
            <p className="text-gray-300">Fresh & Healthy Meals Delivered</p>
            <div className="flex gap-6 text-orange-500 mt-2">
              <a
                href="#"
                className="hover:text-white transition-colors transform hover:scale-110"
              >
                <LuFacebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors transform hover:scale-110"
              >
                <LuInstagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors transform hover:scale-110"
              >
                <LuTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center mt-12 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Tiffinity Box. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
