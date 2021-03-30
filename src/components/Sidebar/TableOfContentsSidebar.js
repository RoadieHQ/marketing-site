import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

import Sidebar from './Sidebar';
import { SidebarSection, SidebarSectionList } from './Section';
import useScrollSpy from '../../hooks/useScrollSpy';
import Link from '../TextLink';

const useStyles = createUseStyles((theme) => ({
  root: {
    display: 'none',
  },

  link: {
    display: 'block',
    paddingTop: '0.2em',
    paddingBottom: '0.2em',
  },

  activeLink: {
    color: theme.palette.primary.main,
  },

  [`@media (min-width: ${theme.breakpoints.values.xl}px)`]: {
    root: {
      display: 'block',
      paddingLeft: 32,
      // Stops the bounding div getting too big when there are long headings in the document.
      maxWidth: 250,
      borderLeft: `1px solid ${theme.palette.grey[300]}`,
      borderRight: 'none',
    },
  },
}));

const TableOfContentsSidebar = ({ headings }) => {
  const classes = useStyles();

  const activeSection = useScrollSpy({
    headings,
    offsetPx: -200,
  });

  return (
    <Sidebar className={classes.root}>
      <SidebarSection>
        <strong>Table of Contents</strong>
      </SidebarSection>

      <SidebarSectionList>
        {headings.map(({ value, id }, index) => {
          const isActive = activeSection === index;
          const className = classnames(classes.link, isActive && classes.activeLink);
          return (
            <li key={id}>
              <Link to={`#${id}`} className={className}>{value}</Link>
            </li>
          );
        })}
      </SidebarSectionList>
    </Sidebar>
  );
};

export default TableOfContentsSidebar;
