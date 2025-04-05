import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto py-12 px-6 text-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
        Have any questions? Reach out to us, and we’ll be happy to assist you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6 text-left">
          <h3 className="text-2xl font-bold text-blue-800">General Inquiry</h3>
          <p className="text-gray-600 mt-2">
            <strong>Email:</strong> info@mediguide.com
          </p>
          <p className="text-gray-600 mt-2">
            <strong>Phone:</strong> (123) 456-7890
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-left">
          <h3 className="text-2xl font-bold text-blue-800">Customer Support</h3>
          <p className="text-gray-600 mt-2">
            <strong>Email:</strong> support@mediguide.com
          </p>
          <p className="text-gray-600 mt-2">
            <strong>Phone:</strong> (987) 654-3210
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-left">
          <h3 className="text-2xl font-bold text-blue-800">Address</h3>
          <p className="text-gray-600 mt-2">
            123 Healthcare St, New York, NY 10001
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
