import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'components';

import Logo from './Logo';
import theme from '../../../theme';
import Attribution from './Attribution';

const useStyles = createUseStyles(() => ({
  link: {
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'capitalize',
  },

  h2: {
    color: theme.palette.text.primary,
    paddingBottom: 16,
  },

  attributionWrapper: {
    textAlign: 'center',
  },

  root: {
    padding: '1rem',
    height: 350,
    border: `1px solid ${theme.palette.grey[300]}`,

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
      <Link to={`/backstage/plugins/${props.name}/`} className={classes.link}>
        <Logo sharpImage={sharpImage} />
        <h2 className={classes.h2}>{props.humanName}</h2>
      </Link>
      <div className={classes.attributionWrapper}>
        <Attribution attribution={props.attribution} />
      </div>
    </div>
  );
};

export default ListItem;
