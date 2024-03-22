import React from 'react';
import { graphql } from 'gatsby';
import { SEO, SitewideFooter, SitewideHeader, Button } from 'components';
import { RoadieRacksIcon } from 'components/icons';

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import classNames from 'classnames';

const SEO_TITLE = 'Tech Insights: scorecards for Backstage';
const LEAD = `Establish engineering standards and automatically ensure software is meeting expectations around security, operations, compliance, deployment and more.`;

const UsecaseTabs = () => {
  const tabBase = 'Tab';
  const activeTabClass =
    'active';
  const inactiveTabClass = classNames(
    tabBase,
    'inactive'
  );
  return (
    <div>
      <Tabs
        selectedTabClassName={activeTabClass}
        defaultIndex={1}
      >
        <TabList className="TabList mb-9">
          <Tab className={inactiveTabClass}>Catalog Correctness</Tab>
          <Tab className={inactiveTabClass}>DevOps</Tab>
          <Tab className={inactiveTabClass}>Security</Tab>
          <Tab className={inactiveTabClass}>SRE</Tab>
        </TabList>
        <TabPanel className="">
          <div className="Flex row jc-center">
            <div className="Card shadow pt-5 pr-5 pb-5 pl-5" style={{ width: 270 }}>
              <span className="Text size-3 weight-2 mb-1">Label</span>
              <input className='TextField size-2 mb-3' type='text' />
              <span className="Text size-3 weight-2 mb-1">Label</span>
              <input className='TextField size-2 mb-3' type='text' />
              <span className="Text size-3 weight-2 mb-1">Label</span>
              <input className='TextField size-2 mb-3' type='text' />
              <span className="Text size-3 weight-2 mb-1">Label</span>
              <input className='TextField size-2 mb-3' type='text' />
              <span className="Text size-3 weight-2 mb-1">Label</span>
              <input className='TextField size-2' type='text' />
            </div>
          </div>
        </TabPanel>
        <TabPanel className="">
          <div className="Flex row jc-center">
            <div className="Card shadow pt-5 pr-5 pb-5 pl-5" style={{ width: 270 }}>
              <span className="Text size-3 weight-2 mb-1">Label</span>
              <input className='TextField size-2 mb-3' type='text' />
              <span className="Text size-3 weight-2 mb-1">Label</span>
              <input className='TextField size-2 mb-3' type='text' />
              <span className="Text size-3 weight-2 mb-1">Label</span>
              <input className='TextField size-2 mb-3' type='text' />
              <span className="Text size-3 weight-2 mb-1">Label</span>
              <input className='TextField size-2 mb-3' type='text' />
              <span className="Text size-3 weight-2 mb-1">Label</span>
              <input className='TextField size-2' type='text' />
            </div>
          </div>
        </TabPanel>
        <TabPanel className="">
          <div className="Flex row jc-center">
            <div className="Card shadow pt-5 pr-5 pb-5 pl-5" style={{ width: 270 }}>
              <span className="Text size-3 weight-2 mb-1">Label</span>
              <input className='TextField size-2 mb-3' type='text' />
              <span className="Text size-3 weight-2 mb-1">Label</span>
              <input className='TextField size-2 mb-3' type='text' />
              <span className="Text size-3 weight-2 mb-1">Label</span>
              <input className='TextField size-2 mb-3' type='text' />
              <span className="Text size-3 weight-2 mb-1">Label</span>
              <input className='TextField size-2 mb-3' type='text' />
              <span className="Text size-3 weight-2 mb-1">Label</span>
              <input className='TextField size-2' type='text' />
            </div>
          </div>
        </TabPanel>
        <TabPanel className="">
          <div className="Flex row jc-center">
            <div className="Card shadow pt-5 pr-5 pb-5 pl-5" style={{ width: 270 }}>
              <span className="Text size-3 weight-2 mb-1">Label</span>
              <input className='TextField size-2 mb-3' type='text' />
              <span className="Text size-3 weight-2 mb-1">Label</span>
              <input className='TextField size-2 mb-3' type='text' />
              <span className="Text size-3 weight-2 mb-1">Label</span>
              <input className='TextField size-2 mb-3' type='text' />
              <span className="Text size-3 weight-2 mb-1">Label</span>
              <input className='TextField size-2 mb-3' type='text' />
              <span className="Text size-3 weight-2 mb-1">Label</span>
              <input className='TextField size-2' type='text' />
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

const Home = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <>
      <SEO title={`${SEO_TITLE} | ${siteTitle}`} description={LEAD} />

      <SitewideHeader borderBottom={false} />

      <section className="Section size-2">
        <div className="Container">
          <div className='Grid columns-1 bp3-columns-2 gap-9 mb-9 bp2-mb-0'>
            <div className='Flex column gap-5'>
              <h1 className="Text size-8 bp2-size-9">
                Measure and improve your software quality
              </h1>
              <p className="Text size-5 weight-1 lowContrast mb-3">
                Establish engineering standards and automatically ensure software is meeting expectations around security, operations, compliance, and deployment.
              </p>
              <Button
                className="Button size-3 accent bp2-mb-8"
                link={true}
                to="/free-trial/"
                text="Request a Demo"
              />
            </div>
            <div style={{ position: 'relative', marginTop: 'calc(var(--space-5) * -1)', overflow: 'hidden', height: 396 }}>
              <div className='Mask top'></div>
              <div className='Mask bottom'></div>

              <div className='Flex column gap-3 ai-stretch ScorecardAnimationContainer'>
                <div className='Scorecard' style={{ boxShadow: '0 1px 3px 0px hsl(222deg 43.3% 52% / 20%), 0 4px 15px -6px hsl(222deg 71.43% 15% / 20%)' }}>
                  <div>
                    <div className='ScorecardMeter awesome'>
                      <div className='ScorecardMeterMask'>
                        <span className='Text size-4 weight-1 string'>94%</span>
                      </div>
                    </div>
                  </div>
                  <div className='fg-1'>
                    <span className='Text size-3 weight-2 string mb-3'>Basic PagerDuty usage</span>
                    <div className='Grid columns-4'>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Owner</span>
                        <span className='Text size-2 lowContrast'>Engineering</span>
                      </div>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Checks</span>
                        <span className='Text size-2 lowContrast'>21</span>
                      </div>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Entities</span>
                        <span className='Text size-2 lowContrast'>2</span>
                      </div>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Failing</span>
                        <span className='Text size-2 lowContrast'>1</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='Scorecard' style={{ boxShadow: '0 1px 3px 0px hsl(222deg 43.3% 52% / 20%), 0 4px 15px -6px hsl(222deg 71.43% 15% / 20%)' }}>
                  <div>
                    <div className='ScorecardMeter decent'>
                      <div className='ScorecardMeterMask'>
                        <span className='Text size-4 weight-1 string'>45%</span>
                      </div>
                    </div>
                  </div>
                  <div className='fg-1'>
                    <span className='Text size-3 weight-2 string mb-3'>Dependabot configuration & security</span>
                    <div className='Grid columns-4'>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Owner</span>
                        <span className='Text size-2 lowContrast'>Engineering</span>
                      </div>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Checks</span>
                        <span className='Text size-2 lowContrast'>20</span>
                      </div>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Entities</span>
                        <span className='Text size-2 lowContrast'>5</span>
                      </div>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Failing</span>
                        <span className='Text size-2 lowContrast'>11</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='Scorecard' style={{ boxShadow: '0 1px 3px 0px hsl(222deg 43.3% 52% / 20%), 0 4px 15px -6px hsl(222deg 71.43% 15% / 20%)' }}>
                  <div>
                    <div className='ScorecardMeter poor'>
                      <div className='ScorecardMeterMask'>
                        <span className='Text size-4 weight-1 string'>32%</span>
                      </div>
                    </div>
                  </div>
                  <div className='fg-1'>
                    <span className='Text size-3 weight-2 string mb-3'>Backstage Component best practices</span>
                    <div className='Grid columns-4'>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Owner</span>
                        <span className='Text size-2 lowContrast'>Engineering</span>
                      </div>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Checks</span>
                        <span className='Text size-2 lowContrast'>6</span>
                      </div>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Entities</span>
                        <span className='Text size-2 lowContrast'>2</span>
                      </div>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Failing</span>
                        <span className='Text size-2 lowContrast'>4</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='Scorecard' style={{ boxShadow: '0 1px 3px 0px hsl(222deg 43.3% 52% / 20%), 0 4px 15px -6px hsl(222deg 71.43% 15% / 20%)' }}>
                  <div>
                    <div className='ScorecardMeter bad'>
                      <div className='ScorecardMeterMask'>
                        <span className='Text size-4 weight-1 string'>24%</span>
                      </div>
                    </div>
                  </div>
                  <div className='fg-1'>
                    <span className='Text size-3 weight-2 string mb-3'>Security compliance level 1</span>
                    <div className='Grid columns-4'>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Owner</span>
                        <span className='Text size-2 lowContrast'>Engineering</span>
                      </div>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Checks</span>
                        <span className='Text size-2 lowContrast'>8</span>
                      </div>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Entities</span>
                        <span className='Text size-2 lowContrast'>4</span>
                      </div>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Failing</span>
                        <span className='Text size-2 lowContrast'>6</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='Scorecard' style={{ boxShadow: '0 1px 3px 0px hsl(222deg 43.3% 52% / 20%), 0 4px 15px -6px hsl(222deg 71.43% 15% / 20%)' }}>
                  <div>
                    <div className='ScorecardMeter awesome'>
                      <div className='ScorecardMeterMask'>
                        <span className='Text size-4 weight-1 string'>94%</span>
                      </div>
                    </div>
                  </div>
                  <div className='fg-1'>
                    <span className='Text size-3 weight-2 string mb-3'>Basic PagerDuty usage</span>
                    <div className='Grid columns-4'>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Owner</span>
                        <span className='Text size-2 lowContrast'>Engineering</span>
                      </div>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Checks</span>
                        <span className='Text size-2 lowContrast'>21</span>
                      </div>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Entities</span>
                        <span className='Text size-2 lowContrast'>2</span>
                      </div>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Failing</span>
                        <span className='Text size-2 lowContrast'>1</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='Scorecard' style={{ boxShadow: '0 1px 3px 0px hsl(222deg 43.3% 52% / 20%), 0 4px 15px -6px hsl(222deg 71.43% 15% / 20%)' }}>
                  <div>
                    <div className='ScorecardMeter decent'>
                      <div className='ScorecardMeterMask'>
                        <span className='Text size-4 weight-1 string'>45%</span>
                      </div>
                    </div>
                  </div>
                  <div className='fg-1'>
                    <span className='Text size-3 weight-2 string mb-3'>Dependabot configuration & security</span>
                    <div className='Grid columns-4'>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Owner</span>
                        <span className='Text size-2 lowContrast'>Engineering</span>
                      </div>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Checks</span>
                        <span className='Text size-2 lowContrast'>20</span>
                      </div>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Entities</span>
                        <span className='Text size-2 lowContrast'>5</span>
                      </div>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Failing</span>
                        <span className='Text size-2 lowContrast'>11</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='Scorecard' style={{ boxShadow: '0 1px 3px 0px hsl(222deg 43.3% 52% / 20%), 0 4px 15px -6px hsl(222deg 71.43% 15% / 20%)' }}>
                  <div>
                    <div className='ScorecardMeter poor'>
                      <div className='ScorecardMeterMask'>
                        <span className='Text size-4 weight-1 string'>32%</span>
                      </div>
                    </div>
                  </div>
                  <div className='fg-1'>
                    <span className='Text size-3 weight-2 string mb-3'>Backstage Component best practices</span>
                    <div className='Grid columns-4'>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Owner</span>
                        <span className='Text size-2 lowContrast'>Engineering</span>
                      </div>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Checks</span>
                        <span className='Text size-2 lowContrast'>6</span>
                      </div>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Entities</span>
                        <span className='Text size-2 lowContrast'>2</span>
                      </div>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Failing</span>
                        <span className='Text size-2 lowContrast'>4</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='Scorecard' style={{ boxShadow: '0 1px 3px 0px hsl(222deg 43.3% 52% / 20%), 0 4px 15px -6px hsl(222deg 71.43% 15% / 20%)' }}>
                  <div>
                    <div className='ScorecardMeter bad'>
                      <div className='ScorecardMeterMask'>
                        <span className='Text size-4 weight-1 string'>24%</span>
                      </div>
                    </div>
                  </div>
                  <div className='fg-1'>
                    <span className='Text size-3 weight-2 string mb-3'>Security compliance level 1</span>
                    <div className='Grid columns-4'>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Owner</span>
                        <span className='Text size-2 lowContrast'>Engineering</span>
                      </div>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Checks</span>
                        <span className='Text size-2 lowContrast'>8</span>
                      </div>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Entities</span>
                        <span className='Text size-2 lowContrast'>4</span>
                      </div>
                      <div>
                        <span className='Text size-2 weight-2 string mb-1'>Failing</span>
                        <span className='Text size-2 lowContrast'>6</span>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
              
            </div>
          </div>
        </div>
      </section>

      <div className='Flex row jc-center'>
        <div className='SeparatorGradient size-2' role="separator"></div>
      </div>

      <section className="Section size-3 bordered" style={{ background: 'linear-gradient(0deg, var(--gray-2), transparent)' }}>
        <div className="Container">
          <div className="Grid columns-1 bp3-columns-2 gap-9">
            <div>
              <UsecaseTabs />
            </div>
            <div>
              <div className='Flex column gap-5'>
                <h3 className='Text size-4 weight-2 orange'>Write Checks</h3>
                <h3 className='Text size-7'>Create a culture of quality and accountability</h3>
                <p className='Text size-4 lowContrast'>Checks run against source code and the APIs your tools expose. They find software which is not meeting expectations and report this to the people who can get it fixed. Then, Scorecards group checks together into concepts your teams understand.</p>
              </div>
            </div>
          </div>    
        </div>
      </section>

      <section className="Section size-3">
        <div className="Container">
          <div className="Grid columns-1 bp3-columns-2 gap-9 ai-center">
            <div>
              <div className='Flex row'>
                <div className='Card pt-4 pr-4 pb-4 pl-4 mr-2' style={{ flexShrink: 0 }}>
                  <RoadieRacksIcon fill="currentColor" />
                </div>
                <div className='ds-Arrow' style={{ margin: '12px -1px 0 0' }}></div>
                <div className='Card shadow'>
                  <div
                    className='pt-2 pr-5 pb-2 pl-5'
                    style={{
                      borderBottom: '1px solid var(--gray-a4)',
                      borderTopLeftRadius: 'var(--br-3)',
                      borderTopRightRadius: 'var(--br-3)',
                    }}
                  >
                    <div className='Flex row ai-center gap-2'>
                      <p className='Text size-3 weight-2' role="presentation">Roadie Tech Insights</p>
                      <span className='Badge size-1 gray' role="presentation">Bot</span>
                      <span className='Text size-2 lowContrast' role="presentation">Commented 15 mins ago</span>
                    </div>
                  </div>
                  <div className='pt-5 pr-5 pb-5 pl-5'>
                    <p className='Text size-3 mb-5' role="presentation">These changes will upgrade your Security Scorecard from Tier B to Tier A.</p>
                    <div className='Flex column gap-3'>
                      <div className='Flex row gap-3'>
                        <div className='IconContainer size-1 green circle'>
                          <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                        </div>
                        <div>
                          <p className='Text size-3' role="presentation">Snyk Reporting is set up.</p>
                        </div>
                      </div>
                      <div className='Flex row gap-3'>
                        <div className='IconContainer size-1 green circle'>
                          <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                        </div>
                        <div>
                          <p className='Text size-3' role="presentation">Code is analyzed by SonarCloud.</p>
                        </div>
                      </div>
                      <div className='Flex row gap-3'>
                        <div className='IconContainer size-1 green circle'>
                          <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                        </div>
                        <div>
                          <p className='Text size-3' role="presentation">Zero critical CVEs.</p>
                        </div>
                      </div>
                      <div className='Flex row gap-3'>
                        <div className='Flex row ai-center jc-center' style={{ width: 'var(--space-6)', height: 'var(--space-6)' }}>
                          <div className='Status yellow'></div>
                        </div>
                        <div>
                          <p className='Text size-3' role="presentation">Dependencies are regularly updated.</p>
                        </div>
                      </div>
                      <div className='Flex row gap-3'>
                        <div className='Flex row ai-center jc-center' style={{ width: 'var(--space-6)', height: 'var(--space-6)' }}>
                          <div className='Status yellow'></div>
                        </div>
                        <div>
                          <p className='Text size-3' role="presentation">Most recent PenTest is less than 12 months old.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='Flex column gap-5'>
                {/* <span className='Badge size-2 indigo'>Coming Soon</span> */}
                <h3 className='Text size-4 weight-2 orange'>Improve Software</h3>
                <h3 className='Text size-7'>Nudge your teams towards better standards</h3>
                <p className='Text size-4 lowContrast'>Teams can see how they compare to the rest of your company so code quality is gamified. Notifications in Slack and PRs warn engineers when they’re about to make a change that will violate an engineering standard.</p>
              </div>
            </div>
          </div>    
        </div>
      </section>

      <div className='Flex row jc-center'>
        <div className='SeparatorGradient size-2' role="separator"></div>
      </div>

      <section className="Section size-3">
        <div className="Container">
          <div className="Grid columns-1 bp3-columns-2 gap-9 ai-center">
            <div className='Flex row jc-center'>
              <div
                style={{
                  borderRadius: '50%',
                  background: 'linear-gradient(to bottom, orange, yellow)',
                  aspectRatio: '1/1',
                }}
              >
              </div>
              <div className='Flex row'>
                <div className='Card shadow pt-5 pr-5 pb-5 pl-5'>
                  <div className='Flex row jc-center mb-4'>
                    <div
                      className='my-7'
                      style={{
                        borderRadius: 'var(--br-circle)',
                        outlineWidth: '1px',
                        outlineStyle: 'solid',
                        outlineColor: 'var(--gray-1)',
                        outlineOffset: 64,
                      }}
                    >
                      <div
                        style={{
                          borderRadius: 'var(--br-circle)',
                          outlineWidth: '1px',
                          outlineStyle: 'solid',
                          outlineColor: 'var(--gray-2)',
                          outlineOffset: 48,
                        }}
                      >
                        <div
                          style={{
                            borderRadius: 'var(--br-circle)',
                            outlineWidth: '1px',
                            outlineStyle: 'solid',
                            outlineColor: 'var(--gray-3)',
                            outlineOffset: 32,
                          }}
                        >
                          <div
                            style={{
                              borderRadius: 'var(--br-circle)',
                              outlineWidth: '1px',
                              outlineStyle: 'solid',
                              outlineColor: 'var(--gray-4)',
                              outlineOffset: 16,
                            }}
                          >
                            <div className="ScorecardMeter size-2 decent">
                              <div className="ScorecardMeterMask">
                                <span className="Text size-6 weight-1 string">45%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='mb-5'>
                    <p className='Text size-5 weight-2' role="presentation">Patched Logi4j</p>
                  </div>
                  <div className='Flex column gap-3 mb-5'>
                    <div className='Skeleton size-2 gray'></div>
                    <div className='Skeleton size-2 gray width-50'></div>
                  </div>
                  <div className='Grid columns-2 gap-6'>
                    <div>
                      <span className='Text size-3 weight-2' role="presentation">Owner</span>
                      <span className='Text size-3 lowContrast' role="presentation">Platform</span>
                    </div>
                    <div>
                      <span className='Text size-3 weight-2' role="presentation">Executive Sponsor</span>
                      <span className='Text size-3 lowContrast' role="presentation">Amar Nnadi, CTO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='Flex column gap-5'>
                <h3 className='Text size-4 weight-2 orange'>Gain Insight</h3>
                <h3 className='Text size-7'>Run migrations with ease</h3>
                <p className='Text size-4 lowContrast'>Track and report the progress of migrations company-wide. No more spreadsheets; create auto-updating reports that show the current state of each migration.</p>
              </div>
            </div>
          </div>    
        </div>
      </section>

      <div className='Flex row jc-center'>
        <div className='SeparatorGradient size-2' role="separator"></div>
      </div>

      <section className='Section size-3'>
        <div className='Container'>
          <div className='Flex column bp2-row jc-between'>
            <span className='Text size-7 mb-7 bp2-mb-0'>Simpler, safer, and more powerful Backstage.</span>
            <a className='Button size-3 accent' href="#">Request a Demo</a>
          </div>
        </div>
      </section>

      <div className='Flex row jc-center'>
        <div className='SeparatorGradient size-2' role="separator"></div>
      </div>

      <SitewideFooter />
    </>
  );
};

export default Home;

export const pageQuery = graphql`
  query TechInsightsLandingQuery {
    site {
      siteMetadata {
        title
        social {
          twitter
        }
      }
    }
  }
`;
