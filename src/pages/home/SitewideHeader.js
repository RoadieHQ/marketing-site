import React from 'react';
import { createUseStyles } from 'react-jss';
import grey from '@material-ui/core/colors/grey';
import { FaTwitter, FaGithub, FaSpotify } from 'react-icons/fa';

import LayoutControl from '../LayoutControl';

const useStyles = createUseStyles(() => ({
  root: {
    fontFamily: 'Moderat, Overpass, Helvetica Neue, Arial',
    color: grey[900],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  leftSpace: {
    marginLeft: 8,
  },

  iconLink: {
    color: grey[700],

    '&:hover': {
      color: grey[600],
    },
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <LayoutControl>
      <div className={classes.root}>
        <span>
          <h2>Roadie</h2>
        </span>

        <span>
          <span>
            <a href="https://twitter.com/RoadieHQ" target="__blank" className={classes.iconLink}>
              <FaTwitter />
            </a>
          </span>

          <span className={classes.leftSpace}>
            <a href="https://github.com/RoadieHQ" target="__blank" className={classes.iconLink}>
              <FaGithub />
            </a>
          </span>

          <span className={classes.leftSpace}>
            <a href="https://backstage.io" target="__blank" className={classes.iconLink}>
              <FaSpotify />
            </a>
          </span>
        </span>
      </div>
    </LayoutControl>
  );
};

export default Hero;
