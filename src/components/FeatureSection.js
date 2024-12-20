import React from "react";

const features = [
  { title: "No Extra Charges", description: "No hidden costs or fees.", icon: "💸" },
  { title: "High Quality Product", description: "Top-notch materials used.", icon: "🏆" },
  { title: "Secure Payment", description: "Your transactions are safe.", icon: "🔒" },
  { title: "Custom Size & Style", description: "Tailored to your needs.", icon: "✂️" },
  { title: "Fast & Free Delivery", description: "Quick and no shipping fees.", icon: "🚚" },
  { title: "Low Minimum Order Quantity", description: "Order as little as you need.", icon: "📦" },
];

const FeaturesSection = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Why to buy from Aggrawal Sports?
        </h2>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ligula non elit congue dapibus.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg text-gray-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
