import React, { useState } from 'react';
import { PoetData } from '../components/PoetData';
import Image from 'next/image';

const poets = () => {
  const [searchText, setSearchText] = useState('');
  const filteredPoets = PoetData.filter((poet) =>
    poet.head.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
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
        {filteredPoets.map((poet, index) => (
          <div key={index} className=" flex flex-row bg-white items-center justify-end rounded-full m-2" >
            <h2 className=" m-5 font-bold">{poet.head}</h2>
            <img src={poet.image} alt="Poet" className="w-20 h-20 rounded-full" />
          </div>
        ))}
      </div>

      {/* Rest of your page content */}
      </div>
      </div>
    </div>
  );
};

export default poets;
