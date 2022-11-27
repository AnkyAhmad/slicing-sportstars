import Image from 'next/image';
import React from 'react';
import { useState } from 'react';

const CardHeadline = ({ datas }) => {
  const [mouseHover, setMouseHover] = useState(false);

  return (
    <>
      <div
        className={`relative w-full min-h-[239px] md:min-h-[265px] md:h-full overflow-hidden`}
      >
        <Image
          className={`bg-gradient-card duration-300 ${
            mouseHover ? 'scale-110' : ''
          }`}
          src={datas?.src}
          alt={datas?.src}
          fill
          priority
        />
      </div>
      <div
        onMouseOver={() => setMouseHover(true)}
        onMouseOut={() => setMouseHover(false)}
        className={`bg-gradient-card absolute top-0 w-full h-full p-3 md:p-0`}
      >
        <div
          className={`absolute bottom-0 ${
            datas?.desc ? 'md:p-[30px]' : 'md:p-4'
          } `}
        >
          <div className='flex items-center gap-3'>
            <div className='text-white bg-red-600 text-[12px] font-semibold px-1 py-1 md:px-[10px] md:py-[5px] md:text-[15px]'>
              {datas?.tag}
            </div>
            <div className='text-white text-[12px] font-normal'>
              {datas?.tanggal}
            </div>
          </div>
          <div className='text-red-600 font-semibold my-2'>
            {datas?.subtitle}
          </div>
          <div
            className={`text-white text-[18px] font-bold md:mb-[15px] ${
              datas?.desc ? ' md:text-[30px]' : ' md:text-[20px]'
            } ${mouseHover ? 'text-red-600' : ''} `}
          >
            {datas?.title}
          </div>
          {datas?.desc && (
            <div className='hidden md:block md:mb-[30px] text-white text-[16px] font-light'>
              {datas?.desc}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const CardLatestNews = ({ datas }) => {
  const [mouseHover, setMouseHover] = useState(false);

  return (
    <>
      <div className='md:flex md:max-h-[232px] md:overflow-hidden'>
        <div className='relative w-full h-full min-h-[227px] md:min-w-[232px]'>
          <Image
            alt={datas?.latestNews?.src}
            src={datas?.latestNews?.src}
            fill
          />
        </div>
        <div className='md:space-y-[5px] md:ml-[18px]'>
          <div className='mt-[20px] md:mt-0 text-red-primary text-[16px] font-medium'>
            {datas?.latestNews?.tag}
          </div>
          <div className='flex items-center justify-start mt-[15px] md:mt-0 gap-2'>
            <div className='relative w-[20px] h-[20px]'>
              <Image
                className='object-contain'
                alt={'/calender.png'}
                src={'/calender.png'}
                fill
              />
            </div>
            <div className='text-black text-[12px] font-normal'>
              {datas?.latestNews?.date}
            </div>
          </div>
          <div className='mt-[20px] md:mt-0 text-red-primary text-[16px] font-medium'>
            {datas?.latestNews?.tagline}
          </div>
          <div className='text-black text-[18px] font-medium mt-[23px] md:my-0 mb-[30px]'>
            {datas?.latestNews?.title}
          </div>
          <div className='hidden md:block text-black text-[15px] font-normal mt-[23px] md:my-0 mb-[30px]'>
            {datas?.latestNews?.desc}
          </div>
        </div>
      </div>

      <div className='hidden md:block border-t-[3px] border-b-[3px] py-[30px] my-[30px] cursor-pointer'>
        <div
          className={`relative w-full min-h-[239px] md:min-h-[500px] md:h-full overflow-hidden`}
        >
          <Image
            className={`duration-300 ${mouseHover ? 'scale-110' : ''}`}
            src={datas?.latestNews?.bigTumbnail?.src}
            alt={datas?.title}
            fill
            priority
          />

          <div
            onMouseOver={() => setMouseHover(true)}
            onMouseOut={() => setMouseHover(false)}
            className={`absolute top-0 w-full h-full bg-gradient-card  `}
          >
            <div
              className={`absolute bottom-0 ${
                datas?.latestNews?.bigTumbnail?.desc ? 'md:p-[30px]' : 'md:p-4'
              } `}
            >
              <div className='flex items-center gap-3'>
                <div className='text-white bg-red-600 text-[15px] font-semibold px-1 py-1 md:px-[10px] md:py-[5px] md:text-[15px]'>
                  {datas?.latestNews?.bigTumbnail?.tag}
                </div>
                <div className='text-white text-[15px] font-normal'>
                  {datas?.latestNews?.bigTumbnail?.tanggal}
                </div>
              </div>
              <div className='text-red-600 text-[15px] font-semibold my-2'>
                {datas?.latestNews?.bigTumbnail?.subtitle}
              </div>
              <div
                className={`text-white text-[36px] font-bold md:mb-[15px] ${
                  mouseHover ? 'text-red-600' : ''
                } `}
              >
                {datas?.latestNews?.bigTumbnail?.title}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const CardPrimary = ({ datas }) => {
  const [mouseHover, setMouseHover] = useState(false);

  return (
    <div className='relative w-full h-full overflow-hidden cursor-pointer'>
      <div
        className={`relative w-full min-h-[239px] md:min-h-[265px] md:h-full overflow-hidden`}
      >
        <Image
          className={`duration-300 ${mouseHover ? 'scale-110' : ''}`}
          src={datas?.src}
          alt={datas?.src}
          fill
          priority
        />
      </div>
      <div
        onMouseOver={() => setMouseHover(true)}
        onMouseOut={() => setMouseHover(false)}
        className={`absolute top-0 w-full h-full`}
      >
        <div
          className={`absolute bottom-0 ${
            datas?.desc ? 'md:p-[30px]' : 'p-[10px] md:p-4'
          } `}
        >
          <div className='flex items-center gap-3'>
            <div className='text-white bg-red-600 text-[12px] font-semibold px-1 py-1 md:px-[10px] md:py-[5px] md:text-[15px]'>
              {datas?.tag}
            </div>
            <div className='text-white text-[12px] font-normal'>
              {datas?.tanggal}
            </div>
          </div>
          <div className='text-red-600 font-semibold my-2'>
            {datas?.subtitle}
          </div>
          <div
            className={`text-white text-[18px] font-bold md:mb-[15px] ${
              datas?.desc ? ' md:text-[30px]' : ' md:text-[20px]'
            } ${mouseHover ? 'text-red-600' : ''} `}
          >
            {datas?.title}
          </div>
          {datas?.desc && (
            <div className='hidden md:block md:mb-[30px] text-white text-[16px] font-light'>
              {datas?.desc}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CardSecondary = ({
  src,
  alt,
  tag,
  date,
  title,
  desc,
  classOuter,
  classOuterImages,
  classTitle,
}) => {
  return (
    <div className={`${classOuter}`}>
      <div
        className={`relative w-full h-full ${
          classOuterImages ? classOuterImages : ' min-h-[227px]'
        }`}
      >
        <Image alt={src} src={src} fill />
      </div>
      <div className='md:space-y-[5px] md:ml-[18px]'>
        <div className='mt-[20px] text-red-primary text-[16px] font-medium'>
          {tag}
        </div>
        <div className='flex items-center justify-start mt-[15px] md:mt-[13px] gap-2'>
          <div className='relative w-[20px] h-[20px]'>
            <Image
              className='object-contain '
              alt={'/calender.png'}
              src={'/calender.png'}
              fill
            />
          </div>
          <div className='text-black text-[12px] font-normal'>{date}</div>
        </div>
        <div
          className={`hover:text-red-500 cursor-pointer  ${
            classTitle
              ? classTitle
              : 'text-black text-[18px] font-medium mt-[23px] md:mt-[13px] mb-[30px]'
          }`}
        >
          {title}
        </div>
        <div className='hidden md:block text-black text-[15px] font-normal mt-[23px] md:my-0 mb-[30px]'>
          {desc}
        </div>
      </div>
    </div>
  );
};

const CardCaptionInnerImages = ({ src, media, classOuter, children }) => {
  return (
    <>
      <div
        className={`relative w-full h-full ${
          classOuter
            ? classOuter
            : 'min-h-[239px] md:min-h-[265px] md:h-full overflow-hidden'
        } `}
      >
        <Image src={src} alt={src} fill priority />
      </div>
      {media && (
        <div className='absolute top-[10px] left-[10px] p-[10px] w-7 h-7 cursor-pointer hover:scale-110 duration-200'>
          <Image
            src={media === 'videos' ? '/videos.png' : '/images.png'}
            alt={`media ${media}`}
            fill
            priority
          />
        </div>
      )}

      <div className={`absolute bottom-0 w-full`}>{children}</div>
    </>
  );
};

export {
  CardHeadline,
  CardLatestNews,
  CardSecondary,
  CardCaptionInnerImages,
  CardPrimary,
};
