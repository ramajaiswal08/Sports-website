import React, { useState } from "react";

// Define types for the product and cart item
interface ProductType {
  id: number;
  name: string;
  price: string;
}

interface CartItem {
  id: number;
  name: string;
  price: string;
}

const Product: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Description");
  const [cart, setCart] = useState<CartItem[]>([]); // Store products in the cart
  const [showPopup, setShowPopup] = useState<boolean>(false);

  // Sample product to add to cart
  const product: ProductType = {
    id: 1,
    name: "Sports Shoes",
    price: "$40.00",
  };

  const addToCart = () => {
    setCart([...cart, product]); // Add the product to the cart
    setShowPopup(true); // Show the popup when a product is added
  };

  // Function to close the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Description":
        return (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            vehicula sapien vitae velit posuere, id sodales justo ornare.
            Suspendisse potenti.
          </p>
        );
      case "Additional Information":
        return (
          <p>
            Here you will find more details about the product, including
            dimensions, materials, and other specifications.
          </p>
        );
      case "Reviews (0)":
        return <p>No reviews yet. Be the first to review this product!</p>;
      case "More Products":
        return <p>Explore our wide range of products for every occasion.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Left Section: Image Gallery */}
          <div className="lg:w-1/2">
            <div className="mb-4">
              <img
                src="https://images.pexels.com/photos/2887775/pexels-photo-2887775.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Product"
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="flex space-x-2">
              {Array(4)
                .fill(0)
                .map((_, index) => (
                  <img
                    key={index}
                    src="https://via.placeholder.com/100"
                    alt={`Thumbnail ${index + 1}`}
                    className="w-20 h-20 rounded-lg cursor-pointer border border-gray-200"
                  />
                ))}
            </div>
          </div>

          {/* Right Section: Product Details */}
          <div className="lg:w-1/2">
            <div className="space-y-4">
              {/* Title & Price */}
              <div>
                <h1 className="text-2xl font-bold">
                  Pullover Hoodie Sweatshirt
                </h1>
                <p className="text-gray-500 text-sm mt-2">
                  SKU: N/A | Category: Hoodie
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-xl font-semibold text-green-600">$27.00</p>
                <p className="text-sm line-through text-gray-500">$34.00</p>
              </div>

              {/* Product Options */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Product Options
                </h3>
                <div className="flex space-x-4 items-center">
                  {["White", "Black", "Yellow"].map((color, index) => (
                    <button
                      key={index}
                      className={`w-8 h-8 rounded-full border ${
                        index === 0 ? "border-gray-800" : "border-gray-300"
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                    ></button>
                  ))}
                </div>
              </div>

              {/* Size Options */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Size</h3>
                <div className="flex space-x-2">
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      className="px-4 py-2 border rounded-lg text-sm font-medium hover:bg-gray-100"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Material</h3>
                <div className="flex space-x-2">
                  {["100% Cotton", "Polyester"].map((material, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 border rounded-lg text-sm font-medium"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              {/* Delivery */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Delivery</h3>
                <select className="w-full border rounded-lg px-4 py-2 text-sm">
                  <option>1-3 Business Days</option>
                  <option>3-5 Business Days</option>
                  <option>5-10 Business Days</option>
                </select>
              </div>

              {/* Add to Cart */}
              <div>
                <button
                  onClick={addToCart}
                  className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700"
                >
                  Add to Cart
                </button>
              </div>

              {/* Popup Modal */}
              {showPopup && (
                <div
                  className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50"
                  onClick={closePopup}
                >
                  <div
                    className="bg-white p-6 rounded-lg w-1/3"
                    onClick={(e) => e.stopPropagation()} // Prevent closing the popup when clicking inside
                  >
                    <h2 className="text-xl font-bold mb-4">Products in Cart</h2>
                    <ul>
                      {cart.map((item, index) => (
                        <li key={index} className="mb-2">
                          <p className="font-medium">{item.name}</p>
                          <p className="text-gray-600">{item.price}</p>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={closePopup}
                      className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-10 bg-white shadow-md rounded-lg">
          <div className="flex border-b">
            {[
              "Description",
              "Additional Information",
              "Reviews (0)",
              "More Products",
            ].map((tab) => (
              <button
                key={tab}
                className={`flex-1 py-3 text-center font-medium hover:bg-gray-50 ${
                  activeTab === tab
                    ? "border-b-2 border-green-600 text-green-600"
                    : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="p-6 text-gray-600">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
