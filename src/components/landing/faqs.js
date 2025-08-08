import React from 'react';
import { Headline, TextLink as Link } from 'components';
import { SCM_SUPPORT_FAQ_TEXT } from '../../contactFormConstants';

const FAQ_CONTENT = [
  {
    question: `Is Roadie SaaS or on-prem?`,
    answer: () => (
      <p>
        Roadie has been running a SaaS version of Backstage since 2020 and it is every bit as
        customizable and secure as self-hosting Backstage.
      </p>
    ),
  },

  {
    question: `Does Roadie support custom plugins?`,
    answer: () => (
      <p>
        Yes. Write a native Backstage plugin as normal and use our CLI to publish it to Roadie. It
        stays private to your company.{' '}
        <Link to="/docs/custom-plugins/getting-started/" color="primary">
          Read more in our docs.
        </Link>
      </p>
    ),
  },

  {
    question: `Where is Roadie data stored?`,
    answer: () =>
      `All data is stored within the EU and is encrypted at rest using AES-256 encryption algorithm. AWS KMS is used to manage and protect the encryption keys. Data is backed up to AWS S3 at least once per day.`,
  },

  {
    question: `What level of support does Roadie provide?`,
    answer: () =>
      `Growth plan customers gets a shared Slack or MS Teams channel. We pride ourselves on our responsiveness. We also deeply value customer feedback and prioritize your requests in our roadmap.`,
  },

  {
    question: `Do you have a status page?`,
    answer: () => (
      <p>
        Our status page can be found at{' '}
        <Link to="https://status.roadie.io" color="primary">
          https://status.roadie.io/
        </Link>
        .
      </p>
    ),
  },

  {
    question: `How does Roadie count developers?`,
    answer: () =>
      `We count "contributing users". These are developers who write the code which is tracked in the software catalog. People who don't write code can log in for free.`,
  },

  {
    question: `How can Roadie connect back to our infrastructure?`,
    answer: () => (
      <p>
        Roadie Backstage plugins can securely connect back to your infrastructure APIs via a variety
        of mechanisms like OAuth2, token authentication by using a broker service. Learn more about{' '}
        <Link to="/docs/details/how-roadie-connects/" color="primary">
          how Roadie connects to your tools
        </Link>{' '}
        .
      </p>
    ),
  },

  {
    question: `What source control tools does Roadie support?`,
    answer: () => SCM_SUPPORT_FAQ_TEXT,
  },

  {
    question: `Has Roadie gained a SOC2 compliance?`,
    answer: () => (
      <p>
        Yes. Roadie has achieved SOC2 Type 2 compliance. You can read more about this{' '}
        <Link to="/blog/soc2-compliance/" color="primary">
          on our blog
        </Link>
        .
      </p>
    ),
  },
  {
    question: `Is Roadie customizable?`,
    answer: () =>
      `Roadie is extremely customizable. You can edit layouts, add and remove plugins, change the theme, run arbitrary code with the scaffolder, write your own plugins and more.`,
  },
];

const Item = ({ question, answer }) => (
  <div>
    <dt className="font-semibold">{question}</dt>
    <dd className="mt-3 text-md">{answer()}</dd>
  </div>
);

const FAQs = ({ faqs = FAQ_CONTENT, heading = 'Frequently asked questions' }) => (
  <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
    <Headline el="h2" size="xs">
      {heading}
    </Headline>

    <div className="mt-20">
      <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-10">
        {faqs.map((faq) => (
          <Item {...faq} key={faq.question} />
        ))}
      </dl>
    </div>
  </div>
);

export default FAQs;
