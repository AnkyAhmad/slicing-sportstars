import Link from 'next/link';
import React from 'react';

const TitleSections = ({ text, textColor, classNameOuter }) => {
  return (
    <div className={`w-full ${classNameOuter}`}>
      <div
        className={`font-bold text-[18px] mb-px uppercase ${
          textColor ? textColor : 'text-black'
        }`}
      >
        {text}
      </div>
      <div className='w-full h-[3px] bg-[#ED1C24]'></div>
    </div>
  );
};

const TitleSectionsSecondary = ({ text, textColor, classNameOuter }) => {
  return (
    <div className={`w-full ${classNameOuter}`}>
      <div className='flex justify-between items-center'>
        <div
          className={`font-bold text-[18px] mb-px uppercase ${
            textColor ? textColor : 'text-black'
          }`}
        >
          {text}
        </div>
        <Link href={'#'}>
          <div className='text-sm'>Lihat Detail</div>
        </Link>
      </div>
      <div className='w-full h-[3px] bg-[#ED1C24]'></div>
    </div>
  );
};

export { TitleSections, TitleSectionsSecondary };
