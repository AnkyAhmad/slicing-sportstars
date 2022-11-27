import Image from 'next/image';

export const Navbar = () => {
  return (
    <>
      <nav className='container mx-auto flex justify-between items-center p-5 md:px-[45px] md:gap-8'>
        <div className='flex w-5 flex-col gap-1 justify-between items-center md:hidden'>
          <span className={`h-[3px] rounded-lg w-full bg-black`} />
          <span className={`h-[3px] rounded-lg w-full bg-black`} />
          <span className={`h-[3px] rounded-lg w-full bg-black`} />
        </div>

        <div className='relative cursor-pointer w-[215px] h-[32px] md:w-[330px] md:h-[50px] lg:w-[330px] lg:h-[50px]'>
          <Image alt='logo' src='/LOGO-2.svg' fill />
        </div>
        <div className='relative w-[20px] h-[20px] md:hidden mb-2'>
          <Image alt='searc' src='/Search.svg' fill />
        </div>
        <div className='relative md:w-[500px] md:h-[90px] lg:w-[728px] lg:h-[90px] hidden md:block'>
          <Image
            alt='image-34.png'
            src='/image-34.png'
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </nav>
    </>
  );
};
