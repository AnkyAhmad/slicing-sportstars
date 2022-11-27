import Link from 'next/link';
import React from 'react';

const MobileNav = ({ open, setOpen }) => {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? '-translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className='flex items-center justify-center filter drop-shadow-md bg-white h-20'>
        <Link className='text-xl font-semibold' href='#'>
          LOGO
        </Link>
      </div>
      <div className='flex flex-col ml-4'>
        <a
          className='text-xl font-medium my-4'
          href='/about'
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About
        </a>
        <a
          className='text-xl font-normal my-4'
          href='/contact'
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default MobileNav;
