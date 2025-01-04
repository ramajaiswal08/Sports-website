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

const Strength: React.FC = () => {
  const products: Product[] = [
    // Domestic Strength Products
    {
      id: 1,
      name: "Domestic Strength Equipment 1",
      sku: "S001",
      price: "$199.99",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.eo8nzjRfmo3l1kH9YHNkGAHaHa&pid=Api&P=0&h=180",
      category: "Domestic Strength Products",
    },
    // Semi Commercial Strength Products
    {
      id: 2,
      name: "Semi Commercial Strength Equipment 1",
      sku: "S002",
      price: "$399.99",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.eo8nzjRfmo3l1kH9YHNkGAHaHa&pid=Api&P=0&h=180",
      category: "Semi Commercial Strength Products",
    },
    // Commercial Strength Series 1 Products
    {
      id: 3,
      name: "Commercial Strength Series 1 Equipment",
      sku: "S003",
      price: "$599.99",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.eo8nzjRfmo3l1kH9YHNkGAHaHa&pid=Api&P=0&h=180",
      category: "Commercial Strength Series 1 Products",
    },
    // Series 2 Products
    {
      id: 4,
      name: "Strength Series 2 Equipment",
      sku: "S004",
      price: "$799.99",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.eo8nzjRfmo3l1kH9YHNkGAHaHa&pid=Api&P=0&h=180",
      category: "Strength Series 2 Products",
    },
    // Series 3 Products
    {
      id: 5,
      name: "Strength Series 3 Equipment",
      sku: "S005",
      price: "$899.99",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.eo8nzjRfmo3l1kH9YHNkGAHaHa&pid=Api&P=0&h=180",
      category: "Strength Series 3 Products",
    },
    // Series 4 Products
    {
      id: 6,
      name: "Strength Series 4 Equipment",
      sku: "S006",
      price: "$999.99",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.eo8nzjRfmo3l1kH9YHNkGAHaHa&pid=Api&P=0&h=180",
      category: "Strength Series 4 Products",
    },
    // Series 5 Products
    {
      id: 7,
      name: "Strength Series 5 Equipment",
      sku: "S007",
      price: "$1299.99",
      image:
        "https://tse1.mm.bing.net/th?id=OIP.eo8nzjRfmo3l1kH9YHNkGAHaHa&pid=Api&P=0&h=180",
      category: "Strength Series 5 Products",
    },
  ];

  const categories = [
    "Domestic Strength Products",
    "Semi Commercial Strength Products",
    "Commercial Strength Series 1 Products",
    "Strength Series 2 Products",
    "Strength Series 3 Products",
    "Strength Series 4 Products",
    "Strength Series 5 Products",
  ];

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
            Strength Shop
          </h1>
          <p className="text-gray-500 text-sm text-center mt-1">
            Home / Strength
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
              <input type="range" min="100" max="1500" className="w-full" />
              <div className="text-sm text-gray-600 mt-2">
                Price: $100 - $1500
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

export default Strength;
