import React from "react";
import { FaMoneyCheck } from "react-icons/fa6";
import { PiBedFill } from "react-icons/pi";

const InsuranceCard = ({ plan, onKnowMore }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h3 className="font-bold text-lg mb-2">{plan.title}</h3>
      <p className="text-gray-700">
        <PiBedFill /> Coverage: ₹{plan.coverage}
      </p>
      <p className="text-gray-700">
        <FaMoneyCheck /> Price: ₹{plan.price}/month
      </p>
      <button
        onClick={onKnowMore}
        className="mt-3 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
      >
        Know More
      </button>
    </div>
  );
};

export default InsuranceCard;
