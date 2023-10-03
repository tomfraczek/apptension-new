'use client';
import { useState, useEffect, useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

type Item = {
  title: string;
  description: string;
  image: {
    fileName: string;
    url: string;
    width: number;
    height: number;
  };
  video: {
    fileName: string;
    url: string;
  };
};

type SwiperElementProps = {
  item: Item;
};

export const SwiperElement = ({ item }: SwiperElementProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const { title, description, image, video } = item;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <SwiperSlide key={title} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link href='https://www.apptension.com/portfolio'>
        <div className='swiperContainer'>
          <Image
            loading='eager'
            src={image.url}
            width={image.width}
            height={image.height}
            alt={image.fileName}
            unoptimized={true}
          />
          {/* <video
                        ref={videoRef}
                        src={video.url}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={isHovered ? 'playing' : ''}
                      /> */}
        </div>
        <div
          className='swiperContent'
          style={{
            transform: isHovered ? 'translateY(0%)' : 'translateY(101%)',
            transition: 'transform 0.3s ease-in-out', // Add a smooth transition effect
          }}
        >
          <h2 className='swiperHeader'>{title}</h2>
          <p>{description}</p>
        </div>
      </Link>
    </SwiperSlide>
  );
};

//swiper bug: https://github.com/nolimits4web/swiper/issues/4413#issuecomment-1021387492
SwiperElement.displayName = 'SwiperSlide';
