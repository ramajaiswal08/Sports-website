import React from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  sku: string;
  price: string;
  image: string;
}

const Shop: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Red Ball",
      sku: "12345",
      price: "$12.95 - $15.95",
      image:
        "https://images.pexels.com/photos/2671953/pexels-photo-2671953.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "Orange Ball",
      sku: "12346",
      price: "$14.99 - $18.99",
      image:
        "https://images.pexels.com/photos/29803795/pexels-photo-29803795/free-photo-of-indoor-soccer-ball-on-glossy-floor.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Black Ball",
      sku: "12347",
      price: "$10.50 - $13.50",
      image:
        "https://images.pexels.com/photos/8817543/pexels-photo-8817543.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 4,
      name: "White Ball",
      sku: "12348",
      price: "$9.99 - $12.99",
      image:
        "https://images.pexels.com/photos/6256759/pexels-photo-6256759.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 5,
      name: "Green Ball",
      sku: "12349",
      price: "$11.99 - $14.99",
      image:
        "https://images.pexels.com/photos/1661950/pexels-photo-1661950.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 6,
      name: "Purple Ball",
      sku: "12350",
      price: "$13.00 - $16.00",
      image:
        "https://images.pexels.com/photos/262369/pexels-photo-262369.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 7,
      name: "Yellow Ball",
      sku: "12351",
      price: "$12.00 - $15.00",
      image:
        "https://images.pexels.com/photos/6180408/pexels-photo-6180408.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 8,
      name: "Blue Ball",
      sku: "12352",
      price: "$14.00 - $17.00",
      image:
        "https://images.pexels.com/photos/22931878/pexels-photo-22931878/free-photo-of-net-shadow-over-tennis-balls.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-800 text-center">Shop</h1>
          <p className="text-gray-500 text-sm text-center mt-1">Home / Shop</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-1/4 bg-white shadow-sm p-6 rounded-lg">
            {/* Search */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Search
              </h2>
              <input
                type="text"
                placeholder="Search..."
                className="w-full border border-gray-300 rounded-lg py-2 px-4 text-sm focus:ring focus:ring-gray-300"
              />
            </div>

            {/* Product Categories */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Product Categories
              </h2>
              <ul className="space-y-2">
                {[
                  "ball",
                  "chess",
                  "tennis",
                  "bandmiton",
                  "jersey",
                  "shoes",
                ].map((category) => (
                  <li key={category}>
                    <label className="text-gray-600 flex items-center">
                      <input type="checkbox" className="mr-2" /> {category}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Filter by Price
              </h2>
              <input type="range" min="10" max="100" className="w-full" />
              <div className="text-sm text-gray-600 mt-2">
                Price: $10 - $100
              </div>
            </div>

            {/* Color */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Filter by Color
              </h2>
              <div className="flex gap-2">
                {["red", "green", "blue", "orange", "black"].map((color) => (
                  <span
                    key={color}
                    className={`w-6 h-6 rounded-full bg-${color}-500 border border-gray-300 cursor-pointer`}
                  ></span>
                ))}
              </div>
            </div>

            {/* Other Filters */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Filter by Size
              </h2>
              <ul className="space-y-2">
                {["S", "M", "L", "XL"].map((size) => (
                  <li key={size}>
                    <label className="text-gray-600 flex items-center">
                      <input type="checkbox" className="mr-2" /> {size}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product Grid */}
          <section className="lg:w-3/4">
            {/* Sorting */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-gray-600 text-sm">
                  Showing 1–12 of 20 results
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <select className="border border-gray-300 rounded-lg py-2 px-4 text-sm">
                  <option value="default">Sort by Default</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                </select>
                <div className="flex space-x-2">
                  <button className="border border-gray-300 rounded p-2">
                    🔳
                  </button>
                  <button className="border border-gray-300 rounded p-2">
                    🔲
                  </button>
                </div>
              </div>
            </div>

            {/* Product Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id}>
                  <div className="bg-white shadow-sm rounded-lg p-4 text-center cursor-pointer hover:shadow-lg transition-shadow duration-200">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-gray-700 font-medium">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm">SKU: {product.sku}</p>
                    <p className="text-black font-bold mt-2">{product.price}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex justify-center items-center space-x-2">
              <button className="px-4 py-2 bg-gray-200 rounded-lg text-gray-600">
                1
              </button>
              <button className="px-4 py-2 bg-gray-100 rounded-lg text-gray-600">
                2
              </button>
              <button className="px-4 py-2 bg-gray-100 rounded-lg text-gray-600">
                →
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Shop;
