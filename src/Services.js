
import React, { useState } from "react";

const Services: React.FC = () => {
  const services = [
    { icon: "🔧", title: "Fast Delivery", description: "Reliable service in no time" },
    { icon: "🎨", title: "Creative Design", description: "Unique and modern design" },
    { icon: "💻", title: "Technical Support", description: "24/7 support for your needs" },
  ];
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };


  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-grow bg-white py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-semibold mb-4">Fast and Quality Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4 p-6 border rounded-lg shadow-sm"
              >
                <div className="text-3xl">{service.icon}</div>
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>


      <div className="font-sans bg-gray-50 text-gray-800 min-h-screen flex flex-col justify-center items-center">
      {/* Header */}
      <header className="bg-white py-10 text-center w-full">
        <div className="flex justify-center items-center space-x-2">
          <span className="text-green-500 text-lg">⚡</span>
          <p className="text-sm font-semibold text-gray-600">FAST AND QUALITY SERVICE</p>
        </div>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold">
          Print shirts for yourself or your online business
        </h1>
      </header>

      {/* Content Section */}
      <section className="py-12 bg-gray-100 w-full flex justify-center">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
          {/* Image Section */}
          <div className="w-full md:w-1/2 p-4 flex justify-center">
            <img
              src="https://images.pexels.com/photos/11819666/pexels-photo-11819666.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Team working"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Services Section */}
          <div className="w-full md:w-1/2 p-4 flex flex-col items-center">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
              <h3 className="text-lg font-semibold mb-4 text-center">Services</h3>
              <p className="text-sm text-gray-600 mb-6 text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>

              {/* Dropdown Items */}
              <div className="space-y-4">
                {["Service 1", "Service 2", "Service 3"].map((item, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4 flex flex-col"
                  >
                    <button
                      className="flex justify-between items-center w-full font-medium text-gray-700"
                      onClick={() => toggleExpand(index)}
                    >
                      <span>{item}</span>
                      <span className="text-gray-500">{expanded === index ? "▲" : "▼"}</span>
                    </button>
                    {expanded === index && (
                      <div className="mt-2 text-sm text-gray-600">
                        Detailed information about {item}. This is where you can add more descriptive content.
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

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
    </div>
  );
};

export default Services;
