import React from 'react';
import { createUseStyles } from 'react-jss';

import { LayoutControl, InterstitialTitle, Lead, UnorderedList, OrderedList } from 'components';
import Mission from './Mission';
import OpenSourceMission from './OpenSourceMission';

const useStyles = createUseStyles((theme) => ({
  content: theme.preMadeStyles.content,

  mainWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const CareersMain = ({ showOpenSource, role, requirements, offer, process }) => {
  const classes = useStyles();

  return (
    <div className={classes.mainWrapper}>
      <main className={classes.content}>
        {showOpenSource ? (
          <LayoutControl maxWidthBreakpoint="lg">
            <InterstitialTitle text="What's the opportunity? 🤔" />
            <OpenSourceMission classes={classes} />
          </LayoutControl>
        ) : (
          <LayoutControl maxWidthBreakpoint="lg">
            <InterstitialTitle text="What is the company's mission? 🤔" />
            <Mission classes={classes} />
          </LayoutControl>
        )}
        <LayoutControl maxWidthBreakpoint="lg">
          <InterstitialTitle text="What does my day to day look like? 📅" />
          <UnorderedList content={role} />
        </LayoutControl>

        <LayoutControl maxWidthBreakpoint="lg">
          <InterstitialTitle text="What skills would we like to see? ✨" />
          <UnorderedList content={requirements} />
        </LayoutControl>

        <LayoutControl maxWidthBreakpoint="lg">
          <InterstitialTitle text="What is the offer? 💙" />
          <UnorderedList content={offer} />
        </LayoutControl>

        {showOpenSource && (
          <LayoutControl maxWidthBreakpoint="lg">
            <InterstitialTitle text="What is the company's mission? 🤔" />
            <Mission classes={classes} />
          </LayoutControl>
        )}

        <LayoutControl maxWidthBreakpoint="lg">
          <InterstitialTitle text="What is the process? 📖" />
          <Lead>
            All applicants will receive a response within 3 days. We can&apos;t always be perfect,
            but we can be quick.
          </Lead>
          <OrderedList content={process} />
        </LayoutControl>
      </main>
    </div>
  );
};

export default CareersMain;
