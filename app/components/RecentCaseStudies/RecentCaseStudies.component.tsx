'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RecentCaseStudies as RecentCaseStudiesProps } from '@/lib/api';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { SwiperElement } from '../SwiperElement';

export const RecentCaseStudies = ({ heading, caseStudiesCollection }: RecentCaseStudiesProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { items } = caseStudiesCollection;

  return (
    <section className='container heading caseStudies' data-aos='fade-in'>
      <h2>{heading}</h2>
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='mySwiper'
        >
          {items.map((item) => (
            <SwiperElement item={item} />
          ))}
        </Swiper>
      </>
    </section>
  );
};
