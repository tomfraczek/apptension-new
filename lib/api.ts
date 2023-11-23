export type HomepageData = {
  pageTitle: string;
  hero: Hero;
  partners: Partners;
  services: Services;
  recentCaseStudies: RecentCaseStudies;
  techRadar: TechRadar;
  whyUs: WhyUs;
  sayAboutUs: {
    heading: string;
    sayAboutUsCollection: {
      items: SayAboutUsItem[];
    };
  };
};

export type Hero = {
  title: string;
  description: string;
  image: {
    title: string;
    url: string;
    width: number;
    height: number;
  };
  imageBackground: {
    title: string;
    url: string;
    width: number;
    height: number;
  };
  cta: {
    title: string;
    url: string;
  };
};

export type Partners = {
  heading: string;
  partnersCollection: {
    items: Partner[];
  };
};

export type Partner = {
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

export type Services = {
  heading: string;
  servicesCollection: {
    items: Service[];
  };
};

export type Service = {
  title: string;
  url: string;
};

export type RecentCaseStudies = {
  heading: string;
  caseStudiesCollection: {
    items: CaseStudy[];
  };
};

export type CaseStudy = {
  title: string;
  description: string;
  image: {
    fileName: string;
    url: string;
    width: number;
    height: number;
  };
  video: {
    fileName: string;
    url: string;
  };
};

export type TechRadar = {
  title: string;
  description: string;
  cta: {
    title: string;
    url: string;
  };
  video: {
    fileName: string;
    url: string;
  };
  videoMobile: {
    title: string;
    url: string;
  };
};

export type WhyUs = {
  heading: string;
  whyUsCollection: {
    items: WhyUsItem[];
  };
};

export type WhyUsItem = {
  title: string;
  description: string;
};

export type SayAboutUsItem = {
  name: string;
  description: string;
  jobTitle: string;
  image: {
    fileName: string;
    url: string;
    width: number;
    height: number;
  };
};

const Homepage = `
  {
    homepage(id:"54VpAtNixKkrfPNeTzTh6D"){
      pageTitle
      hero{
        title
        description
        image{
          title
          url
              width
              height
        }
        imageBackground{
          title
          url
              width
              height
        }
        cta{
          title
          url
        }
      }
      partners{
        heading
        partnersCollection{
          items{
            title
            description
            logo{
              url
              fileName
              width
              height
            }
            color
            background{
              url
              fileName
              width
              height
            }
          }
          
        }
      }
      services{
        heading
        servicesCollection{
          items{
            title
            url
          }
        }
      }
      recentCaseStudies{
        heading
        caseStudiesCollection{
          items{
            title
            description
            image{
              fileName
              url
              width
              height
            }
            video{
              fileName
              url
            }
          }
        }
      }
      techRadar{
        title
        description
        cta{
          title
          url
        }
        video{
          fileName
          url
        }
        videoMobile{
          title
          url
        }
      }
      whyUs{
        heading
        whyUsCollection{
          items{
            title
            description
          }
        }
      }
      sayAboutUs{
        heading
        sayAboutUsCollection{
          items{
            name
            description
            jobTitle
            image{
              fileName
              url
              width
              height
            }
          }
        }
      }
    }
  }
`;

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        preview ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN : process.env.CONTENTFUL_ACCESS_TOKEN
      }`,
    },
    body: JSON.stringify({ query }),
    next: { tags: ['posts'] },
  }).then((response) => response.json());
}

function extractPage(fetchResponse: any): any {
  return fetchResponse?.data?.homepage;
}

export async function getHomepage(isDraftMode: boolean): Promise<HomepageData> {
  const entries = await fetchGraphQL(`query ${Homepage}`, isDraftMode);
  return extractPage(entries);
}
