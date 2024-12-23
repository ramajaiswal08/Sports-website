import React from "react";

// Define a type for the testimonials
interface Testimonial {
  name: string;
  feedback: string;
  image: string;
}

// Testimonials data with proper typing
const testimonials: Testimonial[] = [
  {
    name: "Dean D.",
    feedback: "Great quality products.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Cristian L.",
    feedback: "Best services ever.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Leonel R.",
    feedback: "Top-notch support.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <div className="bg-purple-50 py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center"
            >
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s profile`}
                className="w-16 h-16 rounded-full mb-4"
              />
              <p className="italic text-gray-600 mb-4">
                "{testimonial.feedback}"
              </p>
              <h3 className="font-semibold text-gray-700">
                {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
