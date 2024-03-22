import React from 'react';

const VALUES = [{
  title: 'Focused on collaboration',
  detail:
    'We choose to work on problems together rather than apart. We take the time to ensure everyone has the context required to contribute. Titles or experience do not fully determine who gets to work on what. There are no brilliant jerks here.',
}, {
  title: 'Driven by customer compassion',
  detail:
    `We take the time to deeply understand customer problems. We don't build things simply because we want to. We are focused on creating an excellent experience for  the end user.`,
}, {
  title: 'Optimized for learning',
  detail:
    'Controlled failures are encouraged at Roadie. Psychological safety is paramount. Nobody will be punished for experiments that don’t work out.  We are always open to new ideas and no idea will be ridiculed.',
}, {
  title: 'Conscious of community',
  detail:
    'We consider our impact on the wider ecosystem and do our best for diversity, inclusion and equity. Our product was born from an open source project, so we consider ourselves part of a broad community.',
}, {
  title: 'Fulfilled by autonomy',
  detail:
    'Each person in Roadie is given a wide remit. We trust each other to deliver results without much hand holding. Decisions are made by those closest to the issue rather than those with the most seniority. We operate as though most decisions are reversible.',
}];

const Values = ({ values = VALUES }) => (
  <section className="Section size-3">
    <div className="Container">
      <div className='Flex column gap-5 bp2-gap-9'>
        <div className='Flex column gap-2'>
          <h2 className='Text size-7'>Our values</h2>
          <p className='Text size-5 weight-1 lowContrast'>The Roadie values were created by the entire team at the first Roadie off-site. They come from everyone.</p>
        </div>
        <dl className="Grid columns-1 bp2-columns-2 gap-5 bp2-gap-9">
          {values.map((value) => (
            <div className='Flex column gap-1' key={value.title}>
              <dt className="Text size-5">{value.title}</dt>
              <dd className="Text size-4">{value.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);

export default Values;
