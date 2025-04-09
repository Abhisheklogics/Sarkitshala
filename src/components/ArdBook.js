'use client';
import { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Image from 'next/image';

import img1 from '../../public/ArdBook/1.webp'
import img2 from '../../public/ArdBook/2.webp'
import img3 from '../../public/ArdBook/3.webp'
import img4 from '../../public/ArdBook/4.webp'
import img5 from '../../public/ArdBook/5.webp'
import img6 from '../../public/ArdBook/6.webp'
import img7 from '../../public/ArdBook/7.webp'
import img8 from '../../public/ArdBook/8.webp'
import img9 from '../../public/ArdBook/9.webp'
import img10 from '../../public/ArdBook/10.webp'
import img11 from '../../public/ArdBook/11.webp'
import imgauth from '../../public/ArdBook/About_Author.webp'
import imgack from '../../public/ArdBook/Ack.webp'
import imgcover from '../../public/ArdBook/cover.webp'

const pages = [
  imgcover, imgauth, imgack,
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11
];

export default function MyBook() {
  const bookRef = useRef(null);

  const nextPage = () => {
    bookRef.current.pageFlip().flipNext();
  };

  const prevPage = () => {
    bookRef.current.pageFlip().flipPrev();
  };

  return (
    <div className="flex justify-center items-center mt-5 mb-5 min-h-screen bg-gradient-to-br from-[#FFF0E5] to-[#e0e7ff] relative">
      
      {/* Left Arrow */}
      <button
        onClick={prevPage}
        className="absolute left-4 z-20 hover:bg-white/90 bg-white rounded-full p-3 shadow-md text-2xl text-gray-600"
        aria-label="Previous Page"
      >
        ◀
      </button>

      {/* Flipbook */}
      <div className="relative drop-shadow-2xl">
        <HTMLFlipBook
          ref={bookRef}
          width={500}
          height={680}
          size="fixed"
          minWidth={315}
          maxWidth={1000}
          minHeight={400}
          maxHeight={650}
          showCover={true}
          mobileScrollSupport={true}
          drawShadow={true}
          useMouseEvents={true}
          usePortrait={false}
          className="book rounded-xl shadow-xl"
        >
          {/* Cover Page */}
          <div className="flex flex-col justify-center items-center h-full bg-gradient-to-tr from-[#24C6DC] to-[#514A9D] text-white p-10">
            <h1 className="text-5xl font-extrabold font-serif drop-shadow-md mb-6">Arduino Book</h1>
            <p className="text-lg max-w-sm text-center font-light">
              Arduino E-Book designed guide to electronics, automation & open-source projects.
            </p>
            <p className="absolute bottom-6 right-6 text-sm text-white/60">IoT Students</p>
          </div>

          {/* Inner Pages */}
          {pages.map((img, index) => (
            <div
              key={index}
              className="bg-white flex flex-col justify-center items-center p-4"
            >
              <Image
                src={img}
                alt={`Page ${index + 1}`}
                width={460}
                height={680}
                className="rounded-md object-contain shadow-lg border"
                priority
              />
              <span className="text-xs text-gray-400 mt-1">Page {index + 1}</span>
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextPage}
        className="absolute right-4 z-20 hover:bg-white/90 bg-white rounded-full p-3 shadow-md text-2xl text-gray-600"
        aria-label="Next Page"
      >
        ▶
      </button>
    </div>
  );
}
