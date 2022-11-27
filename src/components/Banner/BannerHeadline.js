import React from 'react';
import Link from 'next/link';
import { ContainerMain } from 'components/layout/Container';
import { CardHeadline } from 'components/Card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

const BannerHeadline = ({ data }) => {
  return (
    <div className='bg-dark-blue w-full h-full py-5  mt-5'>
      <div className='hidden md:block'>
        <ContainerMain>
          <div className='grid grid-cols-3 gap-2'>
            <Link
              href='#'
              className='relative cursor-pointer col-span-2 row-span-2'
            >
              <CardHeadline datas={data?.headline[0]} />
            </Link>
            <Link href='#' className='relative cursor-pointer'>
              <CardHeadline datas={data?.headline[1]} />
            </Link>
            <Link href='#' className='relative cursor-pointer'>
              <CardHeadline datas={data?.headline[2]} />
            </Link>
            <Link href='#' className='relative cursor-pointer'>
              <CardHeadline datas={data?.headline[3]} />
            </Link>
            <Link href='#' className='relative cursor-pointer'>
              <CardHeadline datas={data?.headline[4]} />
            </Link>
            <Link href='#' className='relative cursor-pointer'>
              <CardHeadline datas={data?.headline[5]} />
            </Link>
          </div>
        </ContainerMain>
      </div>

      <div className='relative w-full h-full md:hidden pb-8 px-[10px]'>
        <Swiper
          spaceBetween={10}
          modules={[Pagination]}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: (index, className) => {
              return '<span class="' + className + '"></span>';
            },
          }}
        >
          {data?.headline?.map((datas, index) => (
            <SwiperSlide key={index}>
              <CardHeadline datas={datas} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='swiper-pagination'></div>
      </div>
    </div>
  );
};

export { BannerHeadline };
