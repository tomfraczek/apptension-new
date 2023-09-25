import Link from 'next/link';

type Service = {
  title: string;
  url: string;
};

type Services = {
  heading: string;
  servicesCollection: {
    items: Service[];
  };
};

type ServicesProps = {
  data: Services;
};

export const Services = ({ data }: ServicesProps) => {
  const { heading, servicesCollection } = data;
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
