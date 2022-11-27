import { BannerHeadline } from 'components/Banner/BannerHeadline';
import EditorChoice from 'components/EditorChoice/EditorChoice';
import { FootballHightlight } from 'components/FootballHightlight/FootballHightlight';
import { Footer } from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { HotTopic } from 'components/HotTopic/HotTopic';
import { LatestNews } from 'components/LatestNews/LatestNews';
import { ContainerMain } from 'components/layout/Container';
import { MostPopuler } from 'components/MostPopuler/MostPopuler';
import { Multimedia } from 'components/Multimedia/Multimedia';
import { Navbar } from 'components/Navbar/Navbar';
import NavMenu from 'components/NavMenu/NavMenu';
import Statistik from 'components/Statistik/Statistik';
import { SubHeadLine } from 'components/SubHeadline/SubHeadLine';

export default function Home({ data }) {
  return (
    <>
      <Header />
      <div className='sticky top-0 z-[999] bg-white md:relative'>
        <Navbar />
        <NavMenu />
      </div>
      <FootballHightlight data={data} />
      <BannerHeadline data={data} />
      <ContainerMain classNameProps={'md:px-[45px]'}>
        <div className='lg:flex items-start justify-between overflow-hidden'>
          <div className='w-full lg:w-[68%]'>
            <SubHeadLine data={data} />
            <ContainerMain classNameProps={'px-5 md:px-0'}>
              <LatestNews data={data} />
              <MostPopuler data={data} />
            </ContainerMain>
            <Multimedia data={data} />
          </div>
          <div className='w-full lg:w-[30%]'>
            <ContainerMain classNameProps={'px-5 md:px-0'}>
              <EditorChoice data={data} />
              <HotTopic data={data} />
              <Statistik data={data} />
            </ContainerMain>
          </div>
        </div>
      </ContainerMain>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.BASE_PATH}/api/data`);
  const data = await res.json();

  return { props: { data } };
}
