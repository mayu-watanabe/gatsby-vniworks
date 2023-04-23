import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { gsap } from 'gsap';
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Footer = () => {
  return (
    <>
      <ul className="list-unstyled">
        <p className="p-0 m-0">----------------------</p>
        {/* <li><Link to="/" className="navbar-brand">_info</Link></li> */}
        <li><Link to="/contact" className="navbar-brand">_contact</Link></li>
        <p className="p-0 m-0">----------------------</p>
      </ul>
    </>
  )
}

export default Footer
