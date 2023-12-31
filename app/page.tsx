import { draftMode } from 'next/headers';
import { getHomepage } from '@/lib/api';
import { Hero } from '@/app/components/Hero';
import { Partners } from '@/app/components/Partners';
import { Services } from '@/app/components/Services';
import { RecentCaseStudies } from '@/app/components/RecentCaseStudies';
import { TechRadar } from '@/app/components/TechRadar';
import { WhyUs } from './components/WhyUs';

export default async function Page() {
  const { isEnabled } = draftMode();
  const homepage = await getHomepage(isEnabled);
  const { services, hero, whyUs, techRadar, partners, recentCaseStudies, sayAboutUs } = homepage || {};
  console.log(homepage);

  return (
    <>
      {homepage && (
        <>
          <Hero {...hero} />
          <Partners {...partners} />
          <Services {...services} />
          <RecentCaseStudies {...recentCaseStudies} />
          <TechRadar {...techRadar} />
          <WhyUs {...whyUs} />
        </>
      )}
    </>
  );
}
