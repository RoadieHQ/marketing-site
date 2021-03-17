import React from 'react';
import { createUseStyles } from 'react-jss';

import { LayoutControl, InterstitialTitle, Lead, UnorderedList, OrderedList } from 'components';
import Mission from './Mission';

const useStyles = createUseStyles((theme) => ({
  content: theme.preMadeStyles.content,

  mainWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const CareersMain = ({ role, requirements, offer, process }) => {
  const classes = useStyles();

  return (
    <div className={classes.mainWrapper}>
      <main className={classes.content}>
        <LayoutControl maxWidthBreakpoint="lg">
          <InterstitialTitle text="Our mission" />
          <Mission classes={classes} />
        </LayoutControl>

        <LayoutControl maxWidthBreakpoint="lg">
          <InterstitialTitle text="The role" />
          <UnorderedList content={role} />
        </LayoutControl>

        <LayoutControl maxWidthBreakpoint="lg">
          <InterstitialTitle text="The requirements" />
          <UnorderedList content={requirements} />
        </LayoutControl>

        <LayoutControl maxWidthBreakpoint="lg">
          <InterstitialTitle text="The offer" />
          <UnorderedList content={offer} />
        </LayoutControl>

        <LayoutControl maxWidthBreakpoint="lg">
          <InterstitialTitle text="The process" />
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
