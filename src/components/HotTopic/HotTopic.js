import React, { useState } from 'react';
import { TitleSections } from 'components/TitleSections/TitleSections';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const HotTopic = ({ data }) => {
  const [isOpened, setIsOpened] = useState(null);

  const handleOpen = (index) => {
    if (index !== isOpened) {
      setIsOpened(index);
    } else {
      setIsOpened(null);
    }
  };

  return (
    <>
      <TitleSections text='HOT TOPIC' classNameOuter={'mt-[30px] mb-[9px]'} />
      {data?.hotTopic?.map((datas, index) => (
        <div key={index} onClick={() => handleOpen(index)}>
          <div
            className={`text-white hover:text-red-primary py-[10px] px-[10px] flex items-center gap-[12px] cursor-pointer ${
              index % 2 == 0 ? 'bg-dark-blue' : 'bg-dark-blue-secondary'
            }`}
          >
            <ArrowForwardIosIcon
              className={`text-[18px] mt-1 transition duration-300 ${
                index === isOpened ? 'rotate-90' : 'rotate-0'
              }`}
            />
            <div className='text-base font-bold tracking-wide'>
              {datas?.title}
            </div>
          </div>
          <div
            className={`transition-[height] duration-300 ease-in-out transform ${
              index === isOpened
                ? 'h-20 p-2 border-l-2 border-r-2 border-b-2 border-blue-700 bg-blue-100'
                : 'h-0'
            }`}
          ></div>
        </div>
      ))}
    </>
  );
};

export { HotTopic };
