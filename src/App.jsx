import React, { useRef } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import BackgroundImg from "./components/BackgroundImg";
import AboutUs from "./components/AboutUs";
import Catering from "./pages/Catering";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Tiffin from "./pages/Tiffin";
import StreetFood from "./pages/StreetFood";
import Drinks from "./pages/Drinks";
import CustomMenu from "./pages/CustomMenu";
import Nasto from "./pages/Nasto";
import About from "./pages/About";
import LoginPage from "./pages/LoginPage";
import Cart from "./pages/Cart";
import RegisterPage from "./pages/RegisterPage";
import PaymentPage from "./pages/PaymentPage";
import OrderNow from "./pages/OrderNow";

import { CartProvider } from "./pages/CartContext";

function App() {
  const aboutRef = useRef(null);
  const cateringRef = useRef(null);
  const contactRef = useRef(null);

  const location = useLocation(); // detect current route

  const scrollToSection = (section) => {
    const refs = { about: aboutRef, catering: cateringRef, contact: contactRef };
    if (refs[section]?.current) {
      refs[section].current.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <CartProvider>
      <ScrollToTop />
      <Navbar scrollToSection={scrollToSection} />

      <div className="flex flex-col min-h-screen w-full overflow-hidden">
        <div className="flex-grow w-full overflow-hidden">
          <Routes>
            {/* Redirect alternative home paths */}
            <Route path="/Restaurant_Web" element={<Navigate to="/" replace />} />

            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <BackgroundImg />
                  <div ref={aboutRef} className="w-full overflow-hidden">
                    <AboutUs />
                  </div>
                  <div ref={cateringRef} className="w-full overflow-hidden">
                    <Catering />
                  </div>
                  <div ref={contactRef} className="w-full overflow-hidden">
                    <ContactUs />
                  </div>
                </>
              }
            />

            {/* Other Pages */}
            <Route path="/menu/tiffin" element={<Tiffin />} />
            <Route path="/menu/streetfood" element={<StreetFood />} />
            <Route path="/menu/custommenu" element={<CustomMenu />} />
            <Route path="/menu/drinks" element={<Drinks />} />
            <Route path="/menu/nasto" element={<Nasto />} />
            <Route path="/about" element={<About />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<LoginPage />} />
            
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/order-now/*" element={<OrderNow />} />
          </Routes>
        </div>

        {/* Footer only visible on Home */}
        {location.pathname === "/" && <Footer />}
      </div>
    </CartProvider>
  );
}

export default App;
