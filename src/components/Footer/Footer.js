import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='mt-6'>
      <div className='lg:hidden'>
        <div className='bg-dark-blue-secondary w-full flex-col inline-flex justify-center items-center p-9'>
          <div className='relative cursor-pointer hover:sca10-105 duration w-full h-full min-h-[42px]'>
            <Image
              className='object-contain '
              alt={'logo'}
              src={'/LOGO-2-Footer.svg'}
              fill
            />
          </div>
          <div>
            <ul className='text-white text-center space-y-[20px] mt-[20px]'>
              <li className='hover:text-red-500'>
                <Link href={'#'}>Tentang Kami</Link>
              </li>
              <li className='hover:text-red-500'>
                <Link href={'#'}>Redaksi</Link>
              </li>
              <li className='hover:text-red-500'>
                <Link href={'#'}>Kode Etik</Link>
              </li>
              <li className='hover:text-red-500'>
                <Link href={'#'}>Disclaimer</Link>
              </li>
              <li className='hover:text-red-500'>
                <Link href={'#'}>Term of Service</Link>
              </li>
              <li className='hover:text-red-500'>
                <Link href={'#'}>Privacy Policy</Link>
              </li>
              <li className='hover:text-red-500'>
                <Link href={'#'}>Sitemap</Link>
              </li>
              <li className='hover:text-red-500'>
                <Link href={'#'}>Kontak Kami</Link>
              </li>
              <li className='hover:text-red-500'>
                <div className='flex items-center gap-[15px]'>
                  <div className='relative cursor-pointer hover:scale-110 duration-200 w-[30px] h-[30px]'>
                    <Image
                      alt='mediaSocial'
                      src='/mediaSocial/instagram-footer.png'
                      fill
                    />
                  </div>
                  <div className='relative cursor-pointer hover:scale-110 duration-200 w-[30px] h-[30px]'>
                    <Image
                      alt='mediaSocial'
                      src='/mediaSocial/twitter-footer.svg'
                      fill
                    />
                  </div>
                  <div className='relative cursor-pointer hover:scale-110 duration-200 w-[30px] h-[30px]'>
                    <Image
                      alt='mediaSocial'
                      src='/mediaSocial/fb-footer.svg'
                      fill
                    />
                  </div>
                  <div className='relative cursor-pointer hover:scale-110 duration-200 w-[30px] h-[30px]'>
                    <Image
                      alt='mediaSocial'
                      src='/mediaSocial/yt-footer.svg'
                      fill
                    />
                  </div>
                  <div className='relative cursor-pointer hover:scale-110 duration-200 w-[30px] h-[30px] bg-white'>
                    <Image
                      alt='mediaSocial'
                      src='/mediaSocial/tiktok-footer.svg'
                      fill
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='hidden lg:block'>
        <div className='bg-dark-blue-secondary px-14 py-[60px]'>
          <div className='flex gap-[250px]'>
            <div className='w-full'>
              <div className='relative cursor-pointer hover:sca10-105 duration max-w-[363px] min-h-[55px]'>
                <Image
                  className='object-contain'
                  alt={'logo'}
                  src={'/LOGO-2-Footer.svg'}
                  fill
                />
              </div>
              <div className='mt-8'>
                <div className='text-white text-xl font-light'>
                  Conect with us :
                </div>
                <div className='flex items-center gap-[15px] mt-5'>
                  <div className='relative cursor-pointer hover:scale-110 duration-200 w-[42px] h-[42px]'>
                    <Image
                      alt='mediaSocial'
                      src='/mediaSocial/instagram-footer.png'
                      fill
                    />
                  </div>
                  <div className='relative cursor-pointer hover:scale-110 duration-200 w-[42px] h-[42px]'>
                    <Image
                      alt='mediaSocial'
                      src='/mediaSocial/twitter-footer.svg'
                      fill
                    />
                  </div>
                  <div className='relative cursor-pointer hover:scale-110 duration-200 w-[42px] h-[42px]'>
                    <Image
                      alt='mediaSocial'
                      src='/mediaSocial/fb-footer.svg'
                      fill
                    />
                  </div>
                  <div className='relative cursor-pointer hover:scale-110 duration-200 w-[42px] h-[42px]'>
                    <Image
                      alt='mediaSocial'
                      src='/mediaSocial/yt-footer.svg'
                      fill
                    />
                  </div>
                  <div className='relative cursor-pointer hover:scale-110 duration-200 w-[42px] h-[42px] bg-white'>
                    <Image
                      alt='mediaSocial'
                      src='/mediaSocial/tiktok-footer.svg'
                      fill
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full flex justify-between'>
              <ul className='text-white space-y-[20px] mt-[20px] text-[20px]'>
                <li className='font-bold'>ABOUT US</li>
                <li className='hover:text-red-500'>
                  <Link href={'#'}>Tentang Kami</Link>
                </li>
                <li className='hover:text-red-500'>
                  <Link href={'#'}>Disclaimer</Link>
                </li>
                <li className='hover:text-red-500'>
                  <Link href={'#'}>Kode Etik</Link>
                </li>
                <li className='hover:text-red-500'>
                  <Link href={'#'}>Term of Service</Link>
                </li>
                <li className='hover:text-red-500'>
                  <Link href={'#'}>Privacy Policy</Link>
                </li>
                <li className='hover:text-red-500'>
                  <Link href={'#'}>Kontak Kami</Link>
                </li>
              </ul>
              <ul className='text-white space-y-[20px] mt-[20px] text-[20px]'>
                <li className='font-bold'>KANAL UTAMA</li>
                <li className='hover:text-red-500'>
                  <Link href={'#'}>Beranda</Link>
                </li>
                <li className='hover:text-red-500'>
                  <Link href={'#'}>Bola</Link>
                </li>
                <li className='hover:text-red-500'>
                  <Link href={'#'}>Balap</Link>
                </li>
                <li className='hover:text-red-500'>
                  <Link href={'#'}>Ragam</Link>
                </li>
                <li className='hover:text-red-500'>
                  <Link href={'#'}>Sportainment</Link>
                </li>
                <li className='hover:text-red-500'>
                  <Link href={'#'}>Hobi</Link>
                </li>
              </ul>
              <ul className='text-white space-y-[20px] mt-[20px] text-[20px]'>
                <li>
                  <br />
                </li>
                <li className='hover:text-red-500'>
                  <Link href={'#'}>Data Statistik</Link>
                </li>
                <li className='hover:text-red-500'>
                  <Link href={'#'}>Multimedia</Link>
                </li>
                <li className='hover:text-red-500'>
                  <Link href={'#'}>Index</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-dark-blue py-[10px] text-white text-center md:w-full '>
        Copyright © 2021
        <span className='md:hidden'>
          <br />
        </span>
        Sportstars.id All Right Reserved
      </div>
    </footer>
  );
};

export { Footer };
