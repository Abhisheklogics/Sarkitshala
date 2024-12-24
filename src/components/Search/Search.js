


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
    setApplyData([]); 
    setShowApplyData(false); 
  };

  const handleLinkClick = () => {
    setApplyData([]); 
    setShowApplyData(false);
    setSearch(''); 
  };

  return (
    <div className="max-w-md mx-auto md:mt-2 mt-2 md:w-full ml-14 md:ml-[500px] md:h-4">
      
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
            className="block md:w-full w-[290px] h-[50px]  md:p-6   p-2 pl-10 text-sm text-gray-900  border border-gray-300  rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="    Search Experiments...  "
            value={search}
            ref={inputRef}
            onChange={handleInputChange}
            required
          />
         
        </div>
    

      {applyData.length > 0 && search !== '' && (
        <div className="absolute mt-2 w-fit bg-white ml-[-50px] rounded-lg p-3 shadow-lg z-20">
          {applyData.map((data) => (
            <div key={data.ExperimentId} className="p-2 border-b border-gray-200">
              <Link  onClick={handleLinkClick} href={`/arduino/${data.ExperimentId}`} passHref>
                
                <div
                  className="flex items-center space-x-3 hover:bg-gray-100 rounded-lg p-2"
                    >
                  <img
                    src={data.image1}
                    className="rounded w-12 h-12 object-cover"
                    alt={data.ExperimentName}
                  />
                  <h1 className="text-sm font-medium">{data.ExperimentName}</h1>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


