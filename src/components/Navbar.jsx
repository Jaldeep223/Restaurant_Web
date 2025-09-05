
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuShoppingCart, LuMenu, LuX, LuUser, LuChevronDown } from "react-icons/lu";
import { CartContext } from "../pages/CartContext";

const Navbar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu/tiffin" },
    { name: "About", path: "/about" },
    { name: "Catering", path: "/catering" },
    { name: "Contact", path: "/contact" },
  ];

  const menuDropdown = [
    { name: "Today's Tiffin", path: "/menu/tiffin" },
    { name: "Street Food", path: "/menu/streetfood" },
    { name: "Indian Curries", path: "/menu/custommenu" },
    { name: "Drinks", path: "/menu/drinks" },
    { name: "Namkeen (Savouries)", path: "/menu/nasto" },
  ];

  const handleLinkClick = (link) => {
    setIsOpen(false);
    setMenuOpen(false);

    const homeSections = ["about", "favourite", "contact"];

    // Scroll to home page sections
    if (homeSections.includes(link)) {
      if (window.location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollToSection(link), 100);
      } else {
        scrollToSection(link);
      }
      return;
    }

    // Scroll top if clicking current page
    if (window.location.pathname === link) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Navigate to other pages
    navigate(link);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/70 shadow-md">
      <div className="font-speacial max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Mobile Menu Icon */}
        <div className="flex items-center md:hidden">
          <button className="text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <LuX /> : <LuMenu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-1 justify-center items-center space-x-6 lg:space-x-10 text-base lg:text-lg">
          {navLinks.map((link) => (
            <li key={link.name} className="relative">
              {link.name === "Menu" ? (
                <div className="group relative">
                  <div className="flex items-center gap-1 cursor-pointer px-3 py-2 rounded text-white hover:bg-orange-500 hover:text-black transition-colors">
                    <span>Menu</span>
                    <LuChevronDown className="transition-transform group-hover:rotate-180" />
                  </div>
                  <ul className="absolute top-full left-0 mt-2 bg-gray-800 rounded shadow-lg w-48 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {menuDropdown.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.path}
                          className="block px-4 py-2 text-white hover:bg-orange-500 hover:text-black transition-colors"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <button
                  onClick={() => handleLinkClick(link.path)}
                  className="px-3 py-2 rounded text-white hover:bg-orange-500 hover:text-black transition-colors"
                >
                  {link.name}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* Right Side: Profile & Cart */}
        <div className="flex items-center space-x-3 sm:space-x-4 ml-auto">
          <LuUser
            className="text-white text-xl sm:text-2xl cursor-pointer hover:text-orange-500"
            onClick={() => navigate("/login")}
          />
          <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
            <LuShoppingCart className="text-white text-xl sm:text-2xl hover:text-orange-500" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold animate-pulse">
                {totalItems}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-max-height duration-300 overflow-hidden ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <ul className="font-speacial flex flex-col bg-black/90 p-4 space-y-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.name === "Menu" ? (
                <div>
                  <button
                    className="w-full flex items-center gap-1 px-3 py-2 text-white rounded hover:bg-orange-500 hover:text-black transition-colors"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    Menu <LuChevronDown className={`${menuOpen ? "rotate-180" : ""} transition-transform`} />
                  </button>
                  {menuOpen && (
                    <ul className="pl-4 mt-2 flex flex-col space-y-1">
                      {menuDropdown.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded text-white hover:bg-orange-500 hover:text-black transition-colors"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => handleLinkClick(link.path)}
                  className="block px-3 py-2 rounded text-white hover:bg-orange-500 hover:text-black transition-colors"
                >
                  {link.name}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
