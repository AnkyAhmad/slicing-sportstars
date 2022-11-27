import React from 'react';
import Image from 'next/image';
import { TitleSections } from 'components/TitleSections/TitleSections';
import { ContainerMain } from 'components/layout/Container';
import { CardLatestNews } from 'components/Card/Card';

const LatestNews = ({ data }) => {
  return (
    <>
      <TitleSections
        text='latest news'
        classNameOuter={'mt-[30px] mb-[20px]'}
      />
      <CardLatestNews datas={data} />
    </>
  );
};

export { LatestNews };
