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
        body: JSON.stringify({ message: userMessage }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.body) throw new Error("No stream received");
      // ye code  stream data ko decode karegaa orr chuuuncks me thoda ke setResponse me dalega
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let aiMessage = "";

      
      setResponses((prev) => [...prev, { role: "ai", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        aiMessage += decoder.decode(value, { stream: true });

        setResponses((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: "ai", content: aiMessage };
          return updated;
        });
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
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
   
      <header className="p-4 bg-gray-800/80 backdrop-blur text-center font-bold text-xl shadow-md">
        🤖 AI Chat
      </header>

    
      <div className="flex-1 overflow-y-auto p-4 flex flex-col space-y-4">
        {responses.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-[75%] p-4 rounded-2xl shadow-md transition-all duration-200 ${
              msg.role === "user"
                ? "self-end bg-blue-600 text-white rounded-br-none"
                : "self-start bg-gray-700 text-gray-100 rounded-bl-none"
            }`}
          >
            {msg.content || "…"}
          </div>
        ))}

        {loading && (
          <div className="self-start bg-gray-700 text-gray-100 p-3 rounded-2xl shadow-md animate-pulse max-w-[75%]">
            AI is typing...
          </div>
        )}
        <div ref={chatEndRef}></div>
      </div>

      <footer className="p-4 bg-gray-800/80 backdrop-blur flex space-x-2 shadow-md">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type your message..."
          className="flex-1 p-3 rounded-xl border border-gray-600 bg-gray-700/70 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <button
          onClick={handleSend}
          className="px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors text-white font-semibold shadow-md"
        >
          ➤
        </button>
      </footer>
    </div>
  );
}
