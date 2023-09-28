'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  const footerArrowRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    if (footerArrowRef.current) {
      footerArrowRef.current.style.transform = 'translate(0%)';
    }
  };

  const handleMouseLeave = () => {
    if (footerArrowRef.current) {
      footerArrowRef.current.style.transform = 'translate(-100%)';
    }
  };

  return (
    <section className='container footer' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link href='https://apptension.com/get-in-touch'>
        <h1>Get In Touch</h1>
        <div className='footerArrow' ref={footerArrowRef}>
          <Image src='/images/arrow.svg' width={90} alt='logo' height={75} />
        </div>
      </Link>

      <div className='topFooter'>
        <div className='footerDetails'>
          <Link href='https://www.apptension.com/'>
            <Image src='envelope.svg' width={23} height={23} alt='envelope' />
            <p>contact@apptension.com</p>
          </Link>
          <Link href='https://www.apptension.com/'>
            <Image src='images/phone.svg' width={23} height={23} alt='phone' />
            <p>+48 793 925 552</p>
          </Link>
        </div>
        <div className='location local-1'>
          <Image src='images/usa.svg' width={383} height={237} alt='usa' />
        </div>
        <div className='location local-2'>
          <Image src='images/uk.svg' width={383} height={237} alt='uk' />
        </div>
        <div className='location local-3'>
          <Image src='images/pl.svg' width={383} height={237} alt='pl' />
        </div>
      </div>
    </section>
  );
};
