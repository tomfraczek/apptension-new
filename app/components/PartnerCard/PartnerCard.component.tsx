'use client';
import { useState } from 'react';
import Image from 'next/image';

type PartnerCardProps = {
  title: string;
  description: string;
  logo: {
    fileName: string;
    url: string;
    width: number;
    height: number;
  };
  color: boolean;
  background: {
    fileName: string;
    url: string;
    width: number;
    height: number;
  };
};

export const PartnerCard = ({ title, description, logo, background, color }: PartnerCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div key={title} className='partnerItem' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Image
        style={
          title === 'viu'
            ? { filter: 'none', height: '44.7px' }
            : title === 'universal' || title === 'hoover'
            ? { filter: 'invert()', height: '44.7px' }
            : color
            ? { filter: 'grayscale(100%)', height: '44.7px' }
            : undefined
        }
        className='logo'
        src={logo.url}
        width={logo.width}
        height={logo.height}
        alt={logo.fileName}
        unoptimized={true}
      />
      <div
        className='overflowElement'
        style={{
          transform: isHovered ? 'translate(0%)' : 'translate(-101%)',
          transition: 'transform 0.3s ease-in-out', // Add a smooth transition effect
        }}
      >
        {background?.url ? (
          <Image
            className='background'
            src={background.url}
            width={background.width}
            height={background.height}
            alt={background.fileName}
            unoptimized={true}
          />
        ) : (
          <p>{description}</p>
        )}
      </div>
    </div>
  );
};
