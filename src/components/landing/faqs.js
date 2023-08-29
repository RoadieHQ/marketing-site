import React from 'react';
import { Headline, TextLink as Link } from 'components';
import { SCM_SUPPORT_FAQ_TEXT } from '../../contactFormConstants';

const FAQ_CONTENT = [
  {
    question: `Is Roadie SaaS or on-prem?`,
    answer: () =>
      `Roadie is SaaS only for the moment. Some Backstage plugins will need a connection back to your infrastructure. We offer a number of secure methods for enabling this.`,
  },
  {
    question: `Does Roadie support custom plugins?`,
    answer: () =>
      `Yes. Growth customers get a private plugin repository where Backstage plugins can be published. They can be manipulated and used just like ordinary open-source Backstage plugins.`,
  },
  {
    question: `Where is Roadie data stored?`,
    answer: () =>
      `All data is stored within the EU and is encrypted at rest using AES-256 encryption algorithm. AWS KMS is used to manage and protect the encryption keys. Data is backed up to AWS S3 at least once per day.`,
  },
  {
    question: `What level of support does Roadie provide?`,
    answer: () =>
      `Each Growth customer gets a shared Slack or Discord channel. We pride ourselves on our responsiveness. We also deeply value customer feedback and prioritize your requests in our roadmap.`,
  },
  {
    question: `Do you have a status page?`,
    answer: () => (
      <p>
        Our status page can be found at{' '}
        <Link className="Link" to="https://status.roadie.io"><span className='Text size-4 inline'>https://status.roadie.io</span></Link>.
      </p>
    ),
  },
  {
    question: `How does Roadie count developers?`,
    answer: () =>
      `Any user who can access Roadie is a developer. We don't mind if random read-only users access the system from time to time and won't attempt to charge for these.`,
  },
  {
    question: `How can Roadie connect back to our infrastructure?`,
    answer: () => (
      <p>
        Roadie Backstage plugins can securely connect back to your infrastructure APIs via a variety
        of mechanisms like OAuth2, token authentication by using a broker service. Learn more about
        {' '}
        <Link className="Link" to="/docs/details/how-roadie-connects/">
          <span className='Text size-4 inline'>how Roadie connects to your tools</span>
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
        <Link className="Link" to="/blog/soc2-compliance/"><span className='Text size-4 inline'>on our blog</span></Link>.
      </p>
    ),
  },
];

const Item = ({ question, answer }) => (
  <div>
    <dt className="Text size-4 weight-2 mb-2">{question}</dt>
    <dd className="Text size-4">{answer()}</dd>
  </div>
);

const FAQs = ({ faqs = FAQ_CONTENT, heading = 'Frequently asked questions' }) => (
  <div className="Section size-3">
    <h3 className='Text size-7 mb-9'>
      {heading}
    </h3>

    <div className="">
      <dl className="Grid columns-1 bp2-columns-2 gap-6 bp2-gap-9">
        {faqs.map((faq) => (
          <Item {...faq} key={faq.question} />
        ))}
      </dl>
    </div>
  </div>
);

export default FAQs;
