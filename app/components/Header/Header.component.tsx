'use client';
import Image from 'next/image';
import Link from 'next/link';
import topBanerLogo from '@/public/images/topbaner.png';
import { NavButton } from '@/app/components/NavButton';

const NAV_ITEMS = [
  {
    title: 'Services',
    url: 'https://apptension.webflow.io/services',
  },
  {
    title: 'About',
    url: 'https://apptension.webflow.io/about',
  },
  {
    title: 'Portfolio',
    url: 'https://apptension.webflow.io/portfolio',
  },
  {
    title: 'Careers',
    url: 'https://apptension.webflow.io/careers',
  },
  {
    title: 'Blog',
    url: 'https://apptension.webflow.io/blog',
  },
  {
    title: 'Get in touch',
    url: 'https://apptension.webflow.io/get-in-touch',
  },
];

export const Header = () => {
  return (
    <section className='header'>
      <div className='topBaner'>
        <Image src={topBanerLogo} unoptimized={true} alt='top baner logo' width={63} height={60} />
        <Link href='https://apptension.webflow.io/resources/webinar-backlog'>
          Join us on our next webinar on <span>how to craft the perfect backlog for your product!</span>
        </Link>
      </div>
      <div className='container headerContainer'>
        <div className='logoContainer'>
          <Image src='/images/logo.svg' width={41} alt='logo' height={52} />
        </div>
        <div className='navigation'>
          {NAV_ITEMS.map(({ title, url }) => (
            <NavButton key={title} title={title} url={url} />
          ))}
        </div>
      </div>
    </section>
  );
};
