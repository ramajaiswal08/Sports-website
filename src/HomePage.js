import React, { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import FeaturesSection from "./components/FeatureSection";
import TestimonialsSection from "./components/TestimonialSection";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3); // Initial count

  const addToCart = () => {
    setCartCount(cartCount + 1); // Increment the cart count
  };

  return (
    <>
      {/* Navbar */}
      <footer className="bg-gray-200 py-6 text-center">
        <p className="text-gray-600 text font-bold">
          🔥 Free shipping on all orders over $50+.
        </p>
      </footer>
      <header className="flex justify-between items-center px-6 py-4 bg-gray-50">
        {/* Logo Section */}
        <h1 className="text-2xl font-bold">Aggarwal Sports</h1>

        {/* Center Links */}
        <nav className="flex-1 flex justify-center space-x-8">
          <a href="/shop" className="text-gray-600 hover:text-gray-800">
            Shop
          </a>
          <a href="/page" className="text-gray-600 hover:text-gray-800">
            Pages
          </a>
          <a href="/contact" className="text-gray-600 hover:text-gray-800">
            Contact
          </a>
        </nav>

        {/* Search, Cart, and Sign-Up */}
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
              <div className="absolute top-10 right-0 bg-white shadow-md rounded-md p-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-48"
                />
              </div>
            )}
          </div>

          {/* Cart Icon with Badge */}
          <div className="relative flex items-center space-x-4">
            <div className="relative">
              <button className="text-gray-600 hover:text-gray-800">
                <FaShoppingCart size={20} />
              </button>
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount}
              </span>
            </div>
            {/* Sign-Up Button */}
            <button className="btn text-white bg-black px-4 py-2 rounded-lg">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center px-6 py-12 lg:px-20">
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-4">
            Make the <span className="text-green-500">most</span> out of the sports
          </h2>
          <p className="text-gray-600 mb-6">What's more, we're doing it right!</p>
          <div className="space-x-4">
            {/* Shop Now Button */}
            <Link to="/NewHomePage" className="btn btn-primary">
              Shop Now
            </Link>

            {/* How We Work Button */}
            <button className="btn btn-outline">How We Work</button>
          </div>
          <div className="mt-8 flex space-x-8">
            <div>
              <p className="text-2xl font-bold">4k+</p>
              <p className="text-gray-600">Collections</p>
            </div>
            <div>
              <p className="text-2xl font-bold">9k+</p>
              <p className="text-gray-600">Items Trusted to Deliver</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1588492069485-d05b56b2831d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwb3J0cyUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Sports banner"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Brands Section */}
      <section className="bg-gray-50 py-8">
        <h3 className="text-center text-xl font-semibold mb-4">
          “We’ve got sports products in a wide variety”
        </h3>
        <div className="flex justify-center items-center space-x-8">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.B_UWLN8xhrCj-oXfrxDgpgHaFc&pid=Api&P=0&h=180"
            alt="Brand 1"
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.l4Nyx4xzMoRMNEE3PPOhiQHaEP&pid=Api&P=0&h=180"
            alt="Brand 2"
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.IzMSANEVa-XkM_J0zed8MAAAAA&pid=Api&P=0&h=180"
            alt="Brand 3"
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.4DzknpkBwKwcDQK2YXZ-HQHaFj&pid=Api&P=0&h=180"
            alt="Brand 4"
          />
        </div>
      </section>

      {/* Feature Section */}
      <section className="px-6 py-12 lg:px-20 flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
        <div className="lg:w-1/2">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.18oQmRmiv_F0v5ZUSPeUvwHaEd&pid=Api&P=0&h=180"
            alt="Aggarwal Sports Store"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-3xl font-bold mb-4">
            Free and easy way to bring your ideas to life
          </h3>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
            est ex. Etiam at ante nulla.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-20 bg-gray-100">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold">Buying sports products made easy.</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit, consectetur adipiscing elit, duis nec.
            </p>
            <ul className="list-none space-y-2">
              <li className="text-gray-800">✅ Premium quality sports products</li>
              <li className="text-gray-800">✅ Thousands of products to choose</li>
              <li className="text-gray-800">✅ Free standard shipping</li>
            </ul>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <img
              src="https://plus.unsplash.com/premium_photo-1721736016395-cbfafd871777?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
              alt="Sports Products"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Section: Our Picks For You */}
      <section className="px-6 py-12 lg:px-20">
        <h3 className="text-2xl font-bold text-center mb-8">Our picks for you</h3>
        <p className="text-center text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product Card 1 */}
          <div className="relative bg-gray-100 p-4 rounded-lg shadow">
            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
              Sold out
            </span>
            <div className="h-40 bg-black flex items-center justify-center">
              <img
                src="https://plus.unsplash.com/premium_photo-1721736016395-cbfafd871777?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
                alt="Sports Product"
                className="rounded-lg shadow-lg object-cover h-full w-full"
              />
            </div>
            <p className="mt-4 font-bold text-black">
              $27.00 <span className="line-through text-black">$50.00</span>
            </p>
          </div>

          {/* Product Card 2 */}
          <div className="relative bg-gray-100 p-4 rounded-lg shadow">
            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
              New
            </span>
            <div className="h-40 bg-black flex items-center justify-center">
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.18oQmRmiv_F0v5ZUSPeUvwHaEd&pid=Api&P=0&h=180"
                alt="Sports Product"
                className="rounded-lg shadow-lg object-cover h-full w-full"
              />
            </div>
            <p className="mt-4 font-bold text-black">$39.00</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 py-6 text-center">
        <p className="text-gray-600 text font-bold">
          🔥 Free shipping on all orders over $50+.
        </p>
      </footer>
    </>
  );
};

export default HomePage;
