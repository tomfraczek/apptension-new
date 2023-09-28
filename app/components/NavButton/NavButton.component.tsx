'use client';
import { useState } from 'react';
import Link from 'next/link';
import { log } from 'console';

type NavButtonProps = {
  title: string;
  url: string;
};

export const NavButton = ({ title, url }: NavButtonProps) => {
  const [width, setWidth] = useState(0);
  return (
    <div key={title} className='menuItem' onMouseEnter={() => setWidth(100)} onMouseLeave={() => setWidth(0)}>
      <Link href={url} className='nav-item'>
        {title}
        {title !== 'Get in touch' && <div className='border' style={{ width: `${width}%` }} />}
      </Link>
    </div>
  );
};
