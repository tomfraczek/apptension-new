import Image from 'next/image';
import Link from 'next/link';

type HeroData = {
  title: string;
  description: string;
  image: {
    title: string;
    url: string;
    width: number;
    height: number;
  };
  imageBackground: {
    title: string;
    url: string;
    width: number;
    height: number;
  };
  cta: {
    title: string;
    url: string;
  };
};

type HeroProps = {
  data: HeroData;
};

export const Hero = ({ data }: HeroProps) => {
  const { title, description, image, imageBackground, cta } = data;

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
