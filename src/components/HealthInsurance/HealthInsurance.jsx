import React from "react";
import { useState } from "react";
import InsuranceCard from "./InsuranceCard";
import { FaStar } from "react-icons/fa6";
import { FaStethoscope } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { SlSpeech } from "react-icons/sl";
import Chatbot from "../Chatbot";

const insurancePlans = [
  {
    title: "Basic Care",
    coverage: "2,00,000",
    price: "300",
    provider: "Aditya Birla Health Insurance",
    providerLink: "https://www.adityabirlahealth.com/",
  },
  {
    title: "Family Plus",
    coverage: "5,00,000",
    price: "700",
    provider: "Care Health Insurance",
    providerLink: "https://www.careinsurance.com/",
  },
  {
    title: "Senior Shield",
    coverage: "3,00,000",
    price: "500",
    provider: "ManipalCigna Health Insurance",
    providerLink: "https://www.manipalcigna.com/",
  },
];

const HealthInsurance = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <div className="p-6">
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-2xl font-bold mb-2">
          <FaStar /> Why is Health Insurance Important?
        </h2>
        <p className="text-gray-700">
          Health insurance protects you from unexpected medical expenses and
          ensures timely access to quality healthcare. It provides peace of
          mind, financial security, and access to a range of health services —
          from regular checkups to emergency treatments.
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-3">
          <li>✔ Financial protection against medical bills</li>
          <li>✔ Access to better healthcare facilities</li>
          <li>✔ Cashless hospitalization at network hospitals</li>
          <li>✔ Tax benefits under section 80D</li>
        </ul>
      </div>
      <h1 className="text-2xl font-bold mb-4">
        <FaStethoscope /> Health Insurance Plans
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {insurancePlans.map((plan, index) => (
          <InsuranceCard
            key={index}
            plan={plan}
            onKnowMore={() => setSelectedPlan(plan)}
          />
        ))}
      </div>

      {selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-2">
              {selectedPlan.title} Details
            </h2>
            <p>Coverage: ₹{selectedPlan.coverage}</p>
            <p>Price: ₹{selectedPlan.price}/month</p>
            <p className="mt-2">
              <FaCheck /> Free checkups
              <br />
              ✔ 24/7 emergency support
              <br />✔ AI-based health tracking
            </p>
            <p className="mt-4">
              Provided by:{" "}
              <a
                href={selectedPlan.providerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                {selectedPlan.provider}
              </a>
            </p>
            <button
              onClick={() => setSelectedPlan(null)}
              className="mt-4 bg-red-500 text-white px-4 py-1 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">
          <SlSpeech /> Still confused?
        </h2>
        <p className="text-gray-600 mb-3">
          Ask our AI HealthBot to guide you on choosing the right plan.
        </p>
        <button
          onClick={() => setShowChatbot(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Chat with HealthBot
        </button>
      </div>

      {showChatbot && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-auto p-4 relative">
            <button
              onClick={() => setShowChatbot(false)}
              className="absolute top-2 right-2 text-white bg-red-600 px-2 py-1 rounded"
            >
              Close
            </button>
            <Chatbot />
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthInsurance;
