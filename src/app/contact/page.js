'use client';
import { useState } from 'react';


export default function ContactPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/experiments/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      const result = await res.json();
      if (result.success) {
        setStatus(' Suggestion sent successfully!');
        setEmail('');
        setMessage('');
      } else {
        setStatus(`Failed: ${result.error}`);
      }
    } catch (err) {
      setStatus('Server error. Please try again later.');
    }

    setLoading(false);
  };


  return (
    <div className="max-w-xl mx-auto mt-28 p-6 bg-white shadow-md rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Send Us a Suggestion</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Your email"
          className="p-3 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder="Your message"
          rows={6}
          className="p-3 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition"
        >
          {loading ? 'Sending...' : 'Send Suggestion'}
        </button>
      </form>

      {status && (
        <p className={`mt-4 text-sm text-center ${status.startsWith('') ? 'text-green-600' : 'text-red-600'}`}>
          {status}
        </p>
      )}
    </div>
  );
}