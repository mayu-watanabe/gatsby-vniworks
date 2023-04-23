import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { gsap } from 'gsap';
import AniLink from "gatsby-plugin-transition-link/AniLink";

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : {className: "nav-link"}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const Navbar = ({ siteTitle }) => {
  return (
    <nav className="nav">
      <div>
        <Link fade to="/" className="navbar-brand">{siteTitle}</Link>
        <p className="p-0 m-0">[ under construction ]</p>
        <p className="p-0 m-0">----------------------</p>
        <ul className="list-unstyled navbar-nav">
          <li className="nav-item">
            <ExactNavLink 
              to="/works/vnospinari0"
            >
              _vnospinari0
            </ExactNavLink>
          </li>
          <li className="nav-item">
            <ExactNavLink
              to="/works/vnente"
            >
              _vnente
            </ExactNavLink>
          </li>
          <li className="nav-item">
            <ExactNavLink
              to="/works/vnimene"
            >
              _vnimene
            </ExactNavLink>
          </li>
        </ul>
        <p className="p-0 m-0">----------------------</p>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
