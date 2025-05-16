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
    // Clear previous timeout
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    if (!search) {
      setApplyData([]);
      setShowApplyData(false);
      return;
    }

    // Set new debounce timeout
    debounceTimeout.current = setTimeout(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/experiments/Search?Search=${encodeURIComponent(search)}`);
          if (!response.ok) throw new Error('Error fetching data');
          const data = await response.json();
          setApplyData(data);
          setShowApplyData(true);
        } catch (err) {
          console.error(err);
          setApplyData([]);
          setShowApplyData(false);
        }
      };

      fetchData();
    }, 500); // 500ms debounce delay

    // Cleanup on unmount or search change
    return () => clearTimeout(debounceTimeout.current);

  }, [search]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowApplyData(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
          className="w-full pl-10 pr-10 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
        />
        <div className="absolute left-3 top-2.5 text-gray-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 20 20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 111 8a7 7 0 0114 0z" />
          </svg>
        </div>
        {search && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
          >
            ✖
          </button>
        )}
      </div>

      {applyData.length > 0 && showApplyData && (
        <div className="absolute top-full left-0 right-0 bg-white mt-2 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
          {applyData.map((data) => (
            <Link key={data.ExperimentId} href={`${data.slug}`} passHref>
              <div
                onClick={clearSearch}
                className="flex items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer"
              >
                <span className="text-sm font-medium text-gray-800">{data.ExperimentName}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
