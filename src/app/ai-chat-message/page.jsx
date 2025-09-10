"use client";
import { useState, useRef, useEffect } from "react";

export default function AIChat() {
  const [message, setMessage] = useState("");
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [responses, loading]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage = message;
    setResponses((prev) => [...prev, { role: "user", content: userMessage }]);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();
      if (data.error) {
        setResponses((prev) => [
          ...prev,
          { role: "ai", content: "Error: " + JSON.stringify(data.error) },
        ]);
      } else {
        setResponses((prev) => [...prev, { role: "ai", content: data.res }]);
      }
    } catch (error) {
      console.error(error);
      setResponses((prev) => [
        ...prev,
        { role: "ai", content: "Error: Could not get a response." },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-100">
      <header className="p-4 bg-gray-800 text-center font-bold text-lg">
        AI Chat
      </header>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col space-y-4">
        {responses.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-[70%] p-3 rounded-lg break-words ${
              msg.role === "user"
                ? "self-end bg-blue-600 text-white"
                : "self-start bg-gray-700 text-gray-100"
            }`}
          >
            {msg.content}
          </div>
        ))}

        {loading && (
          <div className="self-start bg-gray-700 text-gray-100 p-3 rounded-lg animate-pulse max-w-[70%]">
            AI is typing...
          </div>
        )}
        <div ref={chatEndRef}></div>
      </div>

      <footer className="p-4 bg-gray-800 flex space-x-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type your message..."
          className="flex-1 p-3 rounded-lg border border-gray-600 bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSend}
          className="px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold"
        >
          Send
        </button>
      </footer>
    </div>
  );
}
