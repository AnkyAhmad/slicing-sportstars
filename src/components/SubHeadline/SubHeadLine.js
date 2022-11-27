import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import { ContainerMain } from 'components/layout/Container';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

SwiperCore.use([Navigation]);

const SubHeadLine = ({ data }) => {
  const swiperRefHeadline = useRef(null);
  const [isShowNavigation, setIsShowNavigation] = useState(false);

  return (
    <>
      <div className='relative w-full h-full min-h-[49px] md:min-h-[70px] mt-[30px] mb-[18px]'>
        <Image
          alt={'/tumbnail_subheadline.png'}
          src={'/tumbnail_subheadline.png'}
          fill
        />
      </div>

      <ContainerMain
        classNameProps={'relative px-[10px] md:px-0 overflow-hidden'}
      >
        <div
          onMouseEnter={() => setIsShowNavigation(!isShowNavigation)}
          onMouseLeave={() => setIsShowNavigation(!isShowNavigation)}
        >
          <button
            className={`z-50 cursor-pointer absolute top-1/4 left-0 pr-[10px] py-[13px] bg-[#CFD1D2] rounded-r-lg flex items-center justify-center hover:text-red-600 transition duration-300 ${
              isShowNavigation ? 'md:-translate-x-0' : 'md:-translate-x-8'
            }`}
            id='previousButton'
            onClick={() => swiperRefHeadline.current.swiper.slidePrev()}
          >
            <ArrowBackIosNewIcon className='text-[20px] ' />
          </button>
          <Swiper
            className='z-0'
            ref={swiperRefHeadline}
            navigation={true}
            modules={[Navigation]}
            slidesPerView={2}
            spaceBetween={8}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {data?.subHeadLine?.map((datas, index) => (
              <SwiperSlide
                key={index}
                className='relative max-w-[168px] min-h-[132px] md:min-w-[187px] -z-0'
              >
                <Image
                  className='w-full h-full min-w-[168px] min-h-[132px] md:min-w-[187px] md:min-h-[132px] '
                  alt={datas?.src}
                  src={datas?.src}
                  fill
                />
                <div className='absolute bottom-[6px] px-[8px]'>
                  <div className='text-[14px] font-bold text-white cursor-pointer hover:text-red-600 leading-4'>
                    {datas?.title}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className={`z-50 cursor-pointer absolute top-1/4 right-0 pl-[10px] py-[13px] bg-[#CFD1D2] rounded-l-lg flex items-center justify-center hover:text-red-600 transition duration-300 ${
              isShowNavigation ? 'md:-translate-x-0' : 'md:translate-x-8'
            }`}
            id='nextButton'
            onClick={() => swiperRefHeadline.current.swiper.slideNext()}
          >
            <ArrowForwardIosIcon className='text-[20px]' />
          </button>
        </div>
      </ContainerMain>
    </>
  );
};

export { SubHeadLine };
