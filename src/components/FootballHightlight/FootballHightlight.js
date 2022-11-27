import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { ContainerMain } from 'components/layout/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from 'next/link';

SwiperCore.use([Navigation]);

const FootballHightlight = ({ data }) => {
  const [hydrated, setHydrated] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (hydrated) {
    return (
      <ContainerMain>
        <div className='md:flex md:items-center pt-4 gap-x-4'>
          <div className='flex gap-4 md:flex-col md:w-min'>
            <div className='text-black uppercase font-medium text-base md:text-[25px] md:font-semibold'>
              jadwal & hasil
              {/* <span className='hidden md:block'>
                <br />& hasil
              </span>
              <span className='block md:hidden'>& hasil</span> */}
            </div>

            <select className='text-black uppercase font-normal text-base md:text-xs'>
              <option value=''>Jadwal Terbaru</option>
              {data.listjadwal?.map((data, index) => (
                <option key={index} value={`${data?.value}`}>
                  {data?.value}
                </option>
              ))}
            </select>
          </div>

          <Swiper
            className='mt-2 md:mt-0 md:flex'
            slidesPerView={2}
            spaceBetween={15}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 22,
              },
            }}
            ref={swiperRef}
          >
            {data.jadwal?.map((data, index) => (
              <SwiperSlide
                key={index}
                className='max-w-[125px] md:max-w-[200px]'
              >
                <div className='whitespace-nowrap border-r-2 pr-5 md:px-5'>
                  <div className='text-black text-[8px] md:text-[12px] font-medium'>
                    {data?.pertandingan}
                  </div>
                  <div className='text-[#ED1C24] text-[8px] md:text-[12px] font-medium'>
                    {data?.jadwal}
                  </div>

                  <div className='space-y-2 pt-2'>
                    <div className='flex gap-[15px]'>
                      <div className='relative w-[20px] h-[20px] md:w-[25px] md:h-[25px]'>
                        <Image
                          alt={data?.teamAway?.flag}
                          src={data?.teamAway?.flag}
                          fill
                        />
                      </div>
                      <div className='text-black font-medium text-[14px] md:text-[16px]'>
                        {data?.teamAway?.name}
                      </div>
                      <div className='text-black font-medium ml-auto text-[14px] md:text-[16px]'>
                        {data?.teamAway?.score}
                      </div>
                    </div>
                    <div className='flex gap-[15px]'>
                      <div className='relative w-[20px] h-[20px] md:w-[25px] md:h-[25px]'>
                        <Image
                          alt={data?.teamHome?.flag}
                          src={data?.teamHome?.flag}
                          fill
                        />
                      </div>
                      <div className='text-black font-medium text-[14px] md:text-[16px]'>
                        {data?.teamHome?.name}
                      </div>
                      <div className='text-black font-medium ml-auto text-[14px] md:text-[16px]'>
                        {data?.teamHome?.score}
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`#${index}`}
                    className='text-[#081158] font-medium text-[14px]'
                  >
                    Pre Match
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='hidden md:block space-y-5 border-r-2 pr-3'>
            <div
              className='cursor-pointer'
              id='previousButton'
              onClick={() => swiperRef.current.swiper.slidePrev()}
            >
              <ArrowForwardIosIcon className='hover:text-red-500' />
            </div>
            <div
              className='cursor-pointer'
              id='nextButton'
              onClick={() => swiperRef.current.swiper.slideNext()}
            >
              <ArrowBackIosNewIcon className='hover:text-red-500' />
            </div>
          </div>
        </div>
      </ContainerMain>
    );
  }
};

export { FootballHightlight };
