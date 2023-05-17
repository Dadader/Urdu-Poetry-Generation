import React from 'react';

const FullPoem = ({ ghazal }) => {
    return(
    <div className='absolute top-0 left-0 right-0 bottom-0 bg-white'>
        <div className=' bg-black/10'>
      <div className="bg-black">ytutrytrf</div>
      <div className="bg-black">ytutrytrf</div>
      <div className="bg-black">ytutrytrf</div>
      <div className="bg-black">ytutrytrf</div>
      <div className="flex flex-col z-[10] items-end justify-start h-screen">
      <div className="flex font-bold text-6xl w-full items-center justify-center">
        <h1>{ghazal.Poets}</h1>
      </div>
      <div className="flex flex-col mt-10 w-full ">
          <div className=" flex flex-col bg-white items-center justify-end  m-2" >
          {ghazal.GhazalsU.map((verse, verseIndex) => (
        <p key={verseIndex} className="text-lg">
          {verse.join(' ')}
        </p>
      ))}
          </div>
        
      </div>
      </div>
      </div>

    </div>)
};
export default FullPoem
