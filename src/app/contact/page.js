"use client";
import { useState } from "react";

export default function ContactPage() {
  const [email, setemail] = useState('sarkitshala@gmail.com');
const [mes, setmes] = useState('');

  

  const handleSubmit = async (e) => {
    e.preventDefault();
   
let obj={
  one:email,
  two:mes

}
    const res = await fetch("api/experiments/sendmes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });

   
     
  };

  return (
    <section className="max-w-xl mx-auto mt-20 px-4">
      <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="email"
          value={email}
          onChange={(e)=>setemail(e.target.value)}
          type="email"
          placeholder="Your email"
          
          className="w-full p-2 border rounded"
        />
        <input
          name="mes"
         
       value={mes}
          onChange={(e)=>setmes(e.target.value)}
          type="text"
          placeholder="Subject"
          
          className="w-full p-2 border rounded"
        />
       
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
       
      </form>
    </section>
  );
}
