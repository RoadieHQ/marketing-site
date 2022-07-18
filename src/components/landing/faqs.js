import React from 'react';
import { Headline, TextLink as Link } from 'components';

const FAQ_CONTENT = [{
  question: `Is Roadie SaaS or on-prem?`,
  answer: () => 
    `Roadie is SaaS only for the moment. Some Backstage plugins will need a connection back to your infrastructure. We offer a number of secure methods for enabling this.`,
  
}, {
  question: `Does Roadie support custom plugins?`,
  answer: () =>
    `Yes. Growth customers get a private plugin repository where Backstage plugins can be published. They can be manipulated and used just like ordinary open-source Backstage plugins.`,

}, {
  question: `Where is Roadie data stored?`,
  answer: () => 
    `All data is stored within the EU and is encrypted at rest using AES-256 encryption algorithm. AWS KMS is used to manage and protect the encryption keys. Data is backed up to AWS S3 at least once per day.`,

}, {
  question: `What level of support does Roadie provide?`,
  answer: () =>
    `Each Growth customer gets a shared Slack or Discord channel. We pride ourselves on our responsiveness. We also deeply value customer feedback and prioritize your requests in our roadmap.`,

}, {
  question: `Do you have a status page?`,
  answer: () => (
    <p>
      Our status page can be found at{' '}
      <Link to="https://status.roadie.io">https://status.roadie.io/</Link>.
    </p>
  ),

}, {
  question: `How does Roadie count developers?`,
  answer: () =>
    `Any user who can access Roadie is a developer. We don't mind if random read-only users access the system from time to time and won't attempt to charge for these.`,
}, {
  question: `How can Roadie connect back to our infrastructure?`,
  answer: () => (
    <p>
      Roadie Backstage plugins can securely connect back to your infrastructure APIs via a variety of mechanisms like OAuth2, token authentication and by assuming AWS roles. We also support the use of an{' '}
      <Link to="https://docs.snyk.io/features/snyk-broker/broker-introduction">open-source broker service</Link> on our Growth plan.
    </p>
  ),
}, {
  question: `What source control tools does Roadie support?`,
  answer: () =>
    `We primarly support GitHub cloud and self-hosted GitHub. We also have basic support for Bitbucket.`,
}, {
  question: `Has Roadie gained a SOC2 compliance?`,
  answer: () => (
    <p>
      Yes. Roadie has achieved SOC2 Type 2 compliance. You can read more about this <Link to="/blog/soc2-compliance/">on our blog</Link>.
    </p>
  ),
}];


const Item = ({ question, answer }) => (
  <div>
    <dt className="font-semibold text-gray-900">{question}</dt>
    <dd className="mt-3 text-gray-500">{answer()}</dd>
  </div>
);

const FAQs = ({
  faqs = FAQ_CONTENT,
  heading = 'Frequently asked questions',
}) => (
  <div className="bg-white">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="max-w-2xl lg:mx-auto lg:text-center">
        <Headline el="h2" size="medium">{heading}</Headline>
      </div>

      <div className="mt-20 px-8">
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
          {faqs.map((faq) => (
            <Item {...faq} key={faq.question} />
          ))}
        </dl>
      </div>
    </div>
  </div>
);

export default FAQs;
