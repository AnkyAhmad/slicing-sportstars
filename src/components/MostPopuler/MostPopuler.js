import React from 'react';
import { CardSecondary } from 'components/Card/Card';
import { TitleSections } from 'components/TitleSections/TitleSections';

import { Swiper, SwiperSlide } from 'swiper/react';

const MostPopuler = ({ data }) => {
  return (
    <>
      <TitleSections text='Most Populer' />
      <Swiper
        className='mt-[20px]'
        slidesPerView={2}
        spaceBetween={15}
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
        {data?.mostPopuler?.sliders?.map((datas, index) => (
          <SwiperSlide
            key={index}
            className='w-full max-w-[138px] md:max-w-[187px]'
          >
            <CardSecondary
              src={datas?.src}
              alt={datas?.src}
              date={datas?.date}
              title={datas?.title}
              classOuterImages='min-h-[109px]'
              classDesc='text-black text-[16px] font-bold mt-[13px]'
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='divide-y-2 border-b-2 border-t-2 border-[#cecccc] divide-[#cecccc]'>
        {data?.mostPopuler?.tumbnai?.map((datas, index) => (
          <CardSecondary
            key={index}
            src={datas?.src}
            alt={datas?.src}
            date={datas?.date}
            title={datas?.title}
            desc={datas?.desc}
            tag={datas?.tag}
            classOuter='py-[20px] md:flex'
            classOuterImages='min-h-[227px] md:min-w-[232px] '
            classTitle='text-black text-[16px] md:text-[20px] font-bold mt-[13px]'
          />
        ))}
      </div>
    </>
  );
};

export { MostPopuler };
