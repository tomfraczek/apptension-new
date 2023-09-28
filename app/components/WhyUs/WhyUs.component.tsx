import { WhyUs as WhyUsProps } from '@/lib/api';

export const WhyUs = ({ heading, whyUsCollection }: WhyUsProps) => {
  const { items } = whyUsCollection;
  return (
    <section className='container heading whyUs' data-aos='fade-in'>
      <h2>{heading}</h2>
      <div className='whyContainer'>
        {items.map(({ title, description }) => (
          <div key={title} className='whyContent'>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
