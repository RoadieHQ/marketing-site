import React from 'react';
import { createUseStyles } from 'react-jss';
import get from 'lodash/get';
import { Link } from 'gatsby';

import Logo from './Logo';
import theme from '../../../theme';

const useStyles = createUseStyles(() => ({
  root: {
    backgroundColor: ({ style }) => get(style, 'primaryColor', theme.palette.primary.light),
  },

  link: {
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'capitalize',
  },

  h2: {
    color: ({ style }) => get(style, 'contrastingColor', theme.palette.text.primary),
    paddingBottom: 16,
  },

  [`@media (min-width: ${theme.breakpoints.values.sm}px)`]: {
    root: {
      flexGrow: 1,
      maxWidth: 300,
      display: 'inline-block',
      marginLeft: 24,

      '&:first-child': {
        marginLeft: 0,
      },
    },
  },
}));

const ListItem = (props) => {
  const classes = useStyles(props);
  const sharpImage = props.childrenLogoImage[0].childImageSharp;

  return (
    <li className={classes.root}>
      <Link to={`/backstage/plugins/${props.name}`} className={classes.link}>
        <Logo sharpImage={sharpImage} />
        <h2 className={classes.h2}>{props.name}</h2>
      </Link>
    </li>
  );
};

export default ListItem;
