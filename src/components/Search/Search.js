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
    <div className="relative w-full max-w-md" ref={inputRef}>
      <div className="relative">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Experiments..."
          className="w-full py-2 px-10 rounded-lg bg-white shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="absolute left-3 top-2.5 text-gray-500 pointer-events-none">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 20 20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 111 8a7 7 0 0114 0z" />
          </svg>
        </div>
        {search && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700 text-sm"
            aria-label="Clear search"
          >
            ✖
          </button>
        )}
      </div>

      {applyData.length > 0 && showApplyData && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
          {applyData.map((data) => (
            <Link
              key={data.ExperimentId}
              href={data.slug}
              onClick={clearSearch}
              className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
            >
              {data.ExperimentName}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
