import React from 'react';
import { Lead, Headline } from 'components';
import { createUseStyles } from 'react-jss';
import Tags from './Tags';

import Logo from './Logo';
import Attribution from './Attribution';

const useStyles = createUseStyles(() => ({
  root: {
    textAlign: 'center',
    paddingBottom: 90,
    paddingTop: 40,
  },
}));

const Header = ({ plugin }) => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <Logo sharpImage={plugin.frontmatter.logoImage.childImageSharp} />
      <Headline>{plugin.frontmatter.heading}</Headline>
      <Lead>{plugin.frontmatter.lead}</Lead>
      <Attribution attribution={plugin.frontmatter.attribution} />
      <Tags tags={plugin.frontmatter.tags}/>
    </header>
  );
};

export default Header;
