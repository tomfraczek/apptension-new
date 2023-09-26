import { TechRadar as TechRadarProps } from '@/lib/api';
import Link from 'next/link';

export const TechRadar = ({ title, description, cta, video, videoMobile }: TechRadarProps) => {
  const { url } = cta;
  return (
    <section className='container heading techRadar' data-aos='fade-in'>
      <h1>{title}</h1>
      <p>{description}</p>
      <Link href={url}>{cta.title}</Link>
      <video
        // className=''
        src={video.url}
        autoPlay
        muted
        loop
      />
    </section>
  );
};
