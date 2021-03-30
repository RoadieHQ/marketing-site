import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(() => ({
  section: {
    marginBottom: 32,
  },

  ul: {
    listStyle: 'none',
    padding: 0,
  },
}));

export const SidebarSection = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      {children}
    </div>
  );
};

export const SidebarSectionList = ({ title, children }) => {
  const classes = useStyles();

  return (
    <SidebarSection>
      {title && <p>{title}</p>}
      <ul className={classes.ul}>
        {children}
      </ul>
    </SidebarSection>
  );
};
