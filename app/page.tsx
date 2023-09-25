import { draftMode } from 'next/headers';
import { getHomepage } from '@/lib/api';
import { Hero } from '@/app/components/Hero';

export default async function Page() {
  const { isEnabled } = draftMode();
  const homepage = await getHomepage(isEnabled);
  const { services, hero, whyUs, techRadar, partners, recentCaseStudies, sayAboutUs } = homepage;

  return <Hero data={hero} />;
}
