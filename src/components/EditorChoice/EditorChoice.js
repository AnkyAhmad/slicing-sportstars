import { CardPrimary } from 'components/Card/Card';
import { TitleSections } from 'components/TitleSections/TitleSections';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const EditorChoice = ({ data }) => {
  return (
    <>
      <TitleSections text="EDITOR'S CHOICE" classNameOuter='py-[28px]' />
      <CardPrimary datas={data?.editorChoice} />
      <div className='divide-y-2 border-t-2 border-b-2 border-[#E0E0E0] divide-[#E0E0E0] mt-[20px]'>
        {data?.editorChoice?.list?.map((datas, index) => (
          <div key={index} className='flex gap-2 py-[20px]'>
            <div className='relative w-full h-full max-w-[127px] min-h-[95px]'>
              <Image src={datas?.src} alt={datas?.src} fill />
            </div>
            <div>
              <Link href={'#'}>
                <div className='text-black text-sm font-medium hover:text-red-primary leading-5'>
                  {datas?.title}
                </div>
              </Link>
              <div className='flex items-center justify-start mt-3 gap-2'>
                <div className='relative w-[15px] h-[16px]'>
                  <Image
                    className='object-contain'
                    alt={'/calender.png'}
                    src={'/calender.png'}
                    fill
                  />
                </div>
                <div className='text-black text-[12px] font-normal'>
                  {datas?.tanggal}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EditorChoice;
