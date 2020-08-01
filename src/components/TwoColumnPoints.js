import React from 'react';
import classnames from 'classnames';
import { createUseStyles } from 'react-jss';
import isFunction from 'lodash/isFunction';

const useStyles = createUseStyles((theme) => ({
  root: {},

  col: {
    paddingLeft: 16,
    paddingEight: 16,
  },

  strong: {
    marginTop: 0,
    lineHeight: '1.75rem',
  },

  [`@media (min-width: ${theme.breakpoints.values.md}px)`]: {
    root: {
      display: 'flex',
      margin: 'auto',
    },

    col: {
      flex: 1,
    },
  },
}));

const Point = ({ title, text, classes }) => {
  return (
    <div>
      <strong className={classes.strong}>{isFunction(title) ? title() : title}</strong>
      <p>{text}</p>
    </div>
  );
};

const TwoColumnPoints = ({ content = [[], []] }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classnames(classes.col, classes.leftCol)}>
        {content[0].map((props) => (
          <Point {...props} key={props.title} classes={classes} />
        ))}
      </div>

      <div className={classnames(classes.col, classes.rightCol)}>
        {content[0].map((props) => (
          <Point {...props} key={props.title} classes={classes} />
        ))}
      </div>
    </div>
  );
};

export default TwoColumnPoints;
