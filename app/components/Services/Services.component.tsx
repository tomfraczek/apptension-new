import Link from 'next/link';
import { Services as ServicesProps } from '@/lib/api';

export const Services = ({ heading, servicesCollection }: ServicesProps) => {
  const { items } = servicesCollection;
  return (
    <section className='container services heading' data-aos='fade-in'>
      <h2>{heading}</h2>
      <div className='servicesContainer'>
        {items.map(({ title, url }) => (
          <Link className='service' href={url}>
            {title}
          </Link>
        ))}
      </div>
      <div className='linkContainer'>
        <Link href='https://www.apptension.com/services'>See all services</Link>
      </div>
    </section>
  );
};
