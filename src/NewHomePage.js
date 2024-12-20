import React from "react";

const NewHomePage = () => {
  return (
    <>
    <div className="font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 lg:px-20 py-4 bg-gray-50 shadow-sm">
        <div className="flex items-center">
          <button className="text-sm text-gray-600">Find a Store</button>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="border border-gray-300 rounded-full px-4 py-2 text-sm w-64 focus:outline-none"
            />
            <button className="absolute right-1 bg-black text-white rounded-full px-4 py-1 text-sm">
              Search
            </button>
          </div>
          <div className="text-sm text-gray-600">
            <p>Hotline: 88787 90000</p>
            <p className="text-gray-400">Pickup your order for free</p>
          </div>
        </div>
        <div className="space-x-4 flex items-center">
          <button className="text-gray-600">🛒</button>
          <button className="text-gray-600">⭐</button>
          <button className="text-gray-600">❤️</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 lg:px-20 py-12 bg-green-100">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Let's buy some jersey</h1>
          <p className="text-gray-600 mb-6">
            The easiest way to get your custom sports jersey
          </p>
          <a href="/CustomiseJersey" className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
            Print Your Own
          </a>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
          <img
            src="https://images.pexels.com/photos/29796839/pexels-photo-29796839/free-photo-of-amateur-soccer-game-on-urban-field.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Product 1"
            className="rounded-lg shadow"
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.YxqnUoRnRrAnl9WpCdJsFAHaE8&pid=Api&P=0&h=180"
            alt="Product 2"
            className="rounded-lg shadow"
          />
          <img
            src="https://images.pexels.com/photos/16013682/pexels-photo-16013682/free-photo-of-shopla.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Product 3"
            className="rounded-lg shadow"
          />
          <img
            src="https://images.pexels.com/photos/6076019/pexels-photo-6076019.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Product 4"
            className="rounded-lg shadow"
          />
          <img
            src="https://images.pexels.com/photos/9956300/pexels-photo-9956300.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Product 5"
            className="rounded-lg shadow"
          />
        </div>
      </section>

      {/* Categories Section */}
      <section className="px-6 lg:px-20 py-12">
        <h2 className="text-2xl font-bold text-center mb-6">Shopping by Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          <div>
            <div className="rounded-full w-24 h-24 mx-auto bg-red-300 flex items-center justify-center">
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.8dtaIpDCfCKunryuAQjrFwAAAA&pid=Api&P=0&h=180"
                alt="Category 1"
                className="rounded-full"
              />
            </div>
            <p className="mt-2 text-gray-700 font-medium">Jersey</p>
            <p className="text-gray-400 text-sm">15 items</p>
          </div>
          <div>
            <div className="rounded-full w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-orange-300 flex items-center justify-center">
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.9M5OseA8j4Hib3u5uzAQXAHaGy&pid=Api&P=0&h=180"
                alt="Category 2"
                className="rounded-full"
              />
            </div>
            <p className="mt-2 text-gray-700 font-medium">Balls</p>
            <p className="text-gray-400 text-sm">8 items</p>
          </div>
          <div>
            <div className="rounded-full w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-black flex items-center justify-center">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.BDJ_v2X0xHUdXFou87kdKwHaE8&pid=Api&P=0&h=180"
                alt="Category 3"
                className="rounded-full"
              />
            </div>
            <p className="mt-2 text-gray-700 font-medium">Nets</p>
            <p className="text-gray-400 text-sm">9 items</p>
          </div>
          <div>
            <div className="rounded-full w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-red-300 flex items-center justify-center">
              <img
                src="https://tse3.mm.bing.net/th?id=OIP.V_vBkIXzIjooCBXsLNsdgQHaFj&pid=Api&P=0&h=180"
                alt="Category 4"
                className="rounded-full"
              />
            </div>
            <p className="mt-2 text-gray-700 font-medium">Tennis</p>
            <p className="text-gray-400 text-sm">6 items</p>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-between mb-8 px-4 sm:px-6 lg:px-20">
        <div className="space-x-6">
          <button className="text-lg font-bold border-b-2 border-black">
            New Arrivals
          </button>
          <button className="text-lg text-gray-500">Best Seller</button>
          <button className="text-lg text-gray-500">Sale</button>
        </div>
        <button className="text-sm text-green-500 hover:underline">View All</button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-20">
        {/* Product Card */}
        <div className="relative bg-gray-100 p-4 rounded-lg shadow hover:scale-105 transition-transform">
          <img
            src="https://via.placeholder.com/150"
            alt="Product 1"
            className="rounded-lg mb-4"
          />
          <p className="text-gray-700">Ball</p>
          <p className="text-black font-bold">$7.95 - $15.95</p>
        </div>

        <div className="relative bg-gray-100 p-4 rounded-lg shadow hover:scale-105 transition-transform">
          <img
            src="https://via.placeholder.com/150"
            alt="Product 2"
            className="rounded-lg mb-4"
          />
          <p className="text-gray-700">Basketball</p>
          <p className="text-black font-bold">$14.95 - $19.95</p>
        </div>

        <div className="relative bg-gray-100 p-4 rounded-lg shadow hover:scale-105 transition-transform">
          <img
            src="https://via.placeholder.com/150"
            alt="Product 3"
            className="rounded-lg mb-4"
          />
          <p className="text-gray-700">Jersey</p>
          <p className="text-black font-bold">$26.00</p>
        </div>

        <div className="relative bg-gray-100 p-4 rounded-lg shadow hover:scale-105 transition-transform">
          <img
            src="https://via.placeholder.com/150"
            alt="Product 4"
            className="rounded-lg mb-4"
          />
          <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
            25% Off
          </span>
          <p className="text-gray-700">Badminton</p>
          <p className="text-black font-bold">$20.00 <span className="line-through text-gray-500">$25.00</span></p>
        </div>
      </div>

      {/* Section Divider */}
      <div className="mt-12 mb-8 border-t border-gray-300"></div>

      {/* Custom Design Section */}
      <div className="bg-purple-50 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          How to design and order custom jerseys
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-500 text-2xl font-bold">1</span>
            </div>
            <p className="mt-4 text-gray-700">Choose from 412 custom products in our catalog.</p>
          </div>
          {/* Step 2 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-500 text-2xl font-bold">2</span>
            </div>
            <p className="mt-4 text-gray-700">Customize your design with graphics, text, or your own designs.</p>
          </div>
          {/* Step 3 */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-500 text-2xl font-bold">3</span>
            </div>
            <p className="mt-4 text-gray-700">Get your order sent to your door with free standard shipping.</p>
          </div>
        </div>
      </div>
    </div>
 
      <section className="bg-purple-100 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            How to design and order custom jerseys
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="space-y-4 text-left">
              <div className="flex items-start">
                <span className="w-4 h-4 bg-green-500 rounded-full mt-1 mr-2"></span>
                <p>Choose from a variety of customization options.</p>
              </div>
              <div className="flex items-start">
                <span className="w-4 h-4 bg-green-500 rounded-full mt-1 mr-2"></span>
                <p>Customize your design with ease.</p>
              </div>
              <div className="flex items-start">
                <span className="w-4 h-4 bg-green-500 rounded-full mt-1 mr-2"></span>
                <p>Place your order and receive it promptly.</p>
              </div>
            </div>
            <img
              src="https://images.pexels.com/photos/16401222/pexels-photo-16401222/free-photo-of-man-gesturing-on-corridor.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Design preview"
              className="w-72 h-auto"
            />
          </div>
        </div>
      </section>

      {/* Free Design Templates */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-xl font-semibold mb-6">Free design templates</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { id: 1, title: "Astronaut", image: "https://images.pexels.com/photos/26561318/pexels-photo-26561318/free-photo-of-back-view-of-woman-wearing-black-shirt-with-writings-on-back-sitting-in-front-of-white-modern-car.jpeg?auto=compress&cs=tinysrgb&w=600" },
              { id: 2, title: "Sports", image: "https://images.pexels.com/photos/9412926/pexels-photo-9412926.png?auto=compress&cs=tinysrgb&w=600" },
              { id: 3, title: "Fortnite", image: "https://images.pexels.com/photos/27078901/pexels-photo-27078901/free-photo-of-model-in-a-printed-beige-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=600" },
              { id: 4, title: "+28 More", image: "https://images.pexels.com/photos/29547864/pexels-photo-29547864/free-photo-of-tattoo-artist-in-studio-working-on-designs.jpeg?auto=compress&cs=tinysrgb&w=600" },
            ].map((template) => (
              <div key={template.id} className="text-center">
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <p className="mt-2">{template.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App and Testimonials */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Download App */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-lg font-semibold mb-4">Download our app</h4>
            <img
              src="https://via.placeholder.com/200"
              alt="App download"
              className="w-40 h-auto mb-4"
            />
            <div className="flex space-x-4">
              <button className="bg-gray-800 text-white px-4 py-2 rounded-md">
                Google Play
              </button>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-md">
                App Store
              </button>
            </div>
          </div>
          {/* Testimonials */}
          <div className="flex flex-col items-center bg-green-100 text-center">
            <h4 className="text-lg font-semibold text-center mb-4">Testimonials</h4>
            <p className="italic">"Best solution for designers!"</p>
            <span className="mt-2 text-gray-500">- John D.</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-4 text-gray-600">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
            <div>
              <h3 className="font-semibold mb-4">Information</h3>
              <ul>
                <li className="mb-2">About Us</li>
                <li className="mb-2">Contact</li>
                <li className="mb-2">Privacy Policy</li>
              </ul>
            </div>
            <div>
              <a href="/Services">
                <h3 className="font-semibold mb-4">Services</h3>
              </a>
              <ul>
                <li className="mb-2">Customization</li>
                <li className="mb-2">Shipping</li>
                <li className="mb-2">Returns</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Useful Links</h3>
              <ul>
                <li className="mb-2">FAQs</li>
                <li className="mb-2">Terms & Conditions</li>
                <li className="mb-2">Site Map</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Newsletter</h3>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border px-4 py-2 rounded-lg mb-4"
              />
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg w-full hover:bg-green-600">
                Subscribe
              </button>
            </div>
          </div>
          <p className="text-center text-sm">&copy; 2024 All rights reserved</p>
        </div>
      </footer>
   </>
  );
};

export default NewHomePage;
