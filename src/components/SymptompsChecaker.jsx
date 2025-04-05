import React, { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import Markdown from "react-markdown";
import { FaSearch } from "react-icons/fa";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const SymptompsChecaker = () => {
  const words = [
    "fever",
    "fatigue",
    "pain",
    "cough",
    "cold",
    "sore throat",
    "runny nose",
    "stuffy nose",
    "sneezing",
    "chills",
    "headache",
    "body aches",
    "muscle pain",
    "weakness",
    "sweating",

    "shortness of breath",
    "chest pain",
    "wheezing",
    "difficulty breathing",
    "congestion",
    "loss of smell",
    "loss of taste",

    "nausea",
    "vomiting",
    "diarrhea",
    "constipation",
    "stomach pain",
    "bloating",
    "heartburn",

    "dizziness",
    "numbness",
    "tingling",
    "confusion",
    "memory loss",
    "seizures",

    "rash",
    "itching",
    "swelling",
    "redness",
    "bruising",
    "hives",

    "joint pain",
    "swollen lymph nodes",
    "rapid heartbeat",
    "high blood pressure",
    "low blood pressure",
    "frequent urination",
    "blurred vision",
    "hearing loss",
  ];

  const [selectedWords, setSelectedWords] = useState([]);
  const [response, setResponse] = useState(
    localStorage.getItem("chatResponse") || ""
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("chatResponse", response);
  }, [response]);

  const addWord = (word) => {
    if (!selectedWords.includes(word)) {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const removeWord = (word) => {
    setSelectedWords(selectedWords.filter((w) => w !== word));
  };

  const sendMessage = async () => {
    if (selectedWords.length === 0) {
      setResponse("Please select at least one symptom.");
      return;
    }

    setLoading(true);
    setResponse(`Analyzing symptoms... ${(<FaSearch />)}`);

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${API_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `A patient has these symptoms: ${selectedWords.join(
                      ", "
                    )}. Based on this, suggest possible medical conditions in detail. 
                    Provide an in-depth explanation, including possible causes, severity, and whether immediate medical attention is needed. 
                    Ensure the response is approximately 180 words.`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      if (!data.candidates || data.candidates.length === 0) {
        throw new Error("No valid response from AI.");
      }
      setResponse(data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error("Error:", error.message);
      setResponse(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Symptom Checker</h1>

      <div className="border p-2 rounded bg-white w-full min-h-[40px] flex flex-wrap items-center">
        {selectedWords.map((word) => (
          <span
            key={word}
            className="m-1 px-2 py-1 bg-gray-200 rounded flex items-center"
          >
            {word}
            <button
              className="ml-2 text-gray-700 cursor-pointer"
              onClick={() => removeWord(word)}
            >
              <RxCross1 />
            </button>
          </span>
        ))}
      </div>

      <div className="mb-2 mt-2">
        {words.map((word) => (
          <button
            key={word}
            className="m-1 px-3 py-1 bg-blue-500 text-white rounded cursor-pointer hover:bg-red-500"
            onClick={() => addWord(word)}
          >
            {word}
          </button>
        ))}
      </div>

      <button
        onClick={sendMessage}
        disabled={loading}
        className="bg-green-500 text-white p-2 rounded mt-2 cursor-pointer"
      >
        {loading ? "Analyzing..." : "Find Possible Diseases"}
      </button>

      {response && (
        <div className="mt-4 p-3 border rounded bg-white text-[20px]">
          <strong>AI Response:</strong> <Markdown>{response}</Markdown>
        </div>
      )}
    </div>
  );
};

export default SymptompsChecaker;
