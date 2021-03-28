import React from 'react';
import { createUseStyles } from 'react-jss';
import classnames from 'classnames';

import useScrollSpy from '../../hooks/useScrollSpy';

import Link from '../TextLink';

const useStyles = createUseStyles((theme) => ({
  root: {
    display: 'none',
  },

  inner: {},

  section: {
    marginBottom: 32,
  },

  ul: {
    listStyle: 'none',
    padding: 0,
  },

  li: {
    paddingTop: '0.2em',
    paddingBottom: '0.2em',
  },

  activeSection: {
    '& a': {
      color: theme.palette.primary.main,
    },
  },

  [`@media (min-width: ${theme.breakpoints.values.xl}px)`]: {
    root: {
      display: 'block',
      paddingLeft: 32,
      // Stops the bounding div getting too big when there are long headings in the document.
      maxWidth: 250,
      borderLeft: `1px solid ${theme.palette.grey[300]}`,
    },

    inner: {
      paddingTop: 32,
      position: 'sticky',
      top: 0,
    },
  },
}));

const DocTableOfContentsSidebar = ({ headings }) => {
  const classes = useStyles();

  const activeSection = useScrollSpy({
    headings,
    offsetPx: -200,
  });

  return (
    <aside className={classes.root}>
      <div className={classes.inner}>
        <div className={classes.section}>
          <strong>Table of Contents</strong>
        </div>

        <ul className={classes.ul}>
          {headings.map(({ value, id }, index) => {
            const isActive = activeSection === index;
            const className = classnames(classes.li, isActive && classes.activeSection);
            return (
              <li className={className} key={id}>
                <Link to={`#${id}`}>{value}</Link>
              </li>
            );
          })}
        </ul>

      </div>
    </aside>
  );
};

export default DocTableOfContentsSidebar;
