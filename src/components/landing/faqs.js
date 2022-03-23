import React from 'react';
import { Headline, TextLink as Link } from 'components';

const FAQ_CONTENT = [{
  id: 1,
  question: "Is Roadie SaaS or on-prem?",
  answer: () => 
    "Roadie is SaaS only for the moment. Some Backstage plugins will need a connection back to your infrastructure. We offer a number of secure methods for enabling this.",
  
}, {
  id: 2,
  question: "Does Roadie support custom plugins?",
  answer: () =>
    "Yes. Growth customers get a private plugin repository where Backstage plugins can be published. They can be manipulated and used just like ordinary open-source Backstage plugins.",

}, {
  id: 3,
  question: "Where is Roadie data stored?",
  answer: () => 
    "All data is stored within the EU and is encrypted at rest using AES-256 encryption algorithm. AWS KMS is used to manage and protect the encryption keys. Data is backed up to AWS S3 at least once per day.",

}, {
  id: 4,
  question: "What level of support does Roadie provide?",
  answer: () =>
    "Every Growth customer gets a shared Slack or Discord channel. We pride ourselves on our responsiveness. We also deeply value customer feedback and prioritize your requests in our roadmap.",

}, {
  id: 5,
  question: "Do you have a status page?",
  answer: () => (
    <p>
      Yes we do! It can be found at{' '}
      <Link to="https://status.roadie.io">https://status.roadie.io/</Link>.
    </p>
  ),

}, {
  id: 4,
  question: "How does Roadie count developers?",
  answer: () =>
    "Any user who can access Roadie is a developer. We don't mind if random read-only users access the system from time to time and won't attempt to charge for these.",
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
            <Item {...faq} key={faq.id} />
          ))}
        </dl>
      </div>
    </div>
  </div>
);

export default FAQs;
