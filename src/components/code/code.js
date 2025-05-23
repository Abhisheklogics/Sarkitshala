'use client';


import React, { useState, useRef } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// esme darcula ko hata kar  Prism ye kar denna agar sahi nahi lage to  
import { darcula as syntaxTheme } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { res, esp, ard } from '../../../code';

const CodeBox = ({ code, language, num, exNam }) => {
  const [buttonText, setButtonText] = useState('Copy');
  const codeRef = useRef(null);
  let time = undefined;

 
  if (exNam === 'Raspberry') {
    
    code = res[num-1]; 
  } else if (exNam === 'esp') {
    code = esp[num-1]; 
  } else if (exNam === 'ard') {
    code = ard[num-1];  
  }

  const handleCopy = () => {
    if (codeRef.current) {
      navigator.clipboard.writeText(code).then(() => {
        setButtonText('Copied');
        if (time === undefined) {
          time = setTimeout(() => setButtonText('Copy'), 2000);
        }
        time = undefined;
      }).catch(err => console.error('Failed to copy: ', err));
    }
  };

  return (
    <>
      <div className="flex justify-end md:mt-6 mt-4 sm:mt-2">
        <button
          className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700 transition-all sm:text-xs sm:mr-2"
          onClick={handleCopy}
        >
          {buttonText}
        </button>
      </div>
      <div
        className="mt-4 p-4 rounded bg-gray-100 text-lg shadow-lg
          sm:mt-2 sm:p-2 sm:text-sm sm:h-[300px] 
          md:h-[500px] 
          lg:h-[400px]"
        ref={codeRef}
        style={{ fontFamily: 'monospace', position: 'relative' }}
      >
        <SyntaxHighlighter language={language} style={syntaxTheme} showLineNumbers={true} className="md:h-full h-[500px]">
          {code}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default CodeBox;
