type HomepageData = {
  pageTitle: string;
  hero: {
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
  partners: {
    heading: string;
    partnersCollection: {
      items: Partner[];
    };
  };
  services: {
    heading: string;
    servicesCollection: {
      items: Service[];
    };
  };
  recentCaseStudies: {
    heading: string;
    caseStudiesCollection: {
      items: CaseStudy[];
    };
  };
  techRadar: TechRadar;
  whyUs: {
    heading: string;
    whyUsCollection: {
      items: WhyUsItem[];
    };
  };
  sayAboutUs: {
    heading: string;
    sayAboutUsCollection: {
      items: SayAboutUsItem[];
    };
  };
};

type Partner = {
  title: string;
  description: string;
  logo: {
    url: string;
    fileName: string;
    width: number;
    height: number;
  };
  background: {
    url: string;
    fileName: string;
    width: number;
    height: number;
  };
};

type Service = {
  title: string;
  url: string;
};

type CaseStudy = {
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

type TechRadar = {
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

type WhyUsItem = {
  title: string;
  description: string;
};

type SayAboutUsItem = {
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

const POST_GRAPHQL_FIELDS = `
  slug
  title
  coverImage {
    url
  }
  date
  author {
    name
    picture {
      url
    }
  }
  excerpt
  content {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
`;

const Homepage = `
  {
    homepage(id:"54VpAtNixKkrfPNeTzTh6D"){
      pageTitle
      hero{
        title
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
            }
            background{
              url
              fileName
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
  const entries = await fetchGraphQL(
    `query {
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
  }`,
    isDraftMode
  );
  return extractPage(entries);
}
