import { log } from 'console';
import Image from 'next/image';
import { PartnerCard } from '../PartnerCard';
import { Partners as PartnersProps } from '@/lib/api';

export const Partners = ({ heading, partnersCollection }: PartnersProps) => {
  const { items } = partnersCollection;
  return (
    <section className='container heading partners' data-aos='fade-in'>
      <h2>{heading}</h2>
      <div className='clientsWrapper'>
        {items.map(({ title, description, logo, background, color }) => (
          <PartnerCard
            key={title}
            title={title}
            description={description}
            logo={logo}
            color={color}
            background={background}
          />
        ))}
      </div>
    </section>
  );
};
