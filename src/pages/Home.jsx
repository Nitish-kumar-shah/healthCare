import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://bgr.com/wp-content/uploads/2024/01/doctor-ai.jpg?quality=82&strip=all')",
      }}
    >
      <div className="absolute inset-0"></div>
      <div className="relative text-center text-white px-6 max-w-2xl">
        <h1 className="text-8xl md:text-9xl font-black mb-4 text-black">
          Your Health, Our Priority
        </h1>
        <p className="text-lg md:text-xl mb-6 text-black font-bold ">
          Welcome to Mediguide, your AI-powered healthcare assistant. Get
          instant medical guidance, symptom analysis, and expert health tips to
          stay informed and healthy.
        </p>
        {/* <Link
          className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition !no-underline text-black"
          to="/chat-bot"
        >
          AI Chat-bot
        </Link> */}
        {/* {isModalOpen && <Modal />} */}
      </div>
    </div>
  );
};

export default Home;
