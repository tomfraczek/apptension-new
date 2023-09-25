'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { SwiperElement } from '../SwiperElement';

type CaseStudy = {
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

type CaseStudies = {
  heading: string;
  caseStudiesCollection: {
    items: CaseStudy[];
  };
};

type RecemtCaseStudiesProps = {
  data: CaseStudies;
};

export const RecentCaseStudies = ({ data }: RecemtCaseStudiesProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { heading, caseStudiesCollection } = data;
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
