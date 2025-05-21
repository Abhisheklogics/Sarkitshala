"use client";
import { useState } from "react";

export default function ContactPage() {
  const [email, setEmail] = useState("");
  const [mes, setMes] = useState("");
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!email || !mes) {
      setStatus({ type: "error", message: "Please fill in both email and message." });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/experiments/sendmes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message: mes }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setEmail("");
        setMes("");
      } else {
        setStatus({ type: "error", message: data.message || "Failed to send message" });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Error sending message" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-md mx-auto mt-28 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-blue-700">Suggestion Form</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
          Your Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="example@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-gray-300 p-3 text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none transition"
          required
          aria-required="true"
        />

        <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message here..."
          value={mes}
          onChange={(e) => setMes(e.target.value)}
          className="w-full rounded-md border border-gray-300 p-3 text-gray-900 focus:border-blue-500 focus:ring focus:ring-blue-300 focus:outline-none transition"
          required
          rows={5}
          aria-required="true"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-600 text-white font-semibold py-3 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status && (
        <p
          className={`mt-6 text-center font-medium ${
            status.type === "success" ? "text-green-600" : "text-red-600"
          }`}
          role="alert"
        >
          {status.message}
        </p>
      )}
    </section>
  );
}
