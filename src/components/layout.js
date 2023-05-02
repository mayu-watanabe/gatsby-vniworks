import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./../css/layout.scss"

const Layout = ({ children }) => {  
  if (typeof window !== 'undefined') { 
    window.addEventListener('mousewheel', e => {
      let imageArea = document.getElementById('image-area');
      if (e.deltaX === -0 && e.target.tagName === 'IMG') {
        imageArea.scrollBy(e.deltaY,0);
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
      <Header />
      <div className="container-fluid p-5">
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
