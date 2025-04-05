import React, { useState } from "react";
import Button from "./Button";
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
import { MdOutlineMic } from "react-icons/md";
import { GiSpeaker } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";

const Chatbot = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setQuery(transcript); // Set spoken words as input
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };
  };

  const speak = () => {
    if (!response) return;
    const utterance = new SpeechSynthesisUtterance(response);
    utterance.lang = "en-US";
    utterance.rate = 1;
    window.speechSynthesis.speak(utterance);
  };

  const sendMessage = async () => {
    if (!query.trim()) {
      setResponse("Please enter a query or use voice input.");
      return;
    }
    setLoading(true);
    setResponse(`Analyzing symptoms... ${(<CiSearch />)}`);

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: query }] }],
          }),
        }
      );

      const data = await res.json();
      if (data.error) throw new Error(data.error.message);
      if (!data.candidates || data.candidates.length === 0)
        throw new Error("No valid response from AI.");

      setResponse(data.candidates[0].content.parts[0].text);
    } catch (error) {
      setResponse(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">AI Healthcare Chatbot</h1>

      <Button onClick={startListening} bgColor="bg-yellow-500">
        <MdOutlineMic /> Speak Symptoms
      </Button>

      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your health query..."
        className="border p-2 w-full max-w-md rounded mt-2"
      />

      <Button onClick={sendMessage} disabled={loading} bgColor="bg-green-600">
        {loading ? "Processing..." : "Analyze Symptoms"}
      </Button>

      {response && (
        <div className="mt-4 p-3 border rounded bg-white flex flex-col items-start w-full max-w-md">
          <strong>Response:</strong> {response}
          <Button onClick={speak} bgColor="bg-blue-600" className="mt-2">
            <GiSpeaker /> Read Aloud
          </Button>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
