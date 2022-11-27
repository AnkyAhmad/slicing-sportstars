import { TitleSectionsSecondary } from 'components/TitleSections/TitleSections';
import Image from 'next/image';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

SwiperCore.use([Navigation]);

const Statistik = ({ data }) => {
  const swiperRef = useRef(null);

  return (
    <>
      <TitleSectionsSecondary
        text='STATISTIK'
        classNameOuter={'mt-[30px] mb-[9px]'}
      />
      <div className='flex justify-between items-center mt-4'>
        <select className='border-2 rounded-md py-[8px] px-[12px] border-black'>
          <option value=''>Jadwal Terbaru</option>
          <option value={`EURO 2021`}>EURO 2021</option>
          <option value={`EURO 2022`}>EURO 2022</option>
          <option value={`EURO 2023`}>EURO 2023</option>
        </select>
        <div className='flex gap-4'>
          <div className='h-10 w-10 flex justify-center items-center text-white bg-dark-blue rounded-full'>
            <div
              className='cursor-pointer'
              id='nextButton'
              onClick={() => swiperRef.current.swiper.slidePrev()}
            >
              <ArrowBackIosNewIcon className='mr-px hover:text-red-500' />
            </div>
          </div>
          <div className='h-10 w-10 flex justify-center items-center text-white bg-dark-blue rounded-full'>
            <div
              className='cursor-pointer'
              id='previousButton'
              onClick={() => swiperRef.current.swiper.slideNext()}
            >
              <ArrowForwardIosIcon className='ml-px hover:text-red-500' />
            </div>
          </div>
        </div>
      </div>

      <Swiper
        className='mt-[20px]'
        slidesPerView={1}
        spaceBetween={10}
        ref={swiperRef}
      >
        {data?.statistik?.map((datas, index) => (
          <SwiperSlide key={index}>
            <div className='text-sm font-bold'>{datas?.nameTable}</div>
            <div className='flex items-center bg-dark-blue text-white font-semibold px-3 py-2 mt-2 text-center'>
              <div className='w-[55%] text-left'>RANK</div>
              <div className='w-[15%]'>P</div>
              <div className='w-[15%]'>GD</div>
              <div className='w-[15%]'>Pts</div>
            </div>
            <div className='border border-dark-blue px-3 py-2 space-y-4'>
              {datas?.tabel?.map((dataTable, index) => (
                <div
                  key={index}
                  className='flex items-center text-center font-bold text-[14px]'
                >
                  <div className='w-[1%]'>{index + 1}</div>
                  <div className='w-[15%] flex justify-center'>
                    <Image
                      width={25}
                      height={25}
                      src={dataTable?.flag}
                      alt={dataTable?.name}
                    />
                  </div>
                  <div className='w-[40%] text-left'>{dataTable?.name}</div>
                  <div className='w-[15%]'>{dataTable?.p}</div>
                  <div className='w-[15%]'>{dataTable?.gd}</div>
                  <div className='w-[15%]'>{dataTable?.Pts}</div>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Statistik;
