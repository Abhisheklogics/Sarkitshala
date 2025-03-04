'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Search() {
  const [search, setSearch] = useState('');
  const [applyData, setApplyData] = useState([]);
  const [showApplyData, setShowApplyData] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (search === '') {
      setApplyData([]);
      setShowApplyData(false);
      return;
    }

    const getDataSearch = async () => {
      try {
        const response = await fetch(`/api/experiments/Search?Search=${encodeURIComponent(search)}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setApplyData(data);
        setShowApplyData(true);
      } catch (error) {
        console.log(error);
        setApplyData([]);
        setShowApplyData(false);
      }
    };

    getDataSearch();
  }, [search]);

  const handleLinkClick = () => {
    setApplyData([]);
    setShowApplyData(false);
    setSearch('');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowApplyData(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    setShowApplyData(false);
  };

  const clearInput = () => {
    setSearch('');
    setApplyData([]);
    setShowApplyData(false);
  };

  return (
    <div className="max-w-md mx-auto md:mt-4  mt-4 md:w-[300px] ml-24 md:ml-[1000px] 2xl:ml-[1170px] md:h-4">
      <label htmlFor="default-search" className="sr-only">Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center md:pl-2 pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>

       
        <input
          type="search"
          id="default-search"
          className="block md:w-full w-[290px] md:h-[10px] md:p-6 p-2 pl-10 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500 bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Experiments..."
          value={search}
          ref={inputRef}
          onChange={handleInputChange}
          required
        />

       
        {search && (
          <button
            onClick={clearInput}
            className="md:block hidden absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-500 hover:text-gray-700"
          >
            ✖
          </button>
        )}
      </div>

      {applyData.length > 0 && search !== '' && (
        <div className={`${showApplyData ? 'opacity-100' : 'opacity-0'} absolute mt-2 w-fit bg-white ml-[-20px] md:ml-10 rounded-lg p-3 shadow-lg z-20`}>
          {applyData.map((data) => (
            <Link key={data.ExperimentId} href={`/arduino/${data.slug}`} passHref>
              <div onClick={handleLinkClick} className="flex items-center space-x-3 hover:bg-gray-100 rounded-lg p-2 cursor-pointer">
                <img
                  src={data.image1}
                  className="rounded w-12 h-12 object-cover"
                  alt={data.ExperimentName}
                />
                <h1 className="text-sm font-medium">{data.ExperimentName}</h1>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
