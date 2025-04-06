import React, { useEffect } from "react";
import { useState } from "react";
import { marked } from "marked";
import Input from "./Input";
import Button from "./Button";
import ReactMarkdown from "react-markdown";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { RiMicAiFill } from "react-icons/ri";
const APIr1_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY;

const DeepseekR1 = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(
    localStorage.getItem("chatResponse") || ""
  );
  const [loading, setLoading] = useState(false);

  const [isSpeaking, setIsSpeaking] = useState(false);

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
      setInput(transcript);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };
  };

  const speak = () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    if (!response) return;

    const utterance = new SpeechSynthesisUtterance(response);
    utterance.lang = "en-US";
    utterance.rate = 1;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    localStorage.setItem("chatResponse", response);
  }, [response]);

  const sendMessage = async () => {
    if (!input) {
      setResponse("Please enter a message.");
      return;
    }

    setLoading(true);
    setResponse("Thinking...\n");

    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${APIr1_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1:free",
          messages: [
            {
              role: "system",
              content:
                "You are an AI assistant that only answers healthcare-related questions. If a user asks about anything unrelated to healthcare, respond with: 'Please ask about healthcare.'",
            },
            ,
            { role: "user", content: input },
          ],
          stream: true,
        }),
      });

      if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const jsonChunks = chunk
          .split("\n")
          .filter((line) => line.startsWith("data: "))
          .map((line) => line.replace("data: ", "").trim());

        jsonChunks.forEach((jsonChunk) => {
          try {
            const parsed = JSON.parse(jsonChunk);
            const content = parsed.choices?.[0]?.delta?.content || "";

            const combined = buffer + content;
            const words = combined.split(/\s+/);

            if (!/\s$/.test(content)) {
              buffer = words.pop();
            } else {
              buffer = "";
            }

            setResponse((prev) => prev + words.join(" ") + " ");
          } catch (error) {
            console.warn("Error parsing JSON:", error);
          }
        });
      }

      if (buffer) {
        setResponse((prev) => prev + buffer);
      }
    } catch (error) {
      setResponse(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-700">
          MediGuide Chatbot
        </h2>

        <div className="flex gap-2 items-center mb-4">
          <Input
            type="text"
            className="flex-1 border border-gray-300 rounded-md px-4 py-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a healthcare question..."
          />
          <Button
            onClick={startListening}
            bgColor="bg-yellow-500"
            className="px-4 py-2 cursor-pointer"
          >
            <RiMicAiFill />
          </Button>
        </div>

        <Button
          type="submit"
          bgColor="bg-green-600"
          textColor="text-white"
          className="w-full py-2 mb-4 cursor-pointer"
          disabled={loading}
          onClick={sendMessage}
        >
          {loading ? "Loading..." : "Ask!"}
        </Button>

        <div className="bg-gray-50 border border-gray-300 rounded-md p-4 text-lg min-h-[150px]">
          <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {response}
          </Markdown>
        </div>

        <Button
          onClick={speak}
          bgColor={isSpeaking ? "bg-red-600" : "bg-blue-600"}
          className={`w-full mt-4 py-2 transition-all duration-300 cursor-pointer ${
            isSpeaking ? "animate-pulse" : ""
          }`}
        >
          {isSpeaking ? "🔊 Speaking..." : "🔊 Read Aloud"}
        </Button>
      </div>
    </div>
  );
};

export default DeepseekR1;
