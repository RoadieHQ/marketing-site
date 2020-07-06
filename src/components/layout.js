import React from "react"
import { Link } from "gatsby"
import { createUseStyles } from "react-jss"

import { rhythm, scale } from "../utils/typography"

const useStyles = createUseStyles({
  h1: {
    ...scale(1.5),
    marginBottom: rhythm(1.5),
    marginTop: 0,
  },

  link: {
    boxShadow: "none",
    color: "inherit",
  },

  h3: {
    fontFamily: `Montserrat, sans-serif`,
    marginTop: 0,
  },

  root: {
    marginLeft: `auto`,
    marginRight: `auto`,
    maxWidth: rhythm(24),
    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
  },
})

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header
  const classes = useStyles()

  if (location.pathname === rootPath) {
    header = (
      <h1 className={classes.h1}>
        <Link className={classes.link} to={`/`}>
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3 className={classes.h3}>
        <Link className={classes.link} to={`/`}>
          {title}
        </Link>
      </h3>
    )
  }

  return (
    <div className={classes.root}>
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
