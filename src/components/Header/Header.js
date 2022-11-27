import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className='hidden md:block bg-white border-b-2 border-[#24326F] sticky top-0 z-[9999]'>
      <div className='hidden container mx-auto md:flex justify-between items-center p-3 md:px-[45px] md:gap-8'>
        <div className='text-black font-medium text-[14px] flex gap-[16px]'>
          <Link href='https://rcti.com' className='hover:text-red-primary'>
            RCTI+
          </Link>
          <Link href='https://Vision.com' className='hover:text-red-primary'>
            Vision+
          </Link>
          <Link href='https://Okezone.com' className='hover:text-red-primary'>
            Okezone.com
          </Link>
          <Link href='https://SINDOnews.com' className='hover:text-red-primary'>
            SINDOnews.com
          </Link>
          <Link href='https://INews.id.com' className='hover:text-red-primary'>
            INews.id
          </Link>
          <Link href='https://Buddyku.com' className='hover:text-red-primary'>
            Buddyku
          </Link>
        </div>
        <div className='flex items-center gap-[15px]'>
          <div className='relative cursor-pointer w-[12px] h-[16px]'>
            <Image alt='mediaSocial' src='/mediaSocial/facebook.png' fill />
          </div>
          <div className='relative cursor-pointer w-[18px] h-[15px]'>
            <Image alt='mediaSocial' src='/mediaSocial/twitter.png' fill />
          </div>
          <div className='relative cursor-pointer w-[18px] h-[18px]'>
            <Image
              alt='mediaSocial'
              src='/mediaSocial/instagram (2).png'
              fill
            />
          </div>
          <div className='relative cursor-pointer w-[19px] h-[14px]'>
            <Image alt='mediaSocial' src='/mediaSocial/youtube.png' fill />
          </div>
          <div className='relative cursor-pointer w-[14px] h-[17px]'>
            <Image alt='mediaSocial' src='/mediaSocial/tiktok.png' fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
