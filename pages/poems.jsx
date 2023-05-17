import React, { useState } from 'react';
import { PoemData } from '../components/PoemData';
import Image from 'next/image';
import FullPoem from '../components/FullPoem'

const poems = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedGhazal, setSelectedGhazal] = useState(null);
  const filterGhazals = (ghazal) => {
    if (!searchText) return true;

    const searchTerm = searchText.toLowerCase();

    for (const verse of ghazal.GhazalsU) {
      if (verse.includes(searchTerm)) {
        return true;
      }
    }

    return false;
  };
  const filteredGhazals = PoemData.filter(filterGhazals);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };
  const handleGhazalClick = (ghazal) => {
    setSelectedGhazal(ghazal);
  };

  return (
    <div>
        <div className=' bg-black/10'>
      <div className="bg-black">ytutrytrf</div>
      <div className="bg-black">ytutrytrf</div>
      <div className="bg-black">ytutrytrf</div>
      <div className="bg-black">ytutrytrf</div>
      <div className="flex flex-col z-[10] items-end justify-start h-screen">
      <div className="flex font-bold text-6xl w-full items-center justify-center">
        <h1>Poets</h1>
      </div>
      <div className="flex items-center justify-center w-full"><input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchChange}
        className="m-4 p-2 border border-gray-300 rounded-full"
      />
        </div>
      <div className="flex flex-col mt-10 w-full ">
      {selectedGhazal ? (
        <FullPoem ghazal={selectedGhazal} />
      ) : (
        filteredGhazals.map((ghazal, index) => (
          <div key={index} className=" flex flex-row bg-white items-center justify-end rounded-full m-2" >
          <p className="m-2 text-lg" onClick={() => handleGhazalClick(ghazal)}>{ghazal.GhazalsU[0]}</p>
                      </div>
        )))}
      </div>

      {/* Rest of your page content */}
      </div>
      </div>
    </div>
  );
};

export default poems;
