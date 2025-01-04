import React, { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import FeaturesSection from "./components/FeatureSection";
import TestimonialsSection from "./components/TestimonialSection";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const HomePage: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [cartCount, setCartCount] = useState<number>(3);
  const [menuOpen, setMenuOpen] = useState(false);

  const addToCart = () => {
    setCartCount(cartCount + 1); // Increment the cart count
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Announcement Bar */}
      <footer className="bg-gray-200 py-2 text-center text-sm">
        <p className="text-gray-600 font-bold">
          🔥 Free shipping on all orders over $50+.
        </p>
      </footer>

      {/* Navbar */}
      <header className="flex flex-wrap justify-between items-center px-4 py-3 lg:px-6 bg-gray-50">
        {/* Logo Section */}
        <h1 className="text-xl lg:text-2xl font-bold">Aggarwal Sports</h1>

        {/* Mobile Menu Button */}
        <button
          className="text-gray-600 hover:text-gray-800 md:hidden"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="absolute top-16 left-0 w-full bg-gray-50 shadow-md md:hidden">
            <ul className="flex flex-col items-center space-y-6 py-6">
              <li>
                <Link
                  to="/shop"
                  className="text-gray-600 hover:text-gray-800 text-center w-full px-4"
                  onClick={toggleMenu}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/page"
                  className="text-gray-600 hover:text-gray-800 text-center w-full px-4"
                  onClick={toggleMenu}
                >
                  Pages
                </Link>
              </li>
              <div className="flex-none">
                <ul className="menu px-1">
                  <li>
                    <details>
                      <summary className="text-gray-600 hover:text-gray-800 text-center">
                        FITNESS EQUIPMENT
                      </summary>
                      <ul className="bg-base-100 rounded-t-none p-2">
                        <li>
                          <ul className="p-2 ml-4">
                            <li>
                              <a className="text-gray-600 hover:text-gray-800">
                                INDOOR FITNESS
                              </a>
                              <ul className="p-2 ml-4">
                                <li>
                                  <Link
                                    to="/cardio"
                                    className="text-gray-600 hover:text-gray-800"
                                  >
                                    CARDIO EQUIPMENTS
                                  </Link>
                                  <Link
                                    to="/strength"
                                    className="text-gray-600 hover:text-gray-800"
                                  >
                                    STRENGTH EQUIPMENTS
                                  </Link>
                                  <Link
                                    to="/weight"
                                    className="text-gray-600 hover:text-gray-800"
                                  >
                                    WEIGHTS & BARBELLS
                                  </Link>
                                  <Link
                                    to="/accessories"
                                    className="text-gray-600 hover:text-gray-800"
                                  >
                                    ACCESSORIES
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a className="text-gray-600 hover:text-gray-800">
                                OUTDOOR FITNESS
                              </a>
                              <ul className="p-2 ml-4">
                                <li>
                                  <a
                                    href="/executive-series"
                                    className="text-gray-600 hover:text-gray-800"
                                  >
                                    EXECUTIVE SERIES
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="/premium-series"
                                    className="text-gray-600 hover:text-gray-800"
                                  >
                                    PREMIUM SERIES
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>
            </ul>
          </nav>
        )}

        {/* Desktop Menu */}
        <nav className="flex-1 hidden md:flex justify-center space-x-6 lg:space-x-10">
          <Link
            to="/shop"
            className="text-gray-600 hover:text-gray-800 text-center px-2"
          >
            Shop
          </Link>
          <Link
            to="/page"
            className="text-gray-600 hover:text-gray-800 text-center px-2"
          >
            Pages
          </Link>
          <div className="flex-none">
            <ul className="menu menu-horizontal space-x-6 lg:space-x-10">
              <li>
                <details>
                  <summary className="text-gray-600 hover:text-gray-800 text-center">
                    FITNESS EQUIPMENT
                  </summary>
                  <ul className="bg-base-100 rounded-t-none p-2">
                    <li>
                      <ul className="p-2 ml-4">
                        <li>
                          <a className="text-gray-600 hover:text-gray-800">
                            INDOOR FITNESS
                          </a>
                          <ul className="p-2 ml-4">
                            <li>
                              <Link
                                to="/cardio"
                                className="text-gray-600 hover:text-gray-800"
                              >
                                CARDIO EQUIPMENTS
                              </Link>
                              <Link
                                to="/strength"
                                className="text-gray-600 hover:text-gray-800"
                              >
                                STRENGTH EQUIPMENTS
                              </Link>
                              <Link
                                to="/weight"
                                className="text-gray-600 hover:text-gray-800"
                              >
                                WEIGHTS & BARBELLS
                              </Link>
                              <Link
                                to="/accessories"
                                className="text-gray-600 hover:text-gray-800"
                              >
                                ACCESSORIES
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="text-gray-600 hover:text-gray-800">
                            OUTDOOR FITNESS
                          </a>
                          <ul className="p-2 ml-4">
                            <li>
                              <a
                                href="/executive-series"
                                className="text-gray-600 hover:text-gray-800"
                              >
                                EXECUTIVE SERIES
                              </a>
                            </li>
                            <li>
                              <a
                                href="/premium-series"
                                className="text-gray-600 hover:text-gray-800"
                              >
                                PREMIUM SERIES
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </nav>
        <div className="flex items-center space-x-4">
          {/* Search Icon and Input */}
          <div className="relative">
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <FaSearch size={20} />
            </button>
            {searchOpen && (
              <div className="absolute top-10 right-0 bg-white shadow-md rounded-md p-2 w-48">
                <input
                  type="text"
                  placeholder="Search"
                  className="border px-4 py-2 rounded-md w-full"
                />
              </div>
            )}
          </div>

          {/* Cart Icon with Badge */}
          <div className="relative flex items-center">
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={addToCart}
            >
              <FaShoppingCart size={20} />
            </button>
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
              {cartCount}
            </span>
          </div>

          {/* Sign-Up Button */}
          <button className="bg-black text-white px-3 py-1 lg:px-4 lg:py-2 rounded-lg">
            Sign Up
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-center px-4 py-8 lg:px-16 lg:py-12 mx-auto max-w-7xl">
        <div className="lg:w-1/2 mb-6 lg:mb-0 text-center lg:text-left">
          <h2
            className="font-sans text-4xl font-bold leading-tight"
            style={{ fontFamily: "'Plus Jakarta Sans'" }}
          >
            Make the most out of the <br /> sports
          </h2>
          <p className="text-gray-600 mb-4 lg:mb-6 font-sans text-base leading-relaxed">
            What's more, we're doing it right!
          </p>
          <div className="flex justify-center lg:justify-start items-center space-x-2 lg:space-x-4">
            <Link
              to="/NewHomePage"
              className="btn bg-green-500 text-white px-4 py-2 lg:px-6 lg:py-2 rounded-md"
            >
              Shop Now
            </Link>
            <h5 className="font-sans px-4 py-2 lg:px-6 lg:py-2 rounded-md leading-tight">
              How We Work
            </h5>
          </div>
          <div className="mt-6 lg:mt-8 flex justify-center lg:justify-start space-x-6 lg:space-x-8">
            <div>
              <p className="text-xl lg:text-2xl font-bold">4k+</p>
              <p className="text-gray-600">Collections</p>
            </div>
            <div>
              <p className="text-xl lg:text-2xl font-bold">9k+</p>
              <p className="text-gray-600">Items Trusted to Deliver</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1588492069485-d05b56b2831d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwb3J0cyUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Sports banner"
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </section>

      {/* Brands Section */}
      <section className="bg-gray-50 py-6 lg:py-8">
        <h3
          className="text-center text-lg lg:text-xl font-semibold mb-4"
          style={{
            fontFamily: "'Plus Jakarta Sans'",
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "33.6px",
            textAlign: "center",
          }}
        >
          “We’ve got sports products in a wide variety”
        </h3>
        <div className="flex justify-center items-center flex-wrap gap-4 px-4">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.B_UWLN8xhrCj-oXfrxDgpgHaFc&pid=Api&P=0&h=180"
            alt="Brand 1"
            className="h-12 lg:h-16"
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.l4Nyx4xzMoRMNEE3PPOhiQHaEP&pid=Api&P=0&h=180"
            alt="Brand 2"
            className="h-12 lg:h-16"
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.IzMSANEVa-XkM_J0zed8MAAAAA&pid=Api&P=0&h=180"
            alt="Brand 3"
            className="h-12 lg:h-16"
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.4DzknpkBwKwcDQK2YXZ-HQHaFj&pid=Api&P=0&h=180"
            alt="Brand 4"
            className="h-12 lg:h-16"
          />
        </div>
      </section>

      {/* Feature Section */}
      <section className="px-4 py-8 lg:px-16 lg:py-12 flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
        <div className="lg:w-1/2">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.18oQmRmiv_F0v5ZUSPeUvwHaEd&pid=Api&P=0&h=180"
            alt="Aggarwal Sports Store"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Free and easy way to bring your ideas to life
          </h3>
          <p className="text-gray-600 mb-4 lg:mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
            est ex. Etiam at ante nulla.
          </p>
          <button className="btn  bg-green-500 text-white px-4 py-2 lg:px-6 lg:py-2 rounded-md">
            Get Started
          </button>
        </div>
      </section>

      {/* Features and Testimonials */}
      <FeaturesSection />
      <TestimonialsSection />

      {/* Footer */}
      <footer className="bg-gray-200 py-4 text-center text-sm">
        <p className="text-gray-600 font-bold">
          🔥 Free shipping on all orders over $50+.
        </p>
      </footer>
    </>
  );
};
export default HomePage;
