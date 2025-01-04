import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  sku: string;
  price: string;
  image: string;
  category: string;
}

const Premium: React.FC = () => {
  const products: Product[] = [
    // Premium Products
    {
      id: 1,
      name: "Premium Executive Chair",
      sku: "P001",
      price: "$799.99",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.9XYWcmH8xlO9lkllleT6hQHaHa&pid=Api&P=0&h=180",
      category: "Premium Products",
    },
    {
      id: 2,
      name: "Premium Office Desk",
      sku: "P002",
      price: "$999.99",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.9XYWcmH8xlO9lkllleT6hQHaHa&pid=Api&P=0&h=180",
      category: "Premium Products",
    },
    {
      id: 3,
      name: "Luxury Leather Chair",
      sku: "P003",
      price: "$1,199.99",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.9XYWcmH8xlO9lkllleT6hQHaHa&pid=Api&P=0&h=180",
      category: "Premium Products",
    },
    {
      id: 4,
      name: "Luxury Office Table",
      sku: "P004",
      price: "$1,499.99",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.9XYWcmH8xlO9lkllleT6hQHaHa&pid=Api&P=0&h=180",
      category: "Premium Products",
    },
    {
      id: 5,
      name: "Premium Leather Organizer",
      sku: "P005",
      price: "$299.99",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.9XYWcmH8xlO9lkllleT6hQHaHa&pid=Api&P=0&h=180",
      category: "Premium Products",
    },
  ];

  const categories = ["Premium Products"];

  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Premium Products Shop
          </h1>
          <p className="text-gray-500 text-sm text-center mt-1">
            Home / Premium Products
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-1/4 bg-white shadow-sm p-6 rounded-lg">
            {/* Categories Filter */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Categories
              </h2>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => handleCategoryChange(category)}
                      className="text-gray-600 hover:text-blue-500"
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Filter by Price
              </h2>
              <input type="range" min="50" max="5000" className="w-full" />
              <div className="text-sm text-gray-600 mt-2">
                Price: $50 - $5000
              </div>
            </div>

            {/* Brands Filter */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Filter by Brands
              </h2>
              <input
                type="text"
                placeholder="Enter brand"
                className="w-full border border-gray-300 rounded-lg py-2 px-4 text-sm focus:ring focus:ring-gray-300"
              />
            </div>

            {/* Hot Selling Filter */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Filter by Hot Selling
              </h2>
              <label className="text-gray-600 flex items-center">
                <input type="checkbox" className="mr-2" /> Show Hot Selling
              </label>
            </div>
          </aside>

          {/* Product Grid */}
          <section className="lg:w-3/4">
            {/* Sorting */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-gray-600 text-sm">
                  Showing{" "}
                  {selectedCategory
                    ? `1–12 of 12 ${selectedCategory}`
                    : "all products"}
                </p>
              </div>
            </div>

            {/* Product Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products
                .filter((product) =>
                  selectedCategory
                    ? product.category === selectedCategory
                    : true
                )
                .map((product) => (
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
                      <p className="text-gray-500 text-sm">
                        SKU: {product.sku}
                      </p>
                      <p className="text-black font-bold mt-2">
                        {product.price}
                      </p>
                    </div>
                  </Link>
                ))}
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

export default Premium;
