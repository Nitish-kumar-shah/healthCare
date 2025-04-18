import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://bgr.com/wp-content/uploads/2024/01/doctor-ai.jpg?quality=82&strip=all')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-white/10 backdrop-blur-sm"></div>

      <div className="relative text-center text-white px-6 w-full max-w-3xl rounded-xl bg-white/20 backdrop-blur-md shadow-lg p-10 z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
          Your Health, Our Priority
        </h1>

        <p className="text-lg md:text-xl mb-8 text-white/90 font-medium">
          Welcome to{" "}
          <span className="font-semibold text-yellow-300">MediGuide</span>, your
          AI-powered healthcare assistant. Get instant medical guidance, symptom
          analysis, and expert tips to stay informed and healthy.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:from-green-600 hover:to-green-800 transition-all duration-300 text-lg cursor-pointer"
          >
            🩺 Symptoms Checker
          </button>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
};

export default Home;
