'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Search() {
  const [search, setSearch] = useState('');
  const [applyData, setApplyData] = useState([]);
  const [showApplyData, setShowApplyData] = useState(false);
  const inputRef = useRef(null);
  const debounceTimeout = useRef(null);

  useEffect(() => {
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    if (!search) {
      setApplyData([]);
      setShowApplyData(false);
      return;
    }

    debounceTimeout.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/experiments/Search?Search=${encodeURIComponent(search)}`);
        if (!res.ok) throw new Error('Error fetching');
        const data = await res.json();
        setApplyData(data);
        setShowApplyData(true);
      } catch (err) {
        console.error(err);
        setApplyData([]);
        setShowApplyData(false);
      }
    }, 400);

    return () => clearTimeout(debounceTimeout.current);
  }, [search]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowApplyData(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const clearSearch = () => {
    setSearch('');
    setApplyData([]);
    setShowApplyData(false);
  };

  return (
    <div ref={inputRef} className="relative w-full max-w-md mx-auto">
  {/* Input Field */}
  <div className="relative">
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search Experiments..."
      className="
        w-full py-3 px-12
        rounded-xl
        text-gray-100
        bg-gray-800
        text-sm
        border border-gray-600
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
        placeholder:text-gray-400
        transition-all duration-300 ease-in-out
        shadow-inner
      "
    />

    {/* Search Icon */}
    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.15 6.15z" />
      </svg>
    </div>

    {/* Clear Button */}
    {search && (
      <button
        onClick={clearSearch}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-red-500 transition"
        aria-label="Clear search"
      >
        ✖
      </button>
    )}
  </div>

  {/* Suggestions */}
  {applyData.length > 0 && showApplyData && (
    <div className="absolute left-0 right-0 top-full mt-2 bg-gray-800 border border-gray-600 rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto backdrop-blur-md">
      {applyData.map((data) => (
        <Link
          key={data.ExperimentId}
          href={data.slug}
          onClick={clearSearch}
          className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 transition-all duration-200"
        >
          {data.ExperimentName}
        </Link>
      ))}
    </div>
  )}
</div>
  );
}
