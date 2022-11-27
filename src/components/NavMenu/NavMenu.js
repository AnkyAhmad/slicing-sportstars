import Image from 'next/image';
import React, { useState } from 'react';

const menu = [
  {
    menu: 'beranda',
    to: '/',
  },
  {
    menu: 'bola',
    to: '/beranda',
  },
  {
    menu: 'Balap',
    to: '/beranda',
  },
  {
    menu: 'Ragam',
    to: '/beranda',
  },
  {
    menu: 'Sportaiment',
    to: '/beranda',
  },
  {
    menu: 'Hobi',
    to: '/beranda',
  },
  {
    menu: 'Data Statistik',
    to: '/beranda',
  },
  {
    menu: 'Multimedia',
    to: '/beranda',
  },
  {
    menu: 'Index',
    to: '/beranda',
  },
];

const NavMenu = () => {
  const [isSelected, setIsSelected] = useState('beranda');

  return (
    <div className='bg-dark-blue drop-shadow-bottom md:drop-shadow-none'>
      <div className='container mx-auto pt-2 px-[20px] flex gap-[20px] overflow-x-scroll lg:overflow-hidden md:pt-0 md:px-10 md:flex md:items-center'>
        {menu?.map((data, index) => (
          <div key={index} className='relative cursor-pointer'>
            <div
              // href={data?.to}
              onClick={() => setIsSelected(data?.menu)}
              className={`text-[14px] md:text-[16px] font-medium uppercase whitespace-nowrap md:my-4 hover:text-red-primary ${
                isSelected === data?.menu ? 'text-[#ED1C24]' : 'text-white'
              }`}
            >
              {data?.menu}
            </div>
            {isSelected === data?.menu && (
              <div className='absolute bottom-0 h-[3px] bg-[#ED1C24] w-full'></div>
            )}
          </div>
        ))}

        <div className='relative w-[30px] h-[30px] bg-red-500 ml-auto'>
          <Image
            className='p-[5px]'
            alt='search_white'
            src='/search_white.png'
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
