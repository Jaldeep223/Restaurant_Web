import React from "react";
import cateringImg from "../assets/BackgroundImage/catering.jpg";
import corporateImg from "../assets/corporate.jpg";
import mixFunction from "../assets/mix_function.jpg";
import BirthdayImg from "../assets/Birthday.jpg";

const Catering = () => {
  return (
    <div className="w-full">
      {/* Hero Section with Background Image */}
      <section
        className="min-h-screen bg-cover bg-center relative flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${cateringImg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text Content */}
        <div className="relative z-10 text-white px-6 sm:px-10">
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
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 text-center px-4 bg-yellow-50">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900 drop-shadow-md">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Birthday Party Catering */}
          <div
            className="relative rounded-lg shadow-lg h-64 sm:h-72 md:h-64 flex flex-col justify-center p-6 overflow-hidden"
            style={{
              backgroundImage: `url(${BirthdayImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white drop-shadow-md">
                Birthday Party Catering
              </h3>
              <p className="text-sm sm:text-base text-white drop-shadow-md">
                Delicious meals and treats for birthdays of all ages, served
                fresh and hot.
              </p>
            </div>
          </div>

          {/* Corporate Catering */}
          <div
            className="relative rounded-lg shadow-lg h-64 sm:h-72 md:h-64 flex flex-col justify-center p-6 overflow-hidden"
            style={{
              backgroundImage: `url(${corporateImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white drop-shadow-md">
                Corporate Catering
              </h3>
              <p className="text-sm sm:text-base text-white drop-shadow-md">
                Customized menus for office events, business meetings, and
                corporate gatherings.
              </p>
            </div>
          </div>

          {/* Family & Special Occasions */}
          <div
            className="relative rounded-lg shadow-lg h-64 sm:h-72 md:h-64 flex flex-col justify-center p-6 overflow-hidden"
            style={{
              backgroundImage: `url(${mixFunction})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white drop-shadow-md">
                Family & Special Occasions
              </h3>
              <p className="text-sm sm:text-base text-white drop-shadow-md">
                Catering for Marriages, Baby showers, Anniversaries, and any
                family celebration with delicious, freshly-prepared meals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-yellow-50 text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Our Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <img
            src="/images/catering1.jpg"
            alt="Catering 1"
            className="w-full h-56 sm:h-64 object-cover rounded-lg"
          />
          <img
            src="/images/catering2.jpg"
            alt="Catering 2"
            className="w-full h-56 sm:h-64 object-cover rounded-lg"
          />
          <img
            src="/images/catering3.jpg"
            alt="Catering 3"
            className="w-full h-56 sm:h-64 object-cover rounded-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default Catering;
