import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

import Navigation from "./navigation"
import CoverImage from "./coverImage"
import "./../css/layout.scss"

const Layout = ({ children }) => {  
  if (typeof window !== 'undefined') { 
    window.addEventListener('mousewheel', e => {
      let imageArea = document.getElementById('image-area');
      if (e.deltaX == 0 && (e.target.hasAttribute('data-main-image') || e.target.hasAttribute('data-placeholder-image'))) {
        imageArea.scrollBy(e.deltaY, 0);
        e.preventDefault();
      }
    }, { passive: false })
  }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container-parent">
      <CoverImage />
      <Navigation />
      <div className="container-fluid px-5">
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
