import React, { useState } from "react";

const CustomiseJersey: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<number | null>(null);
  const [deliveryDate, setDeliveryDate] = useState<string>("");

  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="bg-gray-100 text-center py-8 md:py-12">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Let's configure your own printed jersey
        </h1>
        <p className="text-gray-600 mb-6">
          The easiest way to get your dream jersey printed!
        </p>
        <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600">
          Start Now
        </button>
      </header>

      {/* Main Configuration Section */}
      <main className="max-w-6xl mx-auto py-8 md:py-12 px-6 md:px-10">
        {/* Step 1: Upload Design */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-center">Step 1</h2>
          <div className="flex justify-center items-center border-dashed border-2 border-gray-300 rounded-lg p-6">
            <label
              htmlFor="file-upload"
              className="text-green-500 cursor-pointer hover:underline"
            >
              Drop or Upload Your Design
            </label>
            <input type="file" id="file-upload" className="hidden" />
          </div>
        </div>

        {/* Step 2: Choose Your Color */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-center">Step 2</h2>
          <p className="text-center mb-6">Choose your Color</p>
          <div className="flex justify-center space-x-4">
            {["black", "red", "blue", "green", "yellow"].map((color) => (
              <div
                key={color}
                className={`w-10 h-10 rounded-full cursor-pointer border ${
                  selectedColor === color ? "ring-4 ring-green-500" : ""
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              ></div>
            ))}
          </div>
        </div>

        {/* Step 3: Choose Your Size */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-center">Step 3</h2>
          <p className="text-center mb-6">Choose your Size</p>
          <div className="flex justify-center space-x-4">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <button
                key={size}
                className={`px-4 py-2 border rounded-lg ${
                  selectedSize === size
                    ? "bg-green-500 text-white"
                    : "bg-white text-gray-700"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Step 4: Choose Your Material */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-center">Step 4</h2>
          <p className="text-center mb-6">Choose your Material</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                id: 1,
                name: "Polyster",
                image:
                  "https://images.pexels.com/photos/701771/pexels-photo-701771.jpeg?auto=compress&cs=tinysrgb&w=600",
              },
              {
                id: 2,
                name: "Rayon",
                image:
                  "https://images.pexels.com/photos/3586020/pexels-photo-3586020.jpeg?auto=compress&cs=tinysrgb&w=600",
              },
              {
                id: 3,
                name: "Synthetic",
                image:
                  "https://images.pexels.com/photos/18596239/pexels-photo-18596239/free-photo-of-a-woman-in-a-t-shirt-with-the-words-push-it-on-it.jpeg?auto=compress&cs=tinysrgb&w=600",
              },
              {
                id: 4,
                name: "Cotton",
                image:
                  "https://images.pexels.com/photos/7029344/pexels-photo-7029344.jpeg?auto=compress&cs=tinysrgb&w=600",
              },
            ].map((material) => (
              <div
                key={material.id}
                className={`p-4 border rounded-lg text-center cursor-pointer ${
                  selectedMaterial === material.id
                    ? "ring-4 ring-green-500"
                    : "hover:shadow-md"
                }`}
                onClick={() => setSelectedMaterial(material.id)}
              >
                <img
                  src={material.image}
                  alt={material.name}
                  className="w-full h-24 object-cover rounded-lg mb-2"
                />
                <p className="text-sm">{material.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Step 5: Choose Delivery */}
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-center">Step 5</h2>
          <p className="text-center mb-6">Choose your Delivery</p>
          <div className="flex justify-center">
            <input
              type="date"
              className="border px-4 py-2 rounded-lg"
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
            />
          </div>
        </div>

        {/* Price and Submit */}
        <div className="text-center">
          <p className="text-lg font-semibold mb-4">
            $27.00 <span className="text-gray-500">+$5.00 delivery</span>
          </p>
          <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600">
            Checkout
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-6 text-gray-600">
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
    </div>
  );
};

export default CustomiseJersey;
