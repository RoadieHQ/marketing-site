import React from 'react';

import {
  SEO,
  SitewideFooter,
  SitewideHeader,
} from 'components';

import {
  Team,
  SimpleCenteredHeading,
  ExplainingTheVision,
  CustomerLogoCloud,
} from 'components/landing';

const PEOPLE = [{
  name: 'David Tuite',
  role: 'Chief Roadie',
  imageUrl:
    'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  bio:
    'David worked as a software engineer and infrastructure product manager for 10+ years. Before founding Roadie, he worked on a service catalog and developer portal at Workday.',
  twitterUrl: 'https://twitter.com/dtuite',
  linkedinUrl: 'https://linkedin.com/in/davidtuite',
}, {

  name: 'Martina Iglaseas Fernandez',
  role: 'Enginering Manager',
  imageUrl:
    'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  bio:
    'Martina should write about herself here.',
  twitterUrl: 'https://twitter.com/martina_if',
  linkedinUrl: 'https://linkedin.com/in/martina-iglesias-fernandez',
}, {

  name: 'Orla Tuite',
  role: 'Chief of Staff',
  imageUrl:
    'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  bio:
    'Orla should write about herself here.',
  twitterUrl: 'https://twitter.com/OrlaChewit',
  linkedinUrl: 'https://www.linkedin.com/in/orla-t-01a80682/',
}, {

  name: 'Jussi Hallila',
  role: 'Software Engineer',
  imageUrl:
    'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  bio:
    'Jussi should write about himself here.',
  twitterUrl: 'https://twitter.com/Xantier',
  linkedinUrl: 'https://www.linkedin.com/in/jussihallila/',
}, {

  name: 'Brian Fletcher',
  role: 'Software Engineer',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  bio:
    'Brian should write about himself here.',
  twitterUrl: 'https://twitter.com/punkle',
  linkedinUrl: 'https://www.linkedin.com/in/brianjffletcher/',
}, {

  name: 'Sam Blausten',
  role: 'Software Engineer',
  imageUrl:
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  bio:
    'Sam should write about himself here.',
  twitterUrl: 'https://twitter.com/SBlausten',
  linkedinUrl: 'https://www.linkedin.com/in/samblausten/',
}, {

  name: 'Iain Billett',
  role: 'Software Engineer',
  imageUrl:
    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  bio:
    'Iain should write about himself here.',
  linkedinUrl: 'https://www.linkedin.com/in/iain-billett-0642b531/',
}, {

  name: 'Irma Solakovic',
  role: 'Software Engineer',
  imageUrl:
    'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  bio:
    'Irma should write about herself here.',
  linkedinUrl: 'https://www.linkedin.com/in/irma-solakovic-70b13b9a/',
}, {

  name: 'Nicolas Arnold',
  role: 'Software Engineer',
  imageUrl:
    'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  bio:
    'Nicolas should write about himself here.',
  linkedinUrl: 'https://www.linkedin.com/in/nicolas-arnold-4b6021151/',
}];

const About = () => (
  <>
    <SEO
      title={`About us | Roadie`}
      description="Who we are and what we care about."
    />
    <SitewideHeader />

    <SimpleCenteredHeading
      headline="Our mission is to increase the effectiveness of software enginering"
      lead="Software is positively impacting many facets our human life. We believe we are still early in the journey towards buinding software effectively. By making software development more effective, we can have a huge impact on humanity."
    />

    <ExplainingTheVision />

    <Team
      headline="Our Team"
      lead="We are a small group of folks from enterprise software backgrounds. We understand the complexity of modern software development."
      people={PEOPLE}
    />

    <CustomerLogoCloud />

    <SitewideFooter />
  </>
);

export default About;

