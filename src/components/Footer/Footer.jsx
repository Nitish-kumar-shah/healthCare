import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="bg-blue-900/80 text-white py-6  relative bottom-0">
      <div className="container mx-auto px-6 text-center">
        <div className="ml-32 mt-7">
          <Logo width="60px" />
        </div>
        <h2 className="text-xl font-semibold">AI Healthcare Chatbot</h2>
        <p className="mt-2 text-sm max-w-2xl mx-auto">
          Our AI-powered healthcare chatbot provides instant medical guidance,
          symptom analysis, and health tips to ensure better patient care and
          accessibility.
        </p>
        <div className="border-t border-blue-600 mt-4 pt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} AI Healthcare. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
