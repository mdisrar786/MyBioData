import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai'; // Optional: Icon for download button

function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume(1).pdf'; // Correct path to the resume file in the public folder
    link.download = 'Resume(1).pdf'; // Name for the downloaded file
    link.click();
  };

  return (
    <div className="flex justify-end"> {/* Aligns button to the right */}
      <button
        onClick={handleDownload}
        className="bg-cyan-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
      >
        <AiOutlineDownload className="mr-2" /> {/* Optional icon */}
        Download My Resume
      </button>
    </div>
  );
}

export default Resume;
