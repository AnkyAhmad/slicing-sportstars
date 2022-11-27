import React from 'react';
import Image from 'next/image';
import { TitleSections } from 'components/TitleSections/TitleSections';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CardCaptionInnerImages } from 'components/Card/Card';
import { ContainerMain } from 'components/layout/Container';

const Multimedia = ({ data }) => {
  return (
    <div className='bg-dark-blue md:p-[20px]'>
      <ContainerMain>
        <TitleSections
          text='Multimedia'
          textColor='text-white'
          classNameOuter='text-white py-[10px]'
        />
        <Swiper
          className='mt-[20px]'
          slidesPerView={1}
          spaceBetween={15}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
          }}
        >
          {data?.multiMedia?.map((datas, index) => (
            <SwiperSlide key={index} className='pb-[20px] max-w-[273px]'>
              <CardCaptionInnerImages
                src={datas?.src}
                classOuter='min-w-[273px] min-h-[197px]'
                alt={datas?.title}
                media={datas?.media}
              >
                <div className='bottom-0 absolut px-5 pb-8'>
                  <div className='text-white text-[16px] font-semibold hover:text-red-primary cursor-pointer'>
                    {datas?.title}
                  </div>
                  <div className='flex items-center justify-start mt-[15px] gap-2'>
                    <div className='relative w-[20px] h-[20px]'>
                      <Image
                        className='object-contain'
                        alt={'/calender.png'}
                        src={'/calender.png'}
                        fill
                      />
                    </div>
                    <div className='text-white text-[12px] font-normal '>
                      {datas?.date}
                    </div>
                  </div>
                </div>
              </CardCaptionInnerImages>
            </SwiperSlide>
          ))}
        </Swiper>
      </ContainerMain>
    </div>
  );
};

export { Multimedia };
