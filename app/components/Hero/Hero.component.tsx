import Image from 'next/image';
import Link from 'next/link';
import { Hero as HeroProps } from '@/lib/api';

export const Hero = ({ title, description, image, imageBackground, cta }: HeroProps) => {
  return (
    <section data-aos='fade-in' className='heroContainer'>
      <div className='container'>
        <div className='heroContent'>
          <div className='content'>
            <h1>{title}</h1>
            <p>{description}</p>
            <Link href={cta.url}>{cta.title}</Link>
          </div>
          <div className='heroImageContainer'>
            <Image src={image.url} alt={image.title} width={image.width} height={image.height} unoptimized={true} />
          </div>
        </div>
      </div>

      <Image
        src={imageBackground.url}
        alt={imageBackground.title}
        width={imageBackground.width}
        height={imageBackground.height}
      />
    </section>
  );
};
