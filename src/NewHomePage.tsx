import React from "react";

const NewHomePage: React.FC = () => {
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
            <a
              href="/CustomiseJersey"
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
            >
              Print Your Own
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              "https://images.pexels.com/photos/29796839/pexels-photo-29796839/free-photo-of-amateur-soccer-game-on-urban-field.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://tse3.mm.bing.net/th?id=OIP.YxqnUoRnRrAnl9WpCdJsFAHaE8&pid=Api&P=0&h=180",
              "https://images.pexels.com/photos/16013682/pexels-photo-16013682/free-photo-of-shopla.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/6076019/pexels-photo-6076019.jpeg?auto=compress&cs=tinysrgb&w=600",
              "https://images.pexels.com/photos/9956300/pexels-photo-9956300.jpeg?auto=compress&cs=tinysrgb&w=600",
            ].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Product ${index + 1}`}
                className="rounded-lg shadow"
              />
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="px-6 lg:px-20 py-12">
          <h2 className="text-2xl font-bold text-center mb-6">
            Shopping by Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              {
                title: "Jersey",
                count: "15 items",
                src: "https://tse4.mm.bing.net/th?id=OIP.8dtaIpDCfCKunryuAQjrFwAAAA&pid=Api&P=0&h=180",
              },
              {
                title: "Balls",
                count: "8 items",
                src: "https://tse3.mm.bing.net/th?id=OIP.9M5OseA8j4Hib3u5uzAQXAHaGy&pid=Api&P=0&h=180",
              },
              {
                title: "Nets",
                count: "9 items",
                src: "https://tse1.mm.bing.net/th?id=OIP.BDJ_v2X0xHUdXFou87kdKwHaE8&pid=Api&P=0&h=180",
              },
              {
                title: "Tennis",
                count: "6 items",
                src: "https://tse3.mm.bing.net/th?id=OIP.V_vBkIXzIjooCBXsLNsdgQHaFj&pid=Api&P=0&h=180",
              },
            ].map((category, index) => (
              <div key={index}>
                <div className="rounded-full w-20 h-20 sm:w-24 sm:h-24 mx-auto flex items-center justify-center">
                  <img
                    src={category.src}
                    alt={category.title}
                    className="rounded-full"
                  />
                </div>
                <p className="mt-2 text-gray-700 font-medium">
                  {category.title}
                </p>
                <p className="text-gray-400 text-sm">{category.count}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-20">
          {[
            { title: "Ball", price: "$7.95 - $15.95" },
            { title: "Basketball", price: "$14.95 - $19.95" },
            { title: "Jersey", price: "$26.00" },
            { title: "Badminton", price: "$20.00", discount: "$25.00" },
          ].map((product, index) => (
            <div
              key={index}
              className="relative bg-gray-100 p-4 rounded-lg shadow hover:scale-105 transition-transform"
            >
              <img
                src="https://via.placeholder.com/150"
                alt={product.title}
                className="rounded-lg mb-4"
              />
              {product.discount && (
                <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  25% Off
                </span>
              )}
              <p className="text-gray-700">{product.title}</p>
              <p className="text-black font-bold">
                {product.price}{" "}
                {product.discount && (
                  <span className="line-through text-gray-500">
                    {product.discount}
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="bg-gray-100 py-10">
          <div className="max-w-6xl mx-auto px-4 text-gray-600">
            <p className="text-center text-sm">
              &copy; 2024 All rights reserved
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default NewHomePage;
