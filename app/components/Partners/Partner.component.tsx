import { log } from 'console';
import Image from 'next/image';
import { PartnerCard } from '../PartnerCard';

type Partner = {
  title: string;
  description: string;
  logo: {
    url: string;
    fileName: string;
    width: number;
    height: number;
  };
  color: boolean;
  background: {
    url: string;
    fileName: string;
    width: number;
    height: number;
  };
};

type Partners = {
  heading: string;
  partnersCollection: {
    items: Partner[];
  };
};
type PartnersProps = {
  data: Partners;
};

export const Partners = ({ data }: PartnersProps) => {
  const { heading, partnersCollection } = data;
  const { items } = partnersCollection;
  return (
    <section className='container partners'>
      <h2>{heading}</h2>
      <div className='clientsWrapper'>
        {items.map(({ title, description, logo, background, color }) => (
          <PartnerCard title={title} description={description} logo={logo} color={color} background={background} />
        ))}
      </div>
    </section>
  );
};
