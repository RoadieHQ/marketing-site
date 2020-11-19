import React from 'react';
import { createUseStyles } from 'react-jss';
import get from 'lodash/get';
import { Link } from 'gatsby';

import Logo from './Logo';
import theme from '../../../theme';

const useStyles = createUseStyles(() => ({
  link: {
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'capitalize',
  },

  h2: {
    color: ({ style }) => get(style, 'contrastingColor', theme.palette.text.primary),
    paddingBottom: 16,
  },

  root: {
    backgroundColor: ({ style }) => get(style, 'primaryColor', theme.palette.primary.light),
    padding: '1rem',
    height: 300,

    '&::before': {
      content: '',
      paddingBottom: '100%',
      display: 'block',
    },
  },
}));

const ListItem = (props) => {
  const classes = useStyles(props);
  const sharpImage = props.childrenLogoImage[0].childImageSharp;

  return (
    <div className={classes.root}>
      <Link to={`/backstage/plugins/${props.name}`} className={classes.link}>
        <Logo sharpImage={sharpImage} />
        <h2 className={classes.h2}>{props.humanName}</h2>
      </Link>
    </div>
  );
};

export default ListItem;
