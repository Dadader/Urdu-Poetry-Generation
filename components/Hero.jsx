import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Hero = ({heading, message}) => {
  return (
    <div className='flex items-centre justify-start h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[25%] ml-[5rem] items-centre justify-center'>
        <h2 className='text-5xl font-bold'>{heading}</h2>
        <p className='py-5 text-xl font-bold'>{message}</p>
        <Link href="/generate">
          <button className="flex px-12 py-2 border bg-blue-500 text-white rounded-full">
          <span className="font-bold mt-1">Generate</span> <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-[2rem] mt-[0.5rem] w-[1rem]"/>
          </button>
        </Link>

      </div>
    </div>
  );
};

export default Hero;
