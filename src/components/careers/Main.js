import React from 'react';
import { createUseStyles } from 'react-jss';

import { LayoutControl, InterstitialTitle, Lead, UnorderedList, OrderedList } from 'components';
import Mission from './Mission';

const useStyles = createUseStyles((theme) => ({
  content: {
    paddingLeft: 16,
    paddingRight: 16,
    ...theme.preMadeStyles.content,
  },

  sitewideHeaderWrapper: {
    marginBottom: 40,
    paddingLeft: 16,
    paddingRight: 16,
  },
}));

const CareersMain = ({ role, requirements, offer, process }) => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.spacing}>
        <LayoutControl maxWidthBreakpoint="lg">
          <InterstitialTitle text="Our mission" />
          <Mission classes={classes} />
        </LayoutControl>
      </div>

      <div className={classes.spacing}>
        <LayoutControl maxWidthBreakpoint="lg">
          <InterstitialTitle text="The role" />
          <UnorderedList content={role} />
        </LayoutControl>
      </div>

      <div className={classes.spacing}>
        <LayoutControl maxWidthBreakpoint="lg">
          <InterstitialTitle text="The requirements" />
          <UnorderedList content={requirements} />
        </LayoutControl>
      </div>

      <div className={classes.spacing}>
        <LayoutControl maxWidthBreakpoint="lg">
          <InterstitialTitle text="The offer" />
          <UnorderedList content={offer} />
        </LayoutControl>
      </div>

      <div className={classes.spacing}>
        <LayoutControl maxWidthBreakpoint="lg">
          <InterstitialTitle text="The process" />
          <Lead text="All applicants will receive a response within 3 days. We can't always be perfect, but we can be quick." />
          <OrderedList content={process} />
        </LayoutControl>
      </div>
    </main>
  );
};

export default CareersMain;
